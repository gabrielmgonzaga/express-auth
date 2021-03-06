const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

// Use jwt tokens and not cookies
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
    app.get('/', requireAuth, (req, res) => {
        res.send({ hi: 'there' })
    })
    app.post('/signin', requireSignin, Authentication.signin)
    app.post('/signup', Authentication.signup)
}