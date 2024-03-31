import {abi, bytecode} from "../artifacts/contracts/MyToken.sol/MyToken.json";
import {createPublicClient, createWalletClient, formatEther, http} from "viem";
import {privateKeyToAccount} from "viem/accounts";
import {sepolia} from "viem/chains";
import * as dotenv from "dotenv";

dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
    const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
    });
    const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
    const deployer = createWalletClient({
        account,
        chain: sepolia,
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
    });
    console.log("Deployer address:", deployer.account.address);
    const balance = await publicClient.getBalance({
        address: deployer.account.address,
    });
    console.log(
        "Deployer balance:",
        formatEther(balance),
        deployer.chain.nativeCurrency.symbol
    );
    console.log("\nDeploying Token contract");
    console.log("Confirm? (Y/n)");
    const stdin = process.openStdin();
    stdin.addListener("data", async function (d) {
        if (d.toString().trim().toLowerCase() !== "n") {
            const hash = await deployer.deployContract({
                abi,
                bytecode: bytecode as `0x${string}`,
            });
            console.log("Transaction hash:", hash);
            console.log("Waiting for confirmations...");
            const receipt = await publicClient.waitForTransactionReceipt({hash});
            if (!receipt.contractAddress) throw new Error("Contract not deployed");
            console.log("Token contract deployed to:", receipt.contractAddress);
        } else {
            console.log("Operation cancelled");
        }
        process.exit();
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
