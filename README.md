# Watson's Couch App

Watson's couch is a web app that illustrates the psychological profile of a twitter user by analyzing the last 200 tweets of the user. Upon entering a twitter user handle, one will be able to view graphs that illustrate the profile scores of said user.

# Technologies
* Node.js
* RESTful API
* Watson API
* Twitter API
* MongoDB
* D3
* Deployment - mlab database
* Deployment - Heroku
* JSON
* HTML
* CSS
* Materialize
* Javascript
* JQuery
* GitHub


[Watson's API Documentation](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/personality-insights/api/v2/)
<br>

[Twitter's API Documentation](https://dev.twitter.com/overview/documentation)

# RESTful Routes
|Method|Endpoint|Description|
|------|--------|-----------|
|GET|api/twitter/:id|Returns tweets of a Twitter user.|
|POST|api/watson|Sends body of text and receives analysis of said text.|
|GET|/login|Takes user to login page.|
|GET|/signup|Takes user to signup page.|
|GET|/profile|Takes user to profile page.|
|GET|/update|Takes user to update page.|
|PATCH|/profile/:id|Updates user information.|
|DELETE|profile/:id|Deletes user.|
