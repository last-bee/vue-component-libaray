var process = require('child_process')
process.exec('cd ../ && ./node_modules/.bin/vue-cli-service build --target lib --name vue-components-mobile ./src/components/index.js',function (error, stdout, stderr) {
  if (error !== null) {
    console.log('exec error: ' + error);
  }
})
