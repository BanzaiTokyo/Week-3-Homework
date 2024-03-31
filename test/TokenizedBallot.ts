import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import { toHex, hexToString } from "viem";
import { viem } from "hardhat";

async function deployContract() {
    // https://hardhat.org/hardhat-runner/docs/advanced/using-viem#clients
    const publicClient = await viem.getPublicClient();
    const [owner, otherAccount] = await viem.getWalletClients();
    // https://hardhat.org/hardhat-runner/docs/advanced/using-viem#contracts
    const deployedContract = await viem.deployContract("TokenizedBallot");
    // https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-destructuring
    return {
        publicClient,
        owner,
        otherAccount,
        deployedContract,
    };
}

describe("Ballot", async () => {
    describe("when the contract is deployed", async () => {

        it("everything is fine 🔥", async () => {
            const {deployedContract} = await loadFixture(deployContract);


        });


    });
});