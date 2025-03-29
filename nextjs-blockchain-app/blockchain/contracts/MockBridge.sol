// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MockBridge {
    event MessageSent(address indexed sender, address indexed recipient, uint256 amount, uint256 destinationChainId);

    function sendMessage(address recipient, uint256 amount, uint256 destinationChainId) external {
        emit MessageSent(msg.sender, recipient, amount, destinationChainId);
    }
}
