const bcrypt = require('bcrypt');
const UserRepo = require('../repositories/userRepo');

const emailExists = (err) => err.message 
    && err.message.indexOf('duplicate key error') > -1;

const signup = async(req,res) => {
    try{
        const playload = req.body;
        playload.createdDate = new Date();
        playload.password = await bcrypt.hash(playload.password,2);

        await UserRepo.add(playload);
        console.log(`User added:`,playload);
    
        res.status(201).send('Created');
    }catch(err) {
        console.error(err.message); // If there a duplicate email is entered by the user, the database will throw an error message,
        // E11000 duplicate key error collection: play-db.users index: email_1 dup key: { email: "user@cgc.com" }rs index: email_1 dup key: { email: "user@cgc.com" }
        // this error message is detected by the 'emailExists' and then gives status 400.   
        if(emailExists(err)) {
            res.status(400).send('Email Already Exists');
        }else{
            res.status(500).send('Internal Server Error');
        }
    }
};

const signin = async(req,res) => {
    try{
        const playload = req.body;
        // checking if email entered by the user exists in the db or not
        const dbUser = await UserRepo.getUserByEmail(playload.email);

        // If the email entered is incorrect/doesnot exist in the db
        if(!dbUser) {
            res.status(404).send('Invalid username');
            return;
        }
        
        // converting the password to hash then compare the entered password and existing password(inDb)
        const isValid = await bcrypt.compare(playload.password,dbUser.password);
        if(isValid) {
            res.status(200).json({
                username: dbUser.username,
                password: dbUser.password
            });
        }else{
            // If the password entered is incorrect
            res.status(401).send('Invalid password');
        }
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    signup,
    signin,
}