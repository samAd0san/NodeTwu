const home = (req,res)=>{
    res.status(200);
    res.send('KORENO HOME PAGE DESU');
}

const health = (req,res) => {
    res.status(200);
    res.json({status:'Up'});
}

module.exports = {
    home,
    health,
}