var fs = require("fs");
fs.mkdirSync("day_5");
fs.writeFileSync("day_5/hello.txt", "Hello, file created using fswriteFileSync");

fs.appendFileSync('day_5/hello.txt', ",file appended using appendFileSync.");