const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');
// const blob = require('fetch-blob');
// const express = require('express');
// const app = express();


// const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
// app.set('view engine', 'ejs');

// app.listen(port, () => console.log(`app listening on port ${port}`));

app.get('/', function (req, res, next) {
  // var stream = fs.createReadStream('sample.pdf');
  // var filename = "sample.pdf"; 

  // filename = encodeURIComponent(filename);
  // // Ideally this should strip them

  // const base64string=fs.readFileSync('sample.pdf',{encoding:'base64'})

  // // res.setHeader('Content-disposition', 'inline; filename="' + filename + '"'); 
  // res.setHeader('Content-type', 'application/pdf');

  // // res.blob()
  // console.log(base64string)

  // stream.pipe(res);



  var writerStream = fs.createWriteStream('sample.pdf');

  // Write the data to stream with encoding to be utf8

  const data=fs.readFileSync('sample.pdf',{encoding:"base64"})

  writerStream.write(data);

  // Mark the end of file
  writerStream.end();

  // Handle stream events --> finish, and error
  writerStream.on('finish', function () {
    console.log("Write completed.");
  });

  writerStream.on('error', function (err) {
    console.log(err.stack);
  });

  console.log(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})