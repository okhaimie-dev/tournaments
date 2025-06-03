# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a tournament platform built with Dojo (StarkNet gaming framework) consisting of:
- Smart contracts for managing tournaments, entries, prizes, and game integration
- React UI for tournament creation, management, and participation
- Multi-chain support (Mainnet, Sepolia, Katana local)

## Common Development Commands

### UI Development
```bash
cd ui
bun install          # Install dependencies
bun run dev          # Start development server
bun run build        # Build for production
bun run lint         # Run ESLint
```

### Contract Development
```bash
cd contracts
scarb build          # Build contracts
scarb test           # Run all tests
scarb test -f test_name  # Run specific test

# Deployment scripts
./scripts/deploy_dev.sh      # Deploy to local Katana
./scripts/deploy_sepolia.sh  # Deploy to Sepolia
./scripts/deploy_mainnet.sh  # Deploy to Mainnet
```

## Architecture Overview

### Smart Contracts (Dojo Framework)

**Component-Based Architecture:**
- `tournament_component`: Core tournament logic (creation, entries, scoring, prizes)
- Uses Dojo's World Storage for centralized state management
- Model-driven design with decorated Cairo structs

**Key Models:**
- `Tournament`: Core tournament configuration
- `Schedule`: Tournament phases (registration, live, submission, finalized)
- `Leaderboard`: Player rankings and scores
- `Prize`: Entry fee and sponsored prize distribution
- `Token`: Registered ERC20/ERC721 tokens

**Game Integration:**
Games must implement specific interfaces:
- `IGameToken`: Mint game NFTs with settings
- `IGameDetails`: Retrieve player scores
- `ISettings`: Validate game configuration

**Testing:**
- Uses `dojo_cairo_test` framework
- Mock contracts in `src/components/tests/mocks/`
- Integration tests cover full tournament lifecycle

### UI Architecture (React + Vite)

**State Management:**
- Zustand stores: `useUIStore`, `useTournamentStore`, `useDojoStore`
- React Context: `DojoContext`, `StarknetContext`
- Optimistic updates for better UX

**Dojo SDK Integration:**
- `useSdkQueries`: SDK-based queries using ToriiQueryBuilder
- `useSqlQueries`: Direct SQL queries to Torii indexer
- `useSystemCalls`: Smart contract interactions
- Real-time entity updates via subscriptions

**Key Patterns:**
- Lazy loading routes for performance
- Generated TypeScript types from Cairo contracts
- Dual data fetching (SDK for real-time, SQL for complex queries)
- Chain-specific configuration and manifest loading

## Important Notes

- Entry requirements support token-gating, tournament-gating, and allowlists
- Prize distribution includes automatic entry fee distribution and sponsored prizes
- Games are ERC721 contracts where each token represents a game session
- UI uses shadcn/ui components with Tailwind CSS
- Multi-chain deployment requires profile-based configurations
- Torii indexer provides both GraphQL and SQL query interfaces