const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));
app.get('/post/:id', (req, res) => {
  res.sendFile(path.resolve('public/post.html'))
})

app.post('public/post/:id', async (req, res) => {
 let restDoc = fs.readFileSync(`./locations.json/${req.params.id}.json`) // this reads JSON file and stores it in that variable. We always want to await readFile because reading files takes time and if we keep cycling through we'll be given a 'promise pending' object, which we don't want. What does 'params' do? and why .json on the end? 
  restDoc.comments.push(req.body.comment)// <- name of input field)
  await fs.writeFile()
})
app.listen(PORT, () => {console.log('yup')}) 
