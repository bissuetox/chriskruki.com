const express = require('express');
const path = require('path')
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true); // For GCloud

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.render('index');
})

app.use((req,res) => {
  res.status(404).render('404');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});