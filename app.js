const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));
app.get('/post/:id', (req, res) => {
  res.sendFile(path.resolve('public/post.html'))
})

app.listen(PORT, () => {console.log('yup')}) 
