const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//- - - - - - - - - - EXPRESS MIDDLEWARE  - - - - - - - - - -//
// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({ extended: false}))
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// handle unsupported user requests to '/*' ... 'unspecified'
// this catchall route needs to be at the end to catch the 
// routes that are not specified above it
app.use((req, res) => {
  res.status(404).end()
})

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
  // console.log(process.env.PORT)
})

// console.log(express)