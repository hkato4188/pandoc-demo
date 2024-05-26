# Markdown to HTML Converter
This project provides a PHP script to convert Markdown files into HTML files using Pandoc. The script takes an input Markdown file and generates an HTML file as output.

### Prerequisites
Before using this script, ensure you have the following installed on your system:

- Pandoc: A universal document converter.
- PHP: A popular general-purpose scripting language.
## Installing Pandoc
### On macOS
bash
Copy code
brew install pandoc
### On Linux (Debian/Ubuntu)
bash
Copy code
sudo apt-get install pandoc
### On Windows
Download and run the installer from the Pandoc website.

Usage
1. Prepare Your Markdown File
Create your Markdown file, e.g., example.md.

2. PHP Script
Use the provided PHP script to convert your Markdown file to HTML.

php
Copy code
<?php
function convertMdToHtml($inputFile, $outputFile) {
    $command = "pandoc -s -o " . escapeshellarg($outputFile) . " " . escapeshellarg($inputFile);
    $output = null;
    $return_var = null;
    exec($command, $output, $return_var);
    if ($return_var !== 0) {
        echo "Error converting $inputFile to $outputFile.\n";
    } else {
        echo "Converted $inputFile to $outputFile successfully.\n";
    }
}

// Usage
convertMdToHtml('example.md', 'example.html');
?>
3. Execute the Script
Save the script to a file, for example, convert.php. Ensure you have your example.md file in the same directory, or provide the correct path to it.

Run the script from the command line:

bash
Copy code
php convert.php
4. Check the Output
After running the script, you should find an example.html file in the same directory. Open it in your web browser to see the converted HTML.

### How It Works
Function Definition: The convertMdToHtml function takes two arguments: the input Markdown file and the output HTML file.
Command Construction: The function constructs a command string to call Pandoc with the appropriate options to convert the Markdown file to HTML.
Command Execution: The exec function runs the constructed command, capturing any output and the return status.
Error Handling: If the command fails (non-zero return status), an error message is displayed. Otherwise, a success message is shown.
Customization

### License
- pandoc is licensend under GPL
