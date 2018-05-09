const assert = require('assert');
const texturepacker = require('../dist/index');

describe('buildCommand', () => {
    it('should build command correctly', () => {
        let command = texturepacker.buildCommand('imagefile', {
            format: 'phaser-json-hash',
            maxSize: 2048,
            scaleMode: 'Smooth',
            multipack: true
        });

        assert.equal(
            command,
            'TexturePacker imagefile --format phaser-json-hash --max-size 2048 --scale-mode Smooth --multipack'
        );
    });
});

// -format phaser-json-hash --sheet the-baroness.png --scale 1 --opt RGBA8888 --max-size 2048 --scale-mode Smooth --algorithm MaxRects --data the-baroness.json
