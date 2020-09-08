module.exports = (db) => {

let studentDashboard = (request,response) => {
        let {username,userId,type,logIn} = request.cookies;
        db.students.getStudentDashboard((err,result)=>{
            if(err){console.log(err)}else {
            if(logIn && type =='student'){
            response.render('students/dashboard',{username, userId, data:result.rows})
        } else {
            response.redirect('/accounts/login')
        }
    }
        })

    }



    return{
        studentDashboard
    }
}