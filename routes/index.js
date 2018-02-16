var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistem Informasi Standar Biaya' });
});

router.get('/kebinamargaan', function(req, res, next){
	res.render('kebinamargaan',{ title:'Bidang Kebinamargaan'});
})
module.exports = router;
