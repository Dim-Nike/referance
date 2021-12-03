const express = require('express')
const expressLayouts = require('express-ejs-layouts');

const path = require('path')
const dirname = path.resolve()

const urlencodedParser = express.urlencoded({extended: false});


const PORT = process.env.PORT || 3001


const app = express()

/** Настройка шаблонизатора */
app.set("view engine", "ejs");

app.use(expressLayouts);

/**
 * Маршрутизация
 */

app.get('/', (req, res) => {
    //res.send(`Ты находишься на порту - ${PORT}`)
    res.render('index');

})


app.get('/reg', (req, res) => {
    res.sendFile(path.resolve(dirname, 'public', 'sign-up.html'))
})

app.get('/sign_up', (req, res) => {
    res.sendFile(path.resolve(dirname, 'public', 'login_form.html'))
})

app.post('/reg', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send();
})

app.post('/sign_up', (req, res) => {
    
})


app.listen(PORT, () => console.log(`Сервер запущен! Порт - ${PORT}`))