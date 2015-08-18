// node example/example.js

var pathModule = require('path');
var ExifImage = require('../').ExifImage;

var image = new ExifImage({
  image: pathModule.join(__dirname, 'space-invader.jpg')
});

console.log(image.exifData);
