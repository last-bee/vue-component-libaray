const { runLoaders } = require('loader-runner')
const fs = require('fs')
const path = require('path')

runLoaders({
    resource: path.join(__dirname, './demo.md'),
    loaders: [
        {
            loader: path.join(__dirname, './main.js'),
            options: {
                componentName: 'test'
            }

        }
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    console.log(err, result)
})