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
            if(err){
                console.log(err)
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                console.log(result.rows)
                response.render('questions/onequestion',{data:result.rows})
            }
        })
    }

    let editQuestionForm = (request,response) => {
        let {id} = request.params;
        console.log(request.params)
        db.questions.getEditQuestionForm(id,(err,result)=>{
            if(err){
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                response.render('questions/editquestion',result.rows[0])
            }
        })
    }

let editQuestion = (request,response) => {
    let {question,topic,question_id} = request.body;
    db.questions.getEditQuestion(question,topic,question_id,(err,result)=>{
        if (err){
            response.status(500).send("oops error in updating question!")}
             else {
                response.redirect(`/questions/${question_id}`)
            }
    })
}


let deleteQuestionForm = (request,response) => {
        let {id} = request.params;
        db.questions.getDeleteQuestionForm(id,(err,result)=>{
            if(err){
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                response.render('questions/deletequestion',result.rows[0])
            }
        })
    }

let deleteQuestion = (request,response) => {
    let {question_id} = request.body;
    db.questions.getDeleteQuestion(question_id,(err,result)=>{
        if (err){
            console.log(err)
            response.status(500).send("oops error in deleting question!")}
             else {
                response.redirect(`/questions`)
            }
    })
}

let newQuestionForm = (request,response) => {
    response.render('questions/new')
}

let addNewQuestion = (request,response) => {
    let {userId} = request.cookies;
    let {question,topic,markdown} = request.body;
    question = question.replace(/[\"\'\`]/g, "");
    db.questions.getAddNewQuestion(userId,question,topic,markdown,(err,result)=>{
        if(err){
            console.log(err)
            response.status(500).send("error in creating question!")
        } else {
            response.redirect(`/questions`)
        }
    })
}




    return{
        dashboard,
        allQuestions,
        individualQuestion,
        editQuestionForm,
        editQuestion,
        deleteQuestionForm,
        deleteQuestion,
        newQuestionForm,
        addNewQuestion
    }
}