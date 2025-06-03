# Common Claude Tasks

## Tournament Contract Tasks
- **File**: `contracts/src/components/tournament.cairo`
- **Common fixes**: entry validation, score submission, prize distribution

## UI Tasks  
- **Entry Form**: `ui/src/containers/CreateTournament.tsx`
- **Tournament View**: `ui/src/containers/Tournament.tsx`
- **Contract Calls**: `ui/src/dojo/hooks/useSystemCalls.tsx`

## Quick Commands
```bash
# Test specific function
cd contracts && sozo test -f test_enter_tournament

# Check UI types
cd ui && bun run typecheck

# Format code
cd contracts && scarb fmt
```