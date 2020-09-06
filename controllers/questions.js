module.exports = (db) => {

    let dashboard = (request,response) => {
        let user = request.cookies.username;
        db.questions.getDashboard(user,(err,result)=>{
            console.log(result)
            if(request.cookies.type == 'teacher' && request.cookies.logIn){
            response.render('questions/dashboard',{user,data:result.rows})
        } else if (request.cookies.type == 'student' && request.cookies.logIn){
            response.redirect('/students/dashboard')
        } else {
            response.redirect('/accounts/login')
        }
        })
    }


    let allQuestions = (request,response) => {
        let {logIn} = request.cookies;
        db.questions.getAllQuestions((err,result)=>{
            if(logIn){
                response.render('questions/allquestions',{data:result.rows})
            } else{
                response.redirect('/accounts/login')
            }

        })
    }

    let individualQuestion = (request,response) => {
        let {id} = request.params;
        let {userId,logIn} = request.cookies;
        db.questions.getIndividualQuestion(id,(err,result)=>{
            if(err){
                console.log(err)
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                if(logIn){
                    response.render('questions/onequestion',{userId,data:result.rows})
                } else {
                    response.redirect('/accounts/login')
                }
            }
        })
    }

    let editQuestionForm = (request,response) => {
        let {id} = request.params;
        let {logIn} = request.cookies;
        console.log(request.params)
        db.questions.getEditQuestionForm(id,(err,result)=>{
            if(err){
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                if(logIn){
                    response.render('questions/editquestion',result.rows[0])
                } else {
                    response.redirect('/accounts/login')
                }

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
        let {logIn} = request.cookies;
        db.questions.getDeleteQuestionForm(id,(err,result)=>{
            if(err){
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                if(logIn){
                    response.render('questions/deletequestion',result.rows[0])
                } else {
                    response.redirect('/accounts/login')
                }

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
    let {logIn} = request.cookies;
    if(logIn){
    response.render('questions/new')}
    else {
        response.redirect('/accounts/login')
    }
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