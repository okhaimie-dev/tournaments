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

## CRITICAL: Branch Protection Rules

The main branch is protected and requires ALL changes to be made through a pull request. Direct commits to main will fail with error 422.

## Required Workflow Sequence

**YOU MUST FOLLOW THIS EXACT SEQUENCE:**

### Step 1: Create a New Branch (REQUIRED FIRST STEP)

```json
{
  "tool": "mcp__github__create_branch",
  "branch_name": "claude/issue-127-20250605_131802"
}
```

Branch name format: `claude/issue-{issue_number}-{timestamp}`
- `issue_number`: The GitHub issue number you're working on
- `timestamp`: Current timestamp in format YYYYMMDD_HHMMSS

### Step 2: Make Code Changes

1. Read and analyze the code
2. Make necessary edits using Edit/MultiEdit tools
3. Add/update tests as needed
4. Run tests if requested (sozo test)

### Step 3: Commit All Changes

```json
{
  "tool": "mcp__github_file_ops__commit_files",
  "files": [
    "contracts/src/components/tournament.cairo",
    "contracts/src/components/tests/test_tournament.cairo"
  ],
  "message": "feat: allow enter_tournament to be called by anyone for qualifying addresses\n\nDetailed description of changes..."
}
```

### Step 4: Create Pull Request

```json
{
  "tool": "mcp__github__create_pull_request",
  "title": "feat: allow enter_tournament to be called by anyone for qualifying addresses",
  "body": "Resolves #127\n\n## Summary\nBrief description of what this PR does\n\n## Changes\n- List of specific changes made\n- Another change\n\n## Test Plan\n- How the changes were tested\n\nGenerated with [Claude Code](https://claude.ai/code)",
  "base": "main",
  "head": "claude/issue-127-20250605_131802"
}
```

## Common Mistakes to Avoid

1. **NEVER try to commit directly to main** - This will always fail
2. **NEVER skip the branch creation step** - You cannot commit without a branch
3. **NEVER just provide a PR creation link** - Use the actual mcp__github__create_pull_request tool
4. **NEVER commit before creating a branch** - The sequence matters

## Complete Example Workflow

```javascript
// Step 1: ALWAYS create branch first
await mcp__github__create_branch({
  branch_name: "claude/issue-127-20250605_131802"
});

// Step 2: Make your code changes
// ... edit files, add tests, etc ...

// Step 3: Commit all changes
await mcp__github_file_ops__commit_files({
  files: [
    "contracts/src/components/tournament.cairo",
    "contracts/src/components/tests/test_tournament.cairo"
  ],
  message: "feat: allow enter_tournament to be called by anyone for qualifying addresses"
});

// Step 4: Create the pull request
await mcp__github__create_pull_request({
  title: "feat: allow enter_tournament to be called by anyone for qualifying addresses",
  body: "Resolves #127\n\n## Changes\n- Modified enter_tournament function\n- Added comprehensive tests",
  base: "main",
  head: "claude/issue-127-20250605_131802"
});
```

## Verification Checklist

Before starting work:
- [ ] I will create a new branch FIRST
- [ ] I will commit to the new branch, not main
- [ ] I will create a PR using the tool, not just provide a link
- [ ] I will include "Resolves #XXX" in the PR body
