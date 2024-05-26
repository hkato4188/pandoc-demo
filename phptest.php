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

// Usage => files to be input
convertMdToHtml('hk-demo.md', 'hk-demo.html');
?>
