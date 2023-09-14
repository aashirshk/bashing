module.exports = {
    types: [
      { value: 'feat', name: 'feat: A new feature' },
      { value: 'fix', name: 'fix:      A bug fix' },
      { value: 'docs', name: 'docs:     Documentation changes' },
      { value: 'style', name: 'style:    Code style changes' },
      { value: 'refactor', name: 'refactor: Code refactoring' },
      { value: 'test', name: 'test:     Tests' },
      { value: 'chore', name: 'chore:    Maintenance tasks' },
    ],
    scopes: [],
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // Add custom questions here
    // Example:
    // questions: [
    //   {
    //     type: 'input',
    //     name: 'customScope',
    //     message: 'Enter the scope (optional):',
    //   },
    // ],
  };