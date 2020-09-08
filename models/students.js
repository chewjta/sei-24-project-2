module.exports = (dbPoolInstance) => {


let getStudentDashboard = (callback) => {
        let query=`SELECT questions.user_id AS questioner, answers.user_id AS answerer,questions.topic, questions.question,answers.answer,accounts.username,questions.id AS questionid,questions.vote, answers.vote AS answervote,answers.id AS answerid FROM answers RIGHT JOIN questions ON answers.question_id = questions.id LEFT JOIN accounts ON questions.user_id = accounts.id ORDER BY questions.vote DESC NULLS LAST`;
        dbPoolInstance.query(query,(err, result) => {
        callback(err,result)
    })
}



    return {
        getStudentDashboard
    }
}