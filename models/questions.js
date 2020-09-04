module.exports = (dbPoolInstance) => {
let getDashboard = (user,callback) => {
    let query = `SELECT questions.user_id AS questioner, answers.user_id AS answerer,questions.topic, questions.question,answers.answer,accounts.username FROM answers RIGHT JOIN questions ON answers.question_id = questions.id LEFT JOIN accounts ON questions.user_id = accounts.id ORDER BY questions.id DESC`
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}

let getAllQuestions = (callback) => {
    let query=`SELECT questions.id, answers.answer, questions.question FROM questions LEFT JOIN answers ON questions.id = answers.question_id`
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}

let getIndividualQuestion = (id,callback)=>{
    let query = `SELECT *`
}


    return {
        getDashboard,
        getAllQuestions
    }
}