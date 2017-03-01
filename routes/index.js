const router = require('express').Router();
var path = require('path');

// router middleware that will happen on every request
router.use(function(req, res, next){
	console.log(req.method, req.url);	//Log the request to the console
	next();	//Continue to next route
})

router.get('/', (req, res) => {
  	res.status(200);
});

module.exports = router;