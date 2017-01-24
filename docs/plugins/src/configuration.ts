const DEFAULTS = {
    ext: 'html',
    src: './documentation',
    prefix: '/example/#'
};

const ConfigurationFn = (args) =>  {
    let config;
    const processArguments = (args) => {
        let config = {};
        for (let i = 0; args.length > i; i++) {
            switch (args[i]) {
                case '-s':
                case '--src':
                    config['src'] = args[++i];
                    break;
                case '-p':
                case '--prefix':
                    config['prefix'] = args[++i];
                    break;
                default:
                    console.log(`incorrect argument '${args[i]}' for processing`);
                    process.exit(1);
            }
        }
        return config;
    };

    const processDefaults = (config) => {
        let result = {};
        Object.keys(DEFAULTS).forEach((key) => {
            result[key] = config[key] ? config[key] : DEFAULTS[key];
        });
        return result;
    };


    config = processArguments(args);
    config = processDefaults(config);

    return config;
};

module.exports = ConfigurationFn;