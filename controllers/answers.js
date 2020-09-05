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
    db.answers.getAnswerAdded(id,username,answer,userId,(err,result)=>{
            response.redirect(`/questions/${id}`)
        })
}


    return{
        answerForm,
        answerAdded
    }
}