const proxy = require('express-http-proxy');
const app = require('express')();
const argv = require('minimist')(process.argv.slice(2))
const cors = require('cors')
const port = 3030
const proxyHost = '/'
const forwardHost = argv.host

app.use(cors())
app.use(proxyHost, proxy(forwardHost));

app.listen(port, () => console.log("Proxy server is running"))
