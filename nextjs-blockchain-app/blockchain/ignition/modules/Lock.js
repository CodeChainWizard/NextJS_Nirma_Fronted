const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MultiChainWalletModule", (m) => {
  const bridgeAddress = m.getParameter(
    "bridgeAddress",
    "0xYourBridgeContractAddressHere"
  );

  const multiChainWallet = m.contract("MultiChainWallet", [bridgeAddress]);

  return { multiChainWallet };
});
