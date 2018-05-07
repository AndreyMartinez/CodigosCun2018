
const moment = require("moment");
const server = require('http').createServer(handler)
const fs = require('fs')

const html = fs.readFileSync('exampleMoment.html')

function handler (request, response) {
    console.log(request, response)
    
    response.write(html)
    response.end()
}

server.listen(3333, () => {
    console.log('Server running at port: 3333')
})