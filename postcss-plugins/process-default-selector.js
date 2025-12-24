function plugin(opts = {}) {
    return {
        postcssPlugin: 'process-default-selector',
        Rule(rule) {
            if (rule.selector.includes(":default")) {
                rule.selector = rule.selector.replace(":default", ':not([class~="custom"])');
            }
        }
    }
}
module.exports = plugin
module.exports.postcss = true