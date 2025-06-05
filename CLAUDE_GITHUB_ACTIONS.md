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
- The branch is already created for you (claude/issue-XXX-timestamp)
- Commits will automatically be pushed to the branch

## Workflow

1. Read and analyze the code
2. Make necessary edits using Edit tool
3. Run tests if requested (sozo test)
4. **Commit changes using mcp__github_file_ops__commit_files**
5. Create PR (not just provide a link)