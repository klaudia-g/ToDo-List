const express = require('express');
const router = express.Router();

router.get('/logout', function(req, res, next){
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;