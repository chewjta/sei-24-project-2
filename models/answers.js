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


let getEditAnswerForm = (id,callback) => {
    let query = `SELECT questions.question, answers.answer,questions.id AS questionid,answers.id FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE answers.id = '${id}'`
    dbPoolInstance.query(query,(err,result)=>{
    callback(err,result)
})
}

let getEditAnswer = (answer,answer_id,callback) => {
    let values = [answer,answer_id];
    let query = `UPDATE answers SET answer=$1WHERE id=$2`
    dbPoolInstance.query(query,values,(err, result) => {
        callback(err,result)
    })
}

let getDeleteAnswerForm = (id,callback) => {
    let query = `SELECT questions.question, answers.answer,questions.id AS questionid,answers.id FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE answers.id = '${id}'`
    dbPoolInstance.query(query,(err,result)=>{
    callback(err,result)
})
}

let getDeleteAnswer = (answer_id,callback) => {
    let query = `DELETE FROM answers WHERE id='${answer_id}'`
    dbPoolInstance.query(query,(err, result) => {
        callback(err,result)
    })
}


    return {
        getAnswerForm,
        getAnswerAdded,
        getEditAnswerForm,
        getEditAnswer,
        getDeleteAnswerForm,
        getDeleteAnswer
    }
}