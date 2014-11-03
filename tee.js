var fs = require('fs')
var filepath = process.argv[2]

// code below gleaned from http://howtonode.org/coding-challenges-with-streams
process.stdin.setEncoding('utf8');

if (filepath) {
  process.stdin.pipe(process.stdout);
  process.stdin.pipe(fs.createWriteStream(filepath));
} else {
  process.stdin.pipe(process.stdout);
}
