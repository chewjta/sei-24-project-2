module.exports = (db) => {


let answerForm = (request,response) => {
    let {id} = request.params;
    db.answers.getAnswerForm(id,(err,result)=>{
            response.render('answers/new',{id,data:result.rows})
        })
}

let answerAdded = (request, response) => {
    let {username,userId} = request.cookies;
    let {id,answer} = request.body;
    answer = answer.replace(/[\"\'\`]/g, "");
    db.answers.getAnswerAdded(id,username,answer,userId,(err,result)=>{
            response.redirect(`/questions/${id}`)
        })
}

let editAnswerForm = (request,response) => {
        let {id} = request.params;
        db.answers.getEditAnswerForm(id,(err,result)=>{
            if(err){
                console.log(err)
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                response.render('answers/editanswer',result.rows[0])
            }
        })
    }

let editAnswer = (request,response) => {
    let {answer_id,question_id,answer} = request.body;
    db.answers.getEditAnswer(answer,answer_id,(err,result)=>{
        if (err){
            response.status(500).send("oops error in updating question!")}
             else {
                response.redirect(`/questions/${question_id}`)
            }
    })
}


let deleteAnswerForm = (request,response) => {
        let {id} = request.params;
        db.answers.getDeleteAnswerForm(id,(err,result)=>{
            if(err){
                response.status(500).send("Oops we did not find the question you were looking for")
            } else {
                response.render('answers/deleteanswer',result.rows[0])
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


    return{
        answerForm,
        answerAdded,
        editAnswer,
        editAnswerForm,
        deleteAnswer,
        deleteAnswerForm
    }
}