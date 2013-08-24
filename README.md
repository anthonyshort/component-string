#### This plugin isn't needed with Component 0.17+. Use the templates section of your component.json file and you can automatically require the files.

# component-string

Component plugin to allow you require files as strings.

## Installation

```
npm install component-string
```

## Usage

```
component build --use component-string
```

Add a `strings` section to your `component.json`

```
{
  "name": "foo",
  "scripts": ["index.js"],
  "strings": ["template.html"]
}
```

Now in your `index.js` file you can require it:

```
var template = require('./template.html');
```
