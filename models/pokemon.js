/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        //these are good for debugging what kinda of error it is with your callbacks
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };


let getAllStudents = (callback)=> {
    let query = "SELECT * FROM students"
    dbPoolInstance.query(query,(error, queryResult) => {
        callback(error,queryResult)
    })
}

let getIndividualStudent = (id,callback)=> {
//need additional id arguments to identify students

    let query = `SELECT * FROM students WHERE id='${id}'`

    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })

}

let getNewStudent = (callback) => {
    let query = "SELECT * FROM students"
    dbPoolInstance.query(query,(error, queryResult) => {
        callback(error,queryResult)
    })
}

let getCreateStudent = (name,phone,email,callback) => {
    let values = [name,phone,email];
    let query = "INSERT INTO students (name,phone,email) VALUES ($1, $2, $3)"
    dbPoolInstance.query(query,values,(error, queryResult) => {
        callback(error,queryResult)
    })
}


  return {
    getAll,
    getAllStudents,
    getIndividualStudent,
    getNewStudent,
    getCreateStudent //since value and key are the same.
  };
};
