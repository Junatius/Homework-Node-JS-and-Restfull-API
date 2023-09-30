const fs = require('fs');
const axios = require('axios');

// URL of the raw content
const rawContentUrl = 'https://gist.githubusercontent.com/RezaNurRochmat13/291dcd64a10ff8c19f6b8b74107c85e2/raw/9d42c4c26ac6f3d783f8ae0b35af8b8d574a54ca/homework.log';

// Fetch the content from the raw URL
axios.get(rawContentUrl)
  .then(response => {
    // Write the content to a local file
    fs.writeFile('log.txt', response.data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File written successfully');
      }
    });
  })
  .catch(error => {
    console.error('Error fetching raw content:', error);
  });