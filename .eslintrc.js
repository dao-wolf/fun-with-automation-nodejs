module.exports = {
    parser: 'babel-eslint',
    plugins: ['babel', 'mocha', 'chai-expect'],
    env: {
        node: true,
        mocha: true
      },
    rules: {
        'mocha/no-exclusive-tests': 'error',
        'no-unused-vars': [
            'error',
            {
              'varsIgnorePattern': 'should|expect'
            }
          ],
        'chai-expect/missing-assertion': 2,
        'no-console': 'off',
        'no-useless-constructor': 'off'
    }
};