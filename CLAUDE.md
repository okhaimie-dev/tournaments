# CLAUDE.md

## Development Tools
- Scarb: 2.10.1 (Cairo/Starknet development)
- Dojo: 1.5.0 (Gaming framework)
- Bun: Latest (Frontend package manager)

## Common Development Tasks

### Contract Development
```bash
# Build contracts
cd contracts && sozo build

# Run all tests
cd contracts && sozo test

# Run specific test
cd contracts && sozo test -f test_tournament_create

# Format Cairo code
cd contracts && scarb fmt
```

### Frontend Development
```bash
# Install dependencies
cd ui && bun install

# Run development server
cd ui && bun run dev

# Run linting
cd ui && bun run lint
```

## Architecture Overview
Tournament platform built with Dojo on StarkNet - smart contracts + React UI for managing gaming tournaments.

### Key Components
- **Smart Contracts**: Tournament lifecycle management (Registration → Live → Submission → Finalized)
- **Frontend**: React + Zustand + shadcn/ui with Dojo SDK integration
- **Features**: Entry fees, token-gating, qualification requirements

### Project Structure
```
contracts/
├── src/
│   ├── components/
│   │   ├── tournament.cairo      # Main tournament logic
│   │   ├── interfaces.cairo      # Game integration interfaces
│   │   └── models/               # Data models
│   └── presets/
│       └── tournament.cairo      # Deployed contract
ui/
├── src/
│   ├── containers/               # Main pages
│   ├── dojo/hooks/              # Contract interactions
│   └── hooks/                   # State management
```

## Important Notes
- All contracts use Cairo language with Dojo framework
- Games must implement IGameToken + IGameDetails interfaces
- Frontend uses Dojo SDK for real-time contract updates
- Multi-chain support via environment configurations