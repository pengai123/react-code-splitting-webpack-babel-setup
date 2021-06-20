const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static("client/dist"))

console.log('NODE_ENV:', process.env.NODE_ENV)

// Handles react router and any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
