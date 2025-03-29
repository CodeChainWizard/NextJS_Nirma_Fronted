const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  // Deploy MockBridge
  console.log("Deploying MockBridge...");
  const MockBridge = await hre.ethers.getContractFactory("MockBridge");
  const mockBridge = await MockBridge.deploy();
  await mockBridge.waitForDeployment();
  console.log(`MockBridge deployed at: ${mockBridge.target}`);

  // Deploy MultiChainWallet
  console.log("Deploying MultiChainWallet...");
  const MultiChainWallet = await hre.ethers.getContractFactory(
    "MultiChainWallet"
  );
  const multiChainWallet = await MultiChainWallet.deploy(mockBridge.target);
  await multiChainWallet.waitForDeployment();
  console.log(`MultiChainWallet deployed at: ${multiChainWallet.target}`);

  console.log("\nDeployment Completed Successfully!");
  console.log(`\nMockBridge Address: ${mockBridge.target}`);
  console.log(`MultiChainWallet Address: ${multiChainWallet.target}`);
}

// Handle errors properly
main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});
