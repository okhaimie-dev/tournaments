# Claude GitHub Action Guide

## How to Reduce Token Usage

### For Users:
1. **Be Specific**: Instead of "fix the bug", say "fix the scoring calculation in tournaments/src/components/tournament.cairo line 32"
2. **Limit Scope**: Tag @claude only on focused tasks, not broad refactoring
3. **Provide Context**: Mention the specific files/functions involved

### Example Good Issue:
```
@claude Please update the enter_tournament function in contracts/src/components/tournament.cairo 
to validate that entry fees are paid before registration. 
The validation should happen around line 123.
```

### Example Bad Issue:
```
@claude The tournament system is broken, please fix it.
```

## Common Paths
- Tournament logic: `contracts/src/components/tournament.cairo`
- UI entry: `ui/src/containers/CreateTournament.tsx`
- Contract calls: `ui/src/dojo/hooks/useSystemCalls.tsx`