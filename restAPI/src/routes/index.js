const registerRoute = require('./registerRoute') 

module.exports = (app) => {
  app.use(registerRoute)
}