const assert = require('assert');
const texturepacker = require('../dist/index');

describe('buildCommand', () => {
    it('should build command correctly', () => {
        let command = texturepacker.buildCommand('./nested/imagefile', {
            format: 'phaser-json-hash',
            maxSize: 2048,
            scaleMode: 'Smooth',
            multipack: true
        });

        assert.equal(
            command,
            'TexturePacker ./nested/imagefile --format phaser-json-hash --max-size 2048 --scale-mode Smooth --multipack'
        );
    });
});
