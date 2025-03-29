// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IBridge {
    function sendMessage(address recipient, uint256 amount, uint256 destinationChainId) external;
}

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract MultiChainWallet {
    address public owner;
    IBridge public bridge;

    event Deposit(address indexed sender, uint256 amount, uint256 chainId);
    event Withdraw(address indexed recipient, uint256 amount);
    event CrossChainTransfer(address indexed sender, address indexed recipient, uint256 amount, uint256 targetChainId);
    event ERC20Deposit(address indexed token, address indexed sender, uint256 amount);
    event ERC20Transfer(address indexed token, address indexed recipient, uint256 amount, uint256 targetChainId);
    event ERC20Withdraw(address indexed token, address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(address _bridge) {
        require(_bridge != address(0), "Invalid bridge address");
        owner = msg.sender;
        bridge = IBridge(_bridge);
    }

    // Accept ETH deposits
    receive() external payable {
        emit Deposit(msg.sender, msg.value, block.chainid);
    }

    // Withdraw ETH
    function withdraw(address payable recipient, uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        recipient.transfer(amount);
        emit Withdraw(recipient, amount);
    }

    // Cross-chain ETH transfer using bridge
    function crossChainTransfer(address recipient, uint256 amount, uint256 targetChainId) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        
        // Simulating bridge interaction
        bridge.sendMessage(recipient, amount, targetChainId);
        emit CrossChainTransfer(msg.sender, recipient, amount, targetChainId);
    }

    // Deposit ERC20 tokens
    function depositERC20(address token, uint256 amount) external {
        require(IERC20(token).transferFrom(msg.sender, address(this), amount), "Transfer failed");
        emit ERC20Deposit(token, msg.sender, amount);
    }

    // Withdraw ERC20 tokens
    function withdrawERC20(address token, address recipient, uint256 amount) external onlyOwner {
        require(IERC20(token).balanceOf(address(this)) >= amount, "Insufficient balance");
        require(IERC20(token).transfer(recipient, amount), "Transfer failed");
        emit ERC20Withdraw(token, recipient, amount);
    }

    // Cross-chain ERC20 transfer
    function crossChainTransferERC20(address token, address recipient, uint256 amount, uint256 targetChainId) external onlyOwner {
        require(IERC20(token).balanceOf(address(this)) >= amount, "Insufficient balance");

        // Simulating bridge interaction
        bridge.sendMessage(recipient, amount, targetChainId);
        emit ERC20Transfer(token, recipient, amount, targetChainId);
    }
}
