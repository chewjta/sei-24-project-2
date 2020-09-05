module.exports = (dbPoolInstance) => {
let getDashboard = (user,callback) => {
    let query = `SELECT questions.user_id AS questioner, answers.user_id AS answerer,questions.topic, questions.question,answers.answer,accounts.username,questions.id AS questionid FROM answers RIGHT JOIN questions ON answers.question_id = questions.id LEFT JOIN accounts ON questions.user_id = accounts.id ORDER BY questions.id DESC`
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
    let query = `SELECT questions.topic, questions.question,answers.answer,questions.id,answers.id AS answersId,answers.markdown,answers.verified FROM questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = '${id}'`
    dbPoolInstance.query(query,(err,result)=>{
    callback(err,result)
})
}


let getEditQuestionForm = (id,callback) => {
    let query = `SELECT questions.topic,questions.id, questions.question FROM questions WHERE questions.id = '${id}'`
    dbPoolInstance.query(query,(err,result)=>{
    callback(err,result)
})
}

let getEditQuestion = (question,topic,question_id,callback) => {
    let values = [question,topic,question_id];
    let query = `UPDATE questions SET question=$1,topic=$2 WHERE id=$3`
    dbPoolInstance.query(query,values,(err, result) => {
        callback(err,result)
    })
}

let getDeleteQuestionForm = (id,callback) => {
    let query = `SELECT questions.topic,questions.id, questions.question FROM questions WHERE questions.id = '${id}'`
    dbPoolInstance.query(query,(err,result)=>{
    callback(err,result)
})
}

let getDeleteQuestion = (question_id,callback) => {
    let query = `DELETE FROM questions WHERE id='${question_id}'`
    dbPoolInstance.query(query,(err, result) => {
        callback(err,result)
    })
}

let getAddNewQuestion = (userId,question,topic,markdown,callback) => {
    let query = `INSERT INTO questions (user_id,topic,question,markdown) VALUES ('${userId}','${topic}','${question}','${markdown}')`;
    dbPoolInstance.query(query,(err, result) => {
        callback(err,result)
    })
}


    return {
        getDashboard,
        getAllQuestions,
        getIndividualQuestion,
        getEditQuestionForm,
        getEditQuestion,
        getDeleteQuestionForm,
        getDeleteQuestion,
        getAddNewQuestion
    }
}