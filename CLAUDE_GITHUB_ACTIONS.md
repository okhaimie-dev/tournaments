# Claude GitHub Actions - Important Notes

## Committing Changes

Claude has access to the `mcp__github_file_ops__commit_files` tool in GitHub Actions. This tool MUST be used to:

1. **Commit all file changes** after making edits
2. **Push changes to the branch** automatically
3. **NOT just provide a PR creation link**

## Example Usage

```json
{
  "tool": "mcp__github_file_ops__commit_files",
  "files": [
    "contracts/src/components/tournament.cairo",
    "contracts/src/components/tests/test_tournament.cairo"
  ],
  "message": "feat: allow enter_tournament to be called by anyone for qualifying addresses"
}
```

## Important Reminders

- Always use `mcp__github_file_ops__commit_files` after making changes
- Don't just provide a "Create PR" link - actually create the PR
- Create a branch first if needed: `claude/issue-{issue_number}-{timestamp}`
  - Example: `claude/issue-127-20250605_124843`
- Commits will automatically be pushed to the current branch

## Workflow

1. Create a branch (if not already on one): `mcp__github__create_branch`
   - Branch name format: `claude/issue-{issue_number}-{timestamp}`
2. Read and analyze the code
3. Make necessary edits using Edit tool
4. Run tests if requested (sozo test)
5. **Commit changes using mcp__github_file_ops__commit_files**
6. Create PR (not just provide a link)