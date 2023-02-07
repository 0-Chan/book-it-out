module.exports = {
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],
    pluginSearchDirs: false,
    // plugins: [require("prettier-plugin-tailwindcss")],
    printWidth: 80,
    tabWidth: 2,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '^react/(.*)$',
        '^next/(.*)$',
        '^@next/(.*)$',
        '^@mui/material(.*)$',
        '^@mui/icons-material(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
