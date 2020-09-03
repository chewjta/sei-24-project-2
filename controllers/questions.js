module.exports = (db) => {

    let dashboard = (request,response) => {
        db.questions.getDashboard((err,result)=>{
            console.log(result)
            response.render('questions/dashboard',{data:result.rows})
        })
    }

    return{
        dashboard
    }
}