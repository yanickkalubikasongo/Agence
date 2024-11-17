var app = require('./app')
  , port = process.env.PORT || 8081

var logger = function(req, _, next) {
  console.log('%s %s', req.method, req.url)
  next()
}

app.stack.unshift({ route: '', handle: logger })

app.listen(port, function() {
  console.log('Listening on port %d', port)
})
