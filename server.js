// SETUP

var
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  ejs = require('ejs'),
  ejsLayouts = require('express-ejs-layouts'),
  flash = require('connect-flash'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  passport = require('passport'),
  passportConfig = require('./config/passport.js'),
  // dotenv = require('dotenv').config({silent: true}),
  //commented out dotenv requirement for heroku deployment because .env variables are set via CLI to heroku directly
  favicon = require('serve-favicon'),
  watson = require('watson-developer-cloud'),
  Profile = require('./models/Profile.js'),
  mainRoutes = require('./routes/main.js'),
  userRoutes = require('./routes/users.js'),
  apiRoutes = require('./routes/api.js'),
  app = express()

// ENVIRONMENT PORT
var port = process.env.PORT || 3000

// DATABASE
var dbURL = 'mongodb://Neardanger:magadan312@ds023078.mlab.com:23078/watson'
// var dbURL = 'mongodb://localhost/project-3-reboot'

mongoose.connect(dbURL, function(err){
  if(err) return console.log(err)
  console.log("Connected to MongoDB: " + dbURL)
})

// CONFIGURE EJS VIEW
app.set('view engine', 'ejs')

// MIDDLEWARE

app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  secret: "boomboom",
  cookie: {_expires: 6000000}
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(ejsLayouts)
app.use(function(req,res,next){
  res.locals.login = req.isAuthenticated()
  next()
})


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));


// ROUTES

app.use('/', mainRoutes)

app.use('/', userRoutes)

app.use('/api', apiRoutes)


// SERVER

app.listen(port, function() {
  console.log("Server running on port ", port)
})
