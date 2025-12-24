module.exports = {
    plugins: [
        require("postcss-import"),
        // open issue: this results in nested @layer rules
        require("postcss-extend-rule"),
        require("@fullhuman/postcss-purgecss").purgeCSSPlugin({
            content: ["./**/*.html"],
        })
    ]
}