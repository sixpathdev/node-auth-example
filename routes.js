var express = require('express')
var router = express.Router()

/* Import Controllers*/
const controllers = require('./controllers');

/* Import Middleware*/
const middleware = require('./middleware')

/* Define all your routes*/

router.get("/", function(req, res) {
    return res.json({message: "Index Route of Public API"});
})

router.post('/register', controllers.auth.register)

router.post('/login', controllers.auth.login)


router.get('/profile', middleware.auth, controllers.users.currentUser)



/*Export your routes*/
module.exports = router;