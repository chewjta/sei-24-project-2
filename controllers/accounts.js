const sha256=require('js-sha256');

module.exports = (db) => {

let home = (request,response) => {
    response.render('accounts/home')
}

let registerForm = (request,response) => {
    response.render('accounts/registerform')
}

let loginForm = (request,response) => {
    response.render('accounts/loginform')
}

let register = (request,response) => {
    let {username,password,type} = request.body;
    password = sha256(password);
    db.accounts.getRegister(username,password,type,(err,res)=>{
            response.render('accounts/loginform')
    })
}

let login = (request,response) => {
    let {username,password} = request.body;
    password = sha256(password);
    db.accounts.getLogin(username,password,(err,result)=>{
      if (result === "no such user!" || result === "wrong password"){
        response.status(404).send(result)
      } else{
        response.cookie('username',result.username);
        response.cookie('userId',result.id)
        response.cookie('type',result.type);
        response.cookie('logIn', 'true');
        if(result.type == 'teacher'){
        response.redirect('/dashboard')
    } else if (result.type == 'student'){
        response.redirect('/students/dashboard')
      }
    }
    })
}


let logout = (request,response) =>{
    response.clearCookie('username');
    response.clearCookie('type');
    response.clearCookie('logIn');
    response.clearCookie('userId');
    response.redirect('/')
  }


    return{
    home,
    registerForm,
    loginForm,
    register,
    login,
    logout
    }
}