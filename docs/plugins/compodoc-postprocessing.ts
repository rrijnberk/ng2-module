#!/usr/bin/env node

const Configuration = require('./src/configuration');
const Files = require('./src/files');

const args = process.argv.slice(2);
const config = new Configuration(args);

const regex = /\[@example\s.*\]/g;

function addSampleResize(file) {
    let script = `
    <script type="text/javascript">
        function resizeIframe(obj) {
          obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
        }
    </script>
    <style>
        iframe {
            width: 100%
        }             
    </style>
</head>
`;

    file.content = file.content.replace('</head>', script);
    return file;
}

function hasExample(file) {
    return regex.test(file.content)
}

function generateIframe(match) {
    let attributes = match
        .replace('[@example', '')
        .replace(']', '')
        .split('&quot;')
        .join('"')
        .trim();
    attributes = attributes.replace('src="', `src="${config.prefix}`);
    return `<iframe ${attributes} onload="resizeIframe(this)"></iframe>`;
}

function updateExamples(file) {
    let m;
    while ((m = regex.exec(file.content)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match) => {
            file.content = file.content.replace(match, generateIframe(match))
        });
    }
    return file;
}

/**
 * Warning:
 * The Files map and filter methods only forward their results.
 * They do not return an array.
 */
new Files(config)
    .filter(hasExample)
    .map(addSampleResize)
    .map(updateExamples);




