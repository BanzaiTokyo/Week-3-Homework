import {
  createPublicClient,
  createWalletClient,
  formatEther,
  hexToString,
  http,
  parseEther,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import * as dotenv from "dotenv";
import { viem } from "hardhat";
import {
  abi,
  bytecode,
} from "../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";

dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const voterPrivateKey = process.env.PRIVATE_KEY || "";

const validateAddress = (address?: `0x${string}`) => {
  if (!address) throw new Error("Address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) throw new Error("Invalid address");
};

const loadArgs = (): {
  ballotContractAddress: `0x${string}`;
} => {
  if (process.argv.length != 3) {
    throw new Error(
      "Usage: npx ts-node --files ./scripts/CheckWinningProposal.ts " +
        "<ballotContractAddress>"
    );
  }
  const ballotContractAddress = process.argv.at(2) as `0x${string}`;
  validateAddress(ballotContractAddress);

  return {
    ballotContractAddress: ballotContractAddress,
  };
};

// Function to convert hexadecimal to ASCII
function hexToASCII(hexString: { toString: () => any }) {
  let hex = hexString.toString();
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str.trim(); // Trim any leading/trailing whitespace
}

async function main() {
  const { ballotContractAddress } = loadArgs();

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });
  const account = privateKeyToAccount(`0x${voterPrivateKey}`);
  const voter = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });
  console.log("voter address:", voter.account.address);
  const balance = await publicClient.getBalance({
    address: voter.account.address,
  });
  console.log(
    "voter balance:",
    formatEther(balance),
    voter.chain.nativeCurrency.symbol
  );

  const winnerName = (await publicClient.readContract({
    address: ballotContractAddress,
    abi,
    functionName: "winnerName",
  })) as any;
  if (!winnerName) {
    throw new Error("couldn't retrieve proposal");
  }

  console.log(`Winning proposal name: ${hexToASCII(winnerName)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
