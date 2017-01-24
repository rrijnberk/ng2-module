const glob = require("glob");
const fs = require('fs');




function Files(config) {
    const local = this;
    const globPattern = `${config.src}/**/*.${config.ext}`.replace('//', '/');
    const options = {};
    let files = [];
    let stack = [];

    glob(globPattern, options, (er, results) => {
        if(er) {
            console.error('Processing files resulted in an error:');
            console.error(er);
            process.exit(1);
        }

        let promises = results.map(getFileContent);

        Promise.all(promises).then((data) => {
            stack.forEach((request) => {
                data = data[request.call](request.callback);
            });

            data.forEach(setFileContent);
        });

    });

    this.map = (callback) => {
        stack.push({ call: 'map', callback });
        return this;
    };

    this.filter = (callback) => {
        stack.push({ call: 'filter', callback });
        return this;
    };

    this.write = () => {
        stack.push({ call: 'write' })
    }
}

function getFileContent(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve({
                path: file,
                content: data.toString()
            });
        });
    });
}

function setFileContent(file) {
    fs.writeFile(file.path, file.content, (err) => {
        if(err) {
            console.error(`An error has occured when writing to: ${file.path}`, err);
            process.exit(1);
        }
    });
}

module.exports = Files;