let { users } = require("../utils/users");




function login(req, res) {
    const { username, password } = req.query;

    let access = false;

    for(let i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            access = true;
            break;
        }         
    }

    // access ? res.status(200).json({access: true}) : res.status(200).json({access: false});

    if(access){
        res.status(200).json({access: true});
    } else {
        res.status(200).json({access: false})
    }
     
}

module.exports = {
    login
}