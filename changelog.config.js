// const conventionalCommit = require('./conventionalCommit.json');

// const typesEnum = Object.keys(conventionalCommit.type.enum);

// module.exports = {
//     extends: [
//         '@commitlint/config-conventional'
//     ],
//     rules: {
//         "type-enum": [2, "always", typesEnum],
//         "scope-case": [2, "always", ["camel-case"]],
//         "subject-empty": [2, "never"],
//         "subject-case": [2, "always", ["lower-case"]],
//         "header-max-length": [2, "always", 72],
//     },
//     prompt: {
//         settings: {},
//         messages: {
//             skip: ':skip',
//             max: 'upper %d chars',
//             min: '%d chars at least',
//             emptyWarning: 'can not be empty',
//             upperLimitWarning: 'over limit',
//             lowerLimitWarning: 'below limit'
//         },
//         questions: conventionalCommit
//     }
// }


module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: ['chore', 'ci'],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
    scopes: [],
    types: {
      chore: {
        description: 'Build process or auxiliary tool changes',
        emoji: '🤖',
        value: 'chore'
      },
      ci: {
        description: 'CI related changes',
        emoji: '🎡',
        value: 'ci'
      },
      messages: {
        type: 'Select the type of change that you\'re committing:',
        scope: 'Write the scope this component affects:\n',
        subject: 'Write a short, imperative mood descriptionsss of the change:\n',
        body: 'Provide a longer description of the change:\n ',
        breaking: 'List any breaking changes:\n',
        footer: 'Issues this commit closes, e.g #123:',
        confirmCommit: 'The packages that this commit has affected\n',
      },
    }
  };
