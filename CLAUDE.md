# CLAUDE.md

Tournament platform built with Dojo (StarkNet) - smart contracts + React UI.

## Quick Start

```bash
# UI Development
cd ui && bun install && bun run dev

# Contract Development  
cd contracts && sozo build && sozo test

# Run linting/typecheck
cd ui && bun run lint
```

## Key Files

**Contracts:**
- `contracts/src/components/tournament.cairo` - Main tournament logic
- `contracts/src/components/interfaces.cairo` - Game integration interfaces
- `contracts/src/presets/tournament.cairo` - Deployed contract

**UI:**
- `ui/src/containers/` - Main pages (Overview, CreateTournament, Tournament)
- `ui/src/dojo/hooks/useSystemCalls.tsx` - Contract interactions
- `ui/src/hooks/useUIStore.tsx` - UI state management

## Architecture

**Smart Contracts:**
- Tournament lifecycle: Registration → Live → Submission → Finalized
- Entry fees with configurable prize distribution
- Token-gating and qualification requirements
- Games implement IGameToken + IGameDetails interfaces

**Frontend:**
- Zustand for state, shadcn/ui components
- Dojo SDK for contract queries and real-time updates
- Multi-chain support via environment configs

## Testing

```bash
# Run all contract tests
cd contracts && sozo test

# Run specific test
sozo test -f test_tournament_create
```

## GitHub Actions Instructions

When working on GitHub issues:
1. Make all necessary code changes
2. **IMPORTANT**: Use `mcp__github_file_ops__commit_files` to commit your changes
3. Create a pull request, don't just provide a link
4. Example: `mcp__github_file_ops__commit_files` with files array and commit message

Always commit and push changes - don't just provide PR creation links!