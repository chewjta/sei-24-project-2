module.exports = (dbPoolInstance) => {

let getAnswerForm = (id,callback) => {

    let query = `SELECT questions.question, answers.answer, questions.id,answers.id AS answersid FROM questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = '${id}'`

    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}

let getAnswerAdded = (id,username,answer,userId,markdown,callback) => {
let query = `INSERT INTO answers (question_id,user_id,answer,markdown) VALUES ('${id}','${userId}','${answer}','${markdown}')`
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

let getEditAnswer = (answer,answer_id,verified,callback) => {
    let values = [answer,answer_id,verified];
    let query = `UPDATE answers SET answer=$1,verified=$3 WHERE id=$2`
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


let getVoteAnswerForm = (id,callback) => {
    let query = `SELECT questions.question,answers.answer,answers.id,answers.vote,questions.id AS questionid FROM questions INNER JOIN answers ON questions.id = answers.question_id WHERE answers.id = '${id}'`
    dbPoolInstance.query(query,(err, result) => {
        callback(err,result)
    })
}


let getVoteAnswer = (id,vote,callback) => {
    let query = `UPDATE answers SET vote = COALESCE(vote,0) + ${vote} WHERE id ='${id}'`
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
        getDeleteAnswer,
        getVoteAnswerForm,
        getVoteAnswer
    }
}