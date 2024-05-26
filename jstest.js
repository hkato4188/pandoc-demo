//need to npm init to call js from backend... but nah

const { exec } = require('child_process');

function convertMdToHtml(inputFile, outputFile) {
    exec(`pandoc -s -o ${outputFile} ${inputFile}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Converted ${inputFile} to ${outputFile} successfully.`);
    });
}

// Usage
convertMdToHtml('hk-demo.md', 'hk-demo.html');
