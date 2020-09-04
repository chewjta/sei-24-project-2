module.exports = (db) => {

    let dashboard = (request,response) => {
        let user = request.cookies.username;
        db.questions.getDashboard(user,(err,result)=>{
            console.log(result)
            response.render('questions/dashboard',{user,data:result.rows})
        })
    }


    let allQuestions = (request,response) => {
        db.questions.getAllQuestions((err,result)=>{
            response.render('questions/allquestions',{data:result.rows})
        })
    }

    let individualQuestion = (request,response) => {
        let {id} = request.params;
        db.questions.getIndividualQuestion(id,(err,result)=>{

        })
    }

    return{
        dashboard,
        allQuestions
    }
}