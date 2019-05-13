const express = require("express");
const winston = require("winston");

const router = express.Router();

/* router.get('/', (req, res) => {
	winston.info('server api greeting', req.query);
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
}); */

router.get('*', (__request,__response) => {
	winston.info('server register user', __request.query.name, __request.query.email, __request.query.password );
	__response.send({success:true});
})


module.exports = router;