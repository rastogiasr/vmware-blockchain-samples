# (WIP) VMware Blockchain Ethereum

We are so glad that you have found this repository!

The VMware Blockchain team has architected an extensible blockchain platform that is capable of supporting multiple smart contract languages, where each language runs on its own unique execution engine. Back in 2019, VMware Blockchain started first with the Daml smart contract language, highly ideal for mission critical capital market applications. Since then, we have received strong interest to support the Solidity smart contract language, which is targeted at a broad set of use cases that can benefit from the power of blockchain. To support that, VMware Blockchain team integrated the EVMOne Ethereum virtual machine, and voila - you can now run Solidity on VMware Blockchain! 

*** **Please note that the VMware Blockchain Ethereum Developer Kit is under early beta and functionality is subject to change** ***

# Target Persona and Deployment Model
Using the developer kit, Ethereum developer(s) can start developing or porting their existing decentralized applications (dApps) to a single host VMware Blockchain deployment on their local desktop/laptop or Cloud VM. 

# System Requirements 
| Components | Description |
|-----------|-------------|
|  Operating System | Apple® macOS® 12.x |
|                   |  Linux Ubuntu® 16.x, 20.x |
|  vCPU             | 8 vCPU or more |
|  RAM              | 22 GB of RAM or more |
|  Disk Space       | 100 GB of free disk space or more |

# High Level Overview

Following is a list of various elements of VMware Ethereum Developer Kit

- VMBC Deployment
    - [VMBC Deployment without Logging](./vmbc-deployment/vmbc-four-node-one-client-deployment/README.md)
        - Expand without Logging here
    - [VMBC Deployment with Logging](./vmbc-deployment/vmbc-four-node-one-client-deployment-with-logging/README.md)
        - Expand with Logging here
- [Privacy](./privacy/README.md)
    - Privacy in VMware (expand on one-liner)
- [Permissioning](./permissioning/README.md)
    - Write and Read Permissioning feature related elements
- [VMBC Explorer](./block-explorers/vmbc-explorer/README.md)
    - Ethereum Block Explorer
- Sample DApps
    - [NFT Platform](./sample-dapps/nft-platform/README.md)
        - Digital Art NFT Platform
    - [ERC20-Swap](./sample-dapps/erc20-swap/README.md)
        - DApp to Transfer and Swap ERC20 Tokens

# Popular tools to use with VMware Blockchain Ethereum Developer Kit
Hardhat

Truffle

Remix

Metamask

Mythril