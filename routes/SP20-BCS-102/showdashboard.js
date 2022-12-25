const express = require('express');
const app = express();

router.get('/',(req, res, next)=>{
    res.sendFile(Dashboard + '/routes/');
});

module.exports = router;
