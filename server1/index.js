// Import packages.
const express = require('express')
const axios = require('axios');

// Create and configure a webserver.
const app = express()
app.use(express.json())


// Create a test endpoint
app.get('/', async (req, res) => {
  const response = await axios.get(`http://${process.env.SERVER_5_API}/`);
  res.status(200).send(response.data);
})

// Start the webserver.
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
