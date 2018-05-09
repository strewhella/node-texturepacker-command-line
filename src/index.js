const util = require('util');
const execProcess = util.promisify(require('child_process').exec);

export async function exec(path, opts) {
    let command = buildCommand(path, opts);

    return await execProcess(command);
}

export function buildCommand(path, opts) {
    opts = opts || {};

    let command = new Command();
    command.addPath(path);
    Object.keys(opts).forEach(option => {
        command.addOption(option, opts[option]);
    });

    return command.build();
}

class Command {
    constructor() {
        this.commands = [];
        this.path = '';
    }

    addPath(path) {
        this.path = path;
    }

    addOption(option, value) {
        this.commands.push({
            option: `--${this.kebabCase(option)}`,
            value
        });
    }

    build() {
        if (!this.path)
            throw new Error('Must specify a path to process (image/directory)');

        let options = this.commands
            .map(c => `${c.option}${this.resolveValue(c.value)}`)
            .join(' ');
        return `TexturePacker ${this.path} ${options}`;
    }

    resolveValue(value) {
        if (value === true) {
            return '';
        }

        return ` ${value}`;
    }

    // https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
    kebabCase(text) {
        return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
}
