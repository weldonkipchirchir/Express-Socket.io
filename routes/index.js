   const express = require('express');
   const router = express.Router();

   // Homepage route
   router.get('/', (req, res) => {
     res.sendFile(__dirname + '/../public/index.html');
   });

   module.exports = router;
