module.exports = (dbPoolInstance) => {

let getAnswerForm = (id,callback) => {

    let query = `SELECT questions.question, answers.answer, questions.id,answers.id AS answersid FROM questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = '${id}'`

    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}

let getAnswerAdded = (id,username,answer,userId,callback) => {

let query = `INSERT INTO answers (question_id,user_id,answer) VALUES ('${id}','${userId}','${answer} ----- ${username}')`
dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })

}

    return {
        getAnswerForm,
        getAnswerAdded
    }
}