const mw={};


mw.validateNull = (req, res,next) => {

    var email= req.body.email;
    var pass= req.body.pass;
    
    if(email===null && pass===null ){
        res.status(403).send('ERROR! Email and Password null')
    }else if(email!=null && pass===null){
        res.status(403).send('ERROR! Password null')
    }
    else if(email===null && pass!=null){
        res.status(304).send('ERROR! Email null')
    }

    if(email!=null && pass!=null){
       next()
    }
};

module.exports = mw;