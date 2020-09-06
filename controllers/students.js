module.exports = (db) => {

let studentDashboard = (request,response) => {
        let {username,userId,type,logIn} = request.cookies;
        db.students.getStudentDashboard((err,result)=>{

            response.render('students/dashboard',{username, userId, data:result.rows})
        })
    }



    return{
        studentDashboard
    }
}