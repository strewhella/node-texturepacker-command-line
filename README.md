A simple wrapper around the TexturePacker (https://www.codeandweb.com/texturepacker) command line tool for build integration. The command line tool must be installed and available on your PATH.

Any valid option can be passed into the main function, just convert it from `--kebab-case` to `camelCase`. Options that require no value, like `multipack` will have the `true` stripped from the command.

_The `path` you specify needs to be specified relative to the script of execution. Check the npm script `example` in package.json for an example_

Usage:

```
texturepacker.exec(path, options);
```

```
const texturepacker = require('texturepacker');

texturepacker.exec('imagefile', {
    format: 'phaser-json-hash',
    maxSize: 2048,
    scaleMode: 'Smooth',
    multipack: true
});
```
