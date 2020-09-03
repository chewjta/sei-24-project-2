module.exports = (db) => {

  /**
   * ===========================================
   * Controller Logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  const students = (request,response) => {
    console.log(db,'---db object')
    db.pokemon.getAllStudents((err,res)=>{ //db.pokemon cos it is an object key from db.js to call the pokemonmodelsobject function.
        response.send(res)
    })
  }


  const individualStudent = (request,response) => {
    let {id} = request.params
    db.pokemon.getIndividualStudent(id,(err,result)=>{
        if(err){
            response.status(500).send("Oops we did not find the student you were looking for")
        } else {
            response.send(result.rows)
        }
    })
  }

const newStudent = (request,response) => {
    db.pokemon.getNewStudent((err,result)=>{
                if(err){
            response.status(500).send("Oops we did not find the student you were looking for")
        } else {
            response.render('form')
        }
    })
}

const createStudent = (request,response) => {
    let {name,phone,email} = request.body
    db.pokemon.getCreateStudent(name,phone,email,(err,result)=>{
                if(err){
                    console.log(err)
            response.status(500).send("Oops we did not find the student you were looking for")
        } else {
            response.send(`Student ${name} was added to the db successfully!`)
        }
    })
}



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    students,
    individualStudent,
    newStudent,
    createStudent
    //if both key and values are the same you can just do this.
  };

}

