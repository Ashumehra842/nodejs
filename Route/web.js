const express = require('express');
const app = express();
const router = express.Router();
const User = require('../Model/User');
const fs = require('fs');

router.get('/', (req, res) => {
    res.send("hello");
});

router.get('/add/user', (req, res)=>{
    fs.readFile('./View/user.html','utf8', (err, data) =>{
        if(err) throw err;

        res.send(data);
        res.end();
    });
    
});
router.post('/store/user', async (req, res) => {
    const mycollection = {
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        age:req.body.age
    };
   const inserted =  await mycollection.create();
    res.send(mycollection);
   
})

router.get('/list', (req, res)=>{
   
    User._id = new mongoose.types.ObjectId();
    console.log(User);
});


module.exports = router;