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
- All contracts use Cairo language with Dojo framework. 
- Use Context7 MCP for up to date documentation on Cairo, Starknet, and Dojo.
- All new additions to the code should seek to maintain minimal complexity at the Starknet Contract layer. This layer of the stack should be reserved for retrieving data, blockchain specific validation (caller address, nft ownership, etc.), and saving data. All core logic should be handled by pure Cairo functions with extensive unit tests for all functionality. 

## Github Actions Workflow

1. Create a new branch
   - Branch name format: `claude/issue-{issue_number}`
2. Commit all changes to new branch
3. All new functions should be accompanied by exhaustive tests
4. Verify all tests pass using `cd contracts && sozo test`
5. Run `cd contracts && scarb fmt` to format contracts
6. Only when all tests are passing should a PR be created.