module.exports = (dbPoolInstance) => {
let getDashboard = (callback) => {
    let query = `SELECT * FROM questions LEFT JOIN answers ON questions.id = answers.question_id LEFT JOIN accounts ON answers.user_id = accounts.id`
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}
    return {
        getDashboard
    }
}