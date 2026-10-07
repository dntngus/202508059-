const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('프로필 웹사이트 실행 중: http://localhost:3000');
});
