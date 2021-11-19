export = {
    env: {
        es6: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        '@react-native-community',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'unused-imports'],
    rules: {
        indent: [
            'off',
            4,
            {
                SwitchCase: 1,
                MemberExpression: 'off',
                flatTernaryExpressions: false,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': 'error',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-extra-boolean-cast': 'error',
        // ts-ignore warning으로 처리
        '@typescript-eslint/ban-ts-comment': 'off',
        // interface {} 를 허용하도록 처리
        '@typescript-eslint/no-empty-interface': 'off',
        // empty function을 허용하도록 처리
        '@typescript-eslint/no-empty-function': 'off',
        // require 허용하도록 처리
        '@typescript-eslint/no-var-requires': 'off',
        'no-nested-ternary': 'error',
        //MEDIA_SLIDER_MODE, MEDIA_TYPE, PaymentMethodEnum등, 전역에서 사용하는 enum이나 Interface들을 사용하도록 수정
        'no-shadow': 'off', // replaced by ts-eslint rule below
        '@typescript-eslint/no-shadow': 'error',
        //parseInt시 parseInt(value, radix) 로 넘겨줘야하는데 radix 가 없어서 발생하는 warning 처리.
        radix: 'off',
        // \/ \$ \^ 등 불필요한 특수문자들이 WARN으로 표시되는데 이런 현상을 제거하기 위함.
        'no-useless-escape': 'off',
        // namespace 사용을 위함
        '@typescript-eslint/no-namespace': 'off',
        'unused-imports/no-unused-imports': 'error',
    },
}
