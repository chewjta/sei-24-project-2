module.exports = (dbPoolInstance) => {
let getDashboard = (user,callback) => {
    let query = `SELECT questions.user_id AS questioner, answers.user_id AS answerer,questions.topic, questions.question,answers.answer,accounts.username,questions.id AS questionid,answers.verified,questions.vote FROM answers RIGHT JOIN questions ON answers.question_id = questions.id LEFT JOIN accounts ON questions.user_id = accounts.id ORDER BY questions.vote DESC NULLS LAST`
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}

let getAllQuestions = (callback) => {
    let query=`SELECT questions.id, answers.answer, questions.question,questions.vote,questions.topic FROM questions LEFT JOIN answers ON questions.id = answers.question_id ORDER BY questions.vote DESC NULLS LAST`
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}

let getIndividualQuestion = (id,callback)=>{
    let query = `SELECT questions.topic, questions.question,answers.answer,questions.id,answers.id AS answersId,answers.markdown, questions.markdown AS qnmarkdown,answers.verified,answers.user_id AS answerer,questions.user_id AS questioner,answers.vote, questions.vote AS questionvote FROM questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = '${id}' ORDER BY answers.vote DESC NULLS LAST`
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
    let query = `DELETE FROM questions WHERE id='${question_id}'; DELETE FROM answers WHERE question_id='${question_id}'`
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



let getVoteQuestionForm = (id,callback) => {
    let query = `SELECT questions.topic,questions.id, questions.question FROM questions WHERE questions.id = '${id}'`
    dbPoolInstance.query(query,(err, result) => {
        callback(err,result)
    })
}


let getVoteQuestion = (question_id,vote,callback) => {
    let query = `UPDATE questions SET vote = COALESCE(vote,0) + ${vote} WHERE id ='${question_id}'`
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
        getAddNewQuestion,
        getVoteQuestionForm,
        getVoteQuestion
    }
}