var dotenv = require('dotenv').config({silent: true})

module.exports = {
  'twitter': {
    'consumerKey': 	'ErBfqSML7GNWWakJkqrnpKdqF',
    'consumerSecret': 	'Tt776whQTC82rEMB7KFwzdOGzc9G7AX6FeywRhha2MT2LWpnj1',
    'callbackURL': 'http://localhost:3000/auth/twitter/callback'
    // 'callbackURL': 'http://127.0.0.1:3000/auth/twitter/callback'
    // 'profileFields': ['emails', 'displayName']
  }
}
