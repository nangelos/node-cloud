const express = require('express'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      multer = require('multer'),
      pg = require('pg'),
      pgSession = require('connect-pg-simple')(session)


const app = express()
const PORT = 8000

app.use(cookieParser())
app.use(bodyParser.json())
//TODO
// https://code.tutsplus.com/tutorials/data-persistence-and-sessions-with-react--cms-25180
// Basically we need a sessions table in the psql database so that users can have persistant sessions.
app.use(session({
    secret: process.env.NODE_ENV === 'PRODUCTION' ? process.env.SECRET_KEY : 'test',
    saveUninitialized: true,
    resave: true,
    store: new pgSession(),
    cookie: { maxAge: 7 * 24 * 60 * 1000 } // 7 days
}))

app.get('*', (req, res) => res.send('node cloud'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
