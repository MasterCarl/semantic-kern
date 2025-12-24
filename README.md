# semantic-KERN

This showcase explores how the KERN UX standard can
be used as a lightweight starter kit that supplies sensible styles by default.

Note that this is a demo project, and might not be suitable for productive use.

[See the demo](https://mastercarl.github.io/semantic-kern/)

## Features

- Focuses on styling Markdown content: lists, headings, paragraphs.
- Can be used as a standalone style, or together with the `KERN-native` package.
- Uses `@layer`s to allow overriding defaults with KERN styles.

## How it works

This project uses a series of PostCSS plugins to @extend base selectors, copying over the relevant KERN rule contents.

Note that this lacks support for combined rules: The rule `.kern-form-input .kern-label` will not translate to `input label` at this point.
