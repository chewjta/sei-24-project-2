const sha256=require('js-sha256');

module.exports = (dbPoolInstance) => {

let getRegister = (username,password,type,callback) => {
    let query =`INSERT INTO accounts (username, password, type)
    SELECT username,password,type FROM accounts
    UNION
    VALUES ('${username}','${password}','${type}')
    EXCEPT
    SELECT username,password,type FROM accounts`
    dbPoolInstance.query(query, (err,res)=>{
      if(err){
        console.log("err in getLogin models", err.message)
      } else {
        callback(err,res)
      }
    })
}


let getLogin = (username,password,callback) =>{

    let query = `SELECT * FROM accounts where username = '${username}'`
    dbPoolInstance.query(query,(err,queryResult)=>{
      if(err){

        callback(err,null)
      } else {
        if( queryResult.rows.length<1){

          callback(err,"no such user!")
        } else{
          if(queryResult.rows[0].password !== `${password}`){

            callback(err,"wrong password")
          } else{callback(err,queryResult.rows[0]);}
        }
      }
    })
  }




    return {
        getRegister,
        getLogin
    }
}