# semantic-KERN

This showcase explores how the KERN UX standard can
be used as a lightweight starter kit that supplies sensible styles by default.

Note that this is a demo project, and might not be suitable for productive use.

## Features

- Focuses on styling Markdown content: lists, headings, paragraphs.
- Can be used as a standalone style, or together with the `KERN-native` package.
- Escape hatch — adding `.custom` will disable these styles.

## How it works

This project uses a series of PostCSS plugins to @extend base selectors, copying over the relevant KERN rule contents.

Note that this lacks support for combined rules: The rule `.kern-form-input .kern-label` will not translate to `input label` at this point.
