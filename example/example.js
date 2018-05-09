const texturepacker = require('../dist/index');

texturepacker.exec('./example/eye.svg', {
    format: 'phaser-json-hash',
    maxSize: 2048,
    scaleMode: 'Smooth',
    multipack: true
});
