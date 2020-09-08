module.exports = (db) => {


let answerForm = (request,response) => {
    let {id} = request.params;
    let {logIn} = request.cookies;
    db.answers.getAnswerForm(id,(err,result)=>{
        if(logIn){
            response.render('answers/new',{id,data:result.rows})
        } else {
            response.redirect('/accounts/login')
        }
        })
}

let answerAdded = (request, response) => {
    let {username,userId} = request.cookies;
    let {id,answer,markdown} = request.body;
    answer = answer.replace(/[\"\'\`]/g, "");
    db.answers.getAnswerAdded(id,username,answer,userId,markdown,(err,result)=>{
            response.redirect(`/questions/${id}`)
        })
}

let editAnswerForm = (request,response) => {
        let {id} = request.params;
        let {logIn,type} = request.cookies;
        db.answers.getEditAnswerForm(id,(err,result)=>{
            if(err){
                console.log(err)
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                if(logIn){
                   response.render('answers/editanswer',{type,data:result.rows[0]})
               } else {
                response.redirect('/accounts/login')
               }

            }
        })
    }

let editAnswer = (request,response) => {
    let {answer_id,question_id,answer,verified} = request.body;
    db.answers.getEditAnswer(answer,answer_id,verified,(err,result)=>{
        if (err){
            response.status(500).send("oops error in updating question!")}
             else {
                response.redirect(`/questions/${question_id}`)
            }
    })
}


let deleteAnswerForm = (request,response) => {
        let {id} = request.params;
        let {logIn} = request.cookies;
        db.answers.getDeleteAnswerForm(id,(err,result)=>{
            if(err){
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                if(logIn){
                    response.render('answers/deleteanswer',result.rows[0])
                } else {
                    response.redirect('/accounts/login')
                }

            }
        })
    }

let deleteAnswer = (request,response) => {
    let {answer_id,question_id} = request.body;
    db.answers.getDeleteAnswer(answer_id,(err,result)=>{
        if (err){
            response.status(500).send("oops error in deleting answer!")}
             else {
                response.redirect(`/questions/${question_id}`)
            }
    })
}


let voteAnswerForm = (request,response) => {
    let {id} = request.params;
    let {logIn} = request.cookies;
    db.answers.getVoteAnswerForm(id,(err,result)=>{
     if(err){
         console.log(err)
         response.status(500).send("Oops we did not find the answer you were looking for")
            } else {
                if(logIn){
                   response.render('answers/voteanswer',{data:result.rows[0]})
               } else {
                response.redirect('/accounts/login')
               }

            }
        })

}

let voteAnswer = (request,response) => {
    let {id,vote,question_id} = request.body;
    db.answers.getVoteAnswer(id,vote,(err,result)=>{
         if (err){
            response.status(500).send("oops error in deleting answer!")}
             else {
                response.redirect(`/questions/${question_id}`)
            }
    })
}


    return{
        answerForm,
        answerAdded,
        editAnswer,
        editAnswerForm,
        deleteAnswer,
        deleteAnswerForm,
        voteAnswerForm,
        voteAnswer
    }
}