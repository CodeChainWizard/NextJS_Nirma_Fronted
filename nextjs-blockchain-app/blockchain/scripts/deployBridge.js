const hre = require("hardhat");

async function main() {
  console.log("Deploying MockBridge...");

  const MockBridge = await hre.ethers.getContractFactory("MockBridge");

  const mockBridge = await MockBridge.deploy();
  await mockBridge.waitForDeployment();

  console.log(`MockBridge deployed at: ${mockBridge.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// MOKINGBRIDGE Address:- 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
