# HamsterPocket 🐹💼

<br />
<p align="center">
  <img src="https://cavies.xyz/assets/images/logo.png" alt="CaviesLabs" />
</p>

<h3 align="center">
  <strong>Built for flexible, customizable Self-managed DCA strategies #defi #infrastructure</strong>
</h3>

<p align="center">
     <a href="https://pocket.hamsterbox.xyz">
        Launch DApp
    </a> |
    <a href="https://cavies.xyz/">
        About Cavies
    </a>
</p>

<p align="center">
  <a href="https://github.com/CaviesLabs/hamsterpocket/">
    <img alt="GitHub Repository Stars Count" src="https://img.shields.io/github/stars/CaviesLabs/hamsterpocket?style=social" />
  </a>
    <a href="https://twitter.com/CaviesLabs">
        <img alt="Follow Us on Twitter" src="https://img.shields.io/twitter/follow/CaviesLabs?style=social" />
    </a>
    <a href="https://linkedin.com/company/cavieslabs">
        <img alt="Follow Us on LinkedIn" src="https://img.shields.io/badge/LinkedIn-Follow-black?style=social&logo=linkedin" />
    </a>
</p>

<p align="center">
    <a href="#">
        <img alt="Build Status" src="https://build.cavies.xyz/buildStatus/icon?job=hamsterpocket%2Fhamsterpocket-backend%2Fdevelop" />
    </a>
    <a href="https://github.com/CaviesLabs/hamsterpocket">
        <img alt="License" src="https://img.shields.io/github/license/CaviesLabs/hamsterpocket" />
    </a>
    <a href="https://github.com/CaviesLabs/hamsterpocket/pulls">
        <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
    </a>
    <a href="https://coveralls.io/github/CaviesLabs/hamsterpocket/?branch=next">
        <img alt="Coverage Status" src="https://coveralls.io/repos/github/CaviesLabs/hamsterpocket/badge.svg?branch=next" />
    </a>
</p>

---

![Hero image](https://files.slack.com/files-pri/T03N86YEZ6Z-F04TQLW6JCU/heroimage.png?pub_secret=014779ae87)

HamsterPocket is an Open Source self-managed dollar-cost-averaging (DCA) protocol that lets users create and run their own saving pools ("pockets") that will automatically execute the chosen strategies over time. Built natively on Solana with comprehensive EVM chain support, HamsterPocket provides a complete multi-chain DeFi infrastructure for automated investment strategies.

## **What we deliver out-of-the-box** 📦

<p align="center">
  <img alt="Architecture" src="https://files.slack.com/files-pri/T03N86YEZ6Z-F04T783JZAB/out-of-the-box.png?pub_secret=3ca2221066">
</p>

✅ **Convenient** - Users only need to set up the desired pools and strategies once, then top up (reload) said pools with the required funds for execution anytime  
✅ **Trustless** - Users are able to manage their own pools. Every pocket can only be paused, resumed, terminated and withdrawn at will by the pockets' owners  
✅ **Flexible use cases**:
- Run a TWAP (Time-Weighted Average Price) strategy on-chain
- Create a simple saving pool for one or multiple assets  
- Set-and-forget vaults for medium or long-term spot purchases  
✅ **Multi-chain Support** - Solana native with full EVM compatibility (Ethereum, BNB Chain, Avalanche, Klaytn, Mantle, Scroll)  
✅ **Automated Execution** - Smart contracts handle strategy execution automatically  
✅ **Risk Management** - Built-in price conditions and stop-loss mechanisms  

## **Architecture Overview** 🏗️

This monorepo contains four main components that work together to provide a complete multi-chain DCA solution:

### **hamsterpocket-program** 🦀
- **Solana smart contracts** written in Rust using the Anchor framework
- Handles pocket creation, fund management, and automated strategy execution
- Deployed on Solana mainnet: `BW5RwMCPY85ch6efYE3Ev43ZQpJytvvjSNbJ2beC9MzV`
- Features: TWAP execution, price conditions, multi-token support

### **hamsterpocket-evm-program** 🔷
- **EVM smart contracts** written in Solidity using Hardhat framework
- Cross-chain DCA functionality for Ethereum and EVM-compatible chains
- Supports major DEX protocols (Uniswap V2/V3, PancakeSwap, SushiSwap, etc.)
- Multi-chain deployment: Ethereum, BNB Chain, Avalanche, Klaytn, Mantle, Scroll
- Features: PocketVault management, PocketChef execution, cross-chain registry

### **hamsterpocket-backend** ⚙️
- **NestJS-based API server** for data aggregation and cross-chain support
- Real-time market data integration with DEX protocols across all chains
- User management, analytics, and notification systems
- Multi-chain pocket synchronization and execution monitoring
- Unified API for both Solana and EVM chains

### **hamsterpocket-frontend** 🖥️
- **Next.js React application** with intuitive multi-chain DCA management interface
- Wallet integration across all supported chains (Phantom, MetaMask, WalletConnect, etc.)
- Portfolio dashboard with detailed analytics and cross-chain performance tracking
- Mobile-responsive design for managing pockets across any supported blockchain

## **Our Tech Stack** 🛠

**Smart Contracts & Blockchain**
- [Rust](https://rustup.rs/) - Systems programming language for Solana smart contracts
- [Solidity](https://soliditylang.org/) - Smart contract language for EVM chains
- [Anchor](https://anchor-lang.com/) - Solana development framework
- [Hardhat](https://hardhat.org/) - Ethereum development environment
- [Solana](https://solana.com/) - High-performance blockchain
- [OpenZeppelin](https://openzeppelin.com/) - Secure smart contract library

**Backend Services**
- [Node.js](https://nodejs.org/) - Runtime environment
- [NestJS](https://nestjs.com/) - Scalable backend framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [PostgreSQL](https://www.postgresql.org/) - Database for user data and analytics
- [Redis](https://redis.io/) - Caching and session management

**Frontend Application**
- [React](https://reactjs.org/) - UI library
- [Next.js](https://nextjs.org/) - Full-stack React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

**Development & DevOps**
- [Yarn](https://yarnpkg.com/) - Package manager
- [Docker](https://www.docker.com/) - Containerization
- [Jenkins](https://www.jenkins.io/) - CI/CD pipeline

## **Getting Started** 🚀

### **Prerequisites** 📋

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher)
- [Yarn](https://yarnpkg.com/) package manager
- [Rust](https://rustup.rs/) (for Solana smart contract development)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)
- [Anchor CLI](https://book.anchor-lang.com/getting_started/installation.html) (v0.30.1)
- [Hardhat](https://hardhat.org/) (for EVM smart contract development)

### **Step 1: Clone the Repository** 🧰

```bash
git clone https://github.com/CaviesLabs/hamsterpocket.git
cd hamsterpocket
```

### **Step 2: Install Dependencies** ⏳

```bash
# Install dependencies for all workspaces
yarn install

# Or install individually for each component
cd hamsterpocket-frontend && yarn install
cd ../hamsterpocket-backend && yarn install  
cd ../hamsterpocket-program && yarn install
cd ../hamsterpocket-evm-program && yarn install
```

> HamsterPocket supports only **Yarn** package manager. If you don't have it installed, please follow the [official Yarn installation guide](https://yarnpkg.com/getting-started/install).

### **Step 3: Environment Configuration** ⚙️

**Frontend Configuration:**
```bash
cd hamsterpocket-frontend
cp .env.example .env.local
# Edit .env.local with your configuration
```

**Backend Configuration:**
```bash
cd hamsterpocket-backend
cp example.config.json config.json
# Edit config.json with your settings
```

**Program Configuration:**
```bash
# Solana Program
cd hamsterpocket-program
# Configure Anchor.toml for your deployment target

# EVM Program
cd hamsterpocket-evm-program
cp .env.example .env
# Edit .env with your RPC URLs and private keys for deployment
```

Please contact [khang@cavies.xyz](mailto:khang@cavies.xyz) or [dev@cavies.xyz](mailto:dev@cavies.xyz) for any configuration inquiries.

### **Step 4: Run Development Environment** 🔥

**Start the Backend Server:**
```bash
cd hamsterpocket-backend
yarn start:dev
```

**Start the Frontend Application:**
```bash
cd hamsterpocket-frontend
yarn dev:dev-env
```

**Test Smart Contracts:**
```bash
# Solana Program Testing
# Start local Solana validator
solana-test-validator --no-bpf-jit --reset

# Run Solana tests
cd hamsterpocket-program
anchor test --skip-local-validator

# EVM Program Testing  
cd hamsterpocket-evm-program
# Test all supported chains
yarn test              # Default Hardhat network
yarn test:klaytn       # Klaytn testnet fork
yarn test:bnb          # BNB Chain testnet fork
yarn test:avax         # Avalanche testnet fork
yarn test:mantle       # Mantle testnet fork
yarn test:scroll_sepolia # Scroll Sepolia testnet fork
```

### **Step 5: Access the Application** 🌐

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **API Documentation**: http://localhost:8080/api-docs

## **Deployed Contract Addresses** 📜

### **Deployed Contracts addresses** 📢

| Chain          | PocketChef                                 | PocketRegistry                             | PocketVault                                | Multicall3                                 | 
|----------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------| 
| BNB Chain      | 0x94eC37b16D48Ca4974d589cEF3F6F5964997F4DF | 0xf0C82C47B95143e14633A7EA9B5849fE7Ea9F8dA | 0xA78c8Da9e3Bac9B790d109Cf9023B3b6dB72b0E0 | 0x83Cb92492667a8334381c95A02007c8bF0811b89 | 

> Contract addresses will be updated upon mainnet deployment

**External APIs:**
- Raydium markets: https://api.raydium.io/v2/sdk/liquidity/mainnet.json

## **Testing** 🧪

### **Solana Smart Contract Testing**
```bash
cd hamsterpocket-program
anchor test --skip-local-validator

# Expected output:
#  pocket_registry
#    ✔ [initialize_swap_program] should: deployer initializes pocket registry successfully
#    ✔ [update_operator] should: deployer can update operators list
#
#  pocket
#    ✔ [create_pocket] should: anyone can create their pocket
#    ✔ [create_token_vault] should: pocket owner can create token vault successfully
#    ✔ [pause_pocket] should: owner should pause pocket successfully
#    ✔ [restart_pocket] should: owner can restart the paused pocket successfully
#    ✔ [close_pocket] should: owner can close pocket successfully
#
#  assets
#    ✔ [deposit] should: owner can deposit assets to pocket successfully
#    ✔ [withdraw] should: owner can withdraw assets from pocket successfully
```

### **EVM Smart Contract Testing**
```bash
cd hamsterpocket-evm-program

# Test on different chains
yarn test              # Hardhat local network
yarn test:klaytn       # Klaytn fork testing
yarn test:bnb          # BNB Chain fork testing  
yarn test:avax         # Avalanche fork testing
yarn test:mantle       # Mantle fork testing
yarn test:scroll_sepolia # Scroll Sepolia fork testing

# Coverage testing
yarn test:coverage
```

### **Backend Testing**
```bash
cd hamsterpocket-backend
yarn test
yarn test:e2e
```

### **Frontend Testing**
```bash
cd hamsterpocket-frontend
yarn test
yarn test:e2e
```

## **Deployment** 🚀

## **Deployment** 🚀

### **Solana Smart Contract Deployment**
```bash
cd hamsterpocket-program

# Get new program address
anchor build
solana address -k target/deploy/pocket-keypair.json

# Deploy to mainnet
anchor deploy --program-name pocket --provider.cluster mainnet-beta \
--provider.wallet ~/.config/solana/id.json
```

### **EVM Smart Contract Deployment**
```bash
cd hamsterpocket-evm-program

# Configure your .env file with RPC URLs and private keys
# Deploy to specific networks (requires proper .env configuration)

# Example deployment commands:
npx hardhat run scripts/deploy.ts --network ethereum
npx hardhat run scripts/deploy.ts --network bnb
npx hardhat run scripts/deploy.ts --network avalanche
npx hardhat run scripts/deploy.ts --network klaytn
npx hardhat run scripts/deploy.ts --network mantle
npx hardhat run scripts/deploy.ts --network scroll

# Verify contracts on block explorers
npx hardhat verify --network ethereum <CONTRACT_ADDRESS>
```

### **Backend Deployment**
```bash
cd hamsterpocket-backend
yarn build
yarn start:prod
```

### **Frontend Deployment**
```bash
cd hamsterpocket-frontend
yarn build:prod-env
yarn start
```

## **Documentation** 📚

- [**Figma Design**](https://www.figma.com/file/Tx32sB0eC2iwkBD7rZRRut/Hamsterpocket-(DCA)?node-id=1902%3A43690&t=JpssstVDMVaaWHSf-0) - UI/UX prototypes and design system
- [**Test Cases**](https://docs.google.com/spreadsheets/d/1xdPHErMtTJtk0zH2-huzkDcuJx9lwZgb/edit#gid=1292533007) - Comprehensive testing documentation
- **API Documentation** - Available at `/api-docs` when running the backend

## **Related Repositories** 🔗

- [hamsterpocket-backend](https://github.com/CaviesLabs/hamsterpocket-backend) - Backend API server
- [hamsterpocket-frontend](https://github.com/CaviesLabs/hamsterpocket-frontend) - Frontend DApp
- [hamsterpocket-program](https://github.com/CaviesLabs/hamsterpocket-program) - Solana smart contracts
- [hamsterpocket-evm-program](https://github.com/CaviesLabs/hamsterpocket-evm-program) - EVM smart contracts

## **Contributing** 🤝

HamsterPocket is an Open Source project and we encourage everyone to help us making it better. Here's how you can contribute:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`  
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

If you have any questions about contributing, please reach out on our [Twitter](https://twitter.com/CaviesLabs) - we are happy to help you!

Discovered a 🐜 or have feature suggestion? Feel free to [create an issue](https://github.com/CaviesLabs/hamsterpocket/issues/new/choose) on GitHub.

## **Security** 🔒

Security is our top priority. Our smart contracts have been audited and tested extensively. If you discover a security vulnerability, please report it responsibly:

- **Email**: security@cavies.xyz
- **Bug Bounty Program**: Coming soon

## **Roadmap** 🗺️

- [x] **Q4 2024**: EVM smart contract development and multi-chain support
- [ ] **Q1 2025**: Mainnet deployment across all supported EVM chains
- [ ] **Q2 2025**: Advanced DCA strategies (buy the dip, take profit conditions)
- [ ] **Q3 2025**: Cross-chain portfolio management and unified dashboard
- [ ] **Q4 2025**: Social trading, strategy sharing, and mobile application

## **Community** 👥

Join our growing community:

- **Twitter**: [@CaviesLabs](https://twitter.com/CaviesLabs)
- **Discord**: [Join our server](https://discord.gg/cavieslabs)  
- **Telegram**: [HamsterPocket Community](https://t.me/hamsterpocket)
- **LinkedIn**: [CaviesLabs](https://linkedin.com/company/cavieslabs)

## **Careers** 👩‍💻👨‍💻

We are growing and looking for talented people to join our team. Check our [Careers page](https://www.notion.so/cavies/Job-Board-320ac7987dc64a53b0d3d3e7c52c5ce7) for open positions.

## **Support Us** ❤️

**HamsterPocket is and always will be Open Source, released under MIT License.**

How you can help us:
- **⭐ Star this repository** if you find it useful
- **🤝 Contribute** - this is how the Core Team is supporting the project
- **📢 Spread the word** - tell your friends, colleagues, and followers about HamsterPocket
- **📝 Create content** - write a blog post, record a video, or create a tutorial. We will be happy to share it on our social media channels
- **🐛 Report bugs** and help us improve

## **Contact** 📧

Feel free to submit your inquiries:
- **Development**: [dev@cavies.xyz](mailto:dev@cavies.xyz)
- **General**: [hello@cavies.xyz](mailto:hello@cavies.xyz)
- **Business**: [khang@cavies.xyz](mailto:khang@cavies.xyz)

---

<p align="center">
  <strong>Built with ❤️ by the CaviesLabs Team</strong>
</p>

<p align="center">
  <a href="https://cavies.xyz">
    <img src="https://img.shields.io/badge/Made%20by-CaviesLabs-blue?style=flat-square" alt="Made by CaviesLabs" />
  </a>
</p>
