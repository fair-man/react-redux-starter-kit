let app = new (require('express'))();
let express = require('express');
let port = 3000;

app.use(express.static('./dist'));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
