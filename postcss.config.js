module.exports = {
    plugins: [
        require("postcss-import"),
        require("./postcss-plugins/process-default-selector"),
        require("postcss-extend-rule"),
        require("@fullhuman/postcss-purgecss").purgeCSSPlugin({
            content: ["./**/*.html"],
        })
    ]
}