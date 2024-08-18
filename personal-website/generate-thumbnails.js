const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/pictures/images'); // Images directory
const outputDir = path.join(__dirname, 'src/pictures/thumbnails'); // Thumbnails output directory

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate thumbnails for all images in the input directory
fs.readdirSync(inputDir).forEach((file) => {
  const inputFilePath = path.join(inputDir, file);
  const outputFilePath = path.join(outputDir, file);

  // Only process image files
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    sharp(inputFilePath)
      .resize(400) // Increase the width for better quality (400px)
      .jpeg({ quality: 80 }) // Adjust JPEG quality (80 is a good balance)
      .toFile(outputFilePath, (err, info) => {
        if (err) {
          console.error(`Error processing ${file}:`, err);
        } else {
          console.log(`Thumbnail generated for ${file}:`, info);
        }
      });
  }
});
