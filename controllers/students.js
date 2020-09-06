module.exports = (db) => {

let studentDashboard = (request,response) => {
        let {username,userId,type,logIn} = request.cookies;
        db.students.getStudentDashboard((err,result)=>{
            if(logIn){
            response.render('students/dashboard',{username, userId, data:result.rows})
        } else {
            response.redirect('/accounts/login')
        }
        })
    }



    return{
        studentDashboard
    }
}