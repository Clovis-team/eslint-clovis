
const rules = {
    indent: [
        'error', 4,
        {
            SwitchCase: 1,
        },
    ],

    'linebreak-style': [
        'error', 'unix',
    ],

    quotes: [
        'error', 'single',
        {
            avoidEscape: true,
            allowTemplateLiterals: false,
        },
    ],
}



module.exports = {
    'extends': 'eslint:recommended',

    globals: {
        global: true,
        require: true,
        module: true,
        process: true,
        console: true,
        Promise: true,
        __dirname: true,
        __filename: true,

        setInterval: true,
        clearInterval: true,
        setTimeout: true,
        clearTimeout: true,

        // Mocha
        it: true,
        describe: true,
        before: true,
        after: true,
        beforeEach: true,
        afterEach: true,
    },

    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 8,

        ecmaFeatures: {
            impliedStrict: true,
            experimentalObjectRestSpread: true,
            jsx: true,
        },

        sourceType: 'module',
    },

    rules,
}
