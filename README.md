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