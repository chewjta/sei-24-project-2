module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const accountsControllerCallbacks = require('./controllers/accounts')(allModels);

 const questionsControllerCallbacks = require('./controllers/questions')(allModels);

 const answersControllerCallbacks = require('./controllers/answers')(allModels);


app.get('/', accountsControllerCallbacks.home);
app.get('/accounts/register',accountsControllerCallbacks.registerForm);
app.get('/accounts/login',accountsControllerCallbacks.loginForm);
app.post('/register',accountsControllerCallbacks.register);
app.post('/login',accountsControllerCallbacks.login);
app.get('/questions/delete/:id', questionsControllerCallbacks.deleteQuestionForm);
app.delete('/questions/delete/:id',questionsControllerCallbacks.deleteQuestion)
app.get('/questions/edit/:id', questionsControllerCallbacks.editQuestionForm);
app.put('/questions/edit/:id',questionsControllerCallbacks.editQuestion)
app.get('/questions/:id',questionsControllerCallbacks.individualQuestion)
app.get('/dashboard', questionsControllerCallbacks.dashboard)
app.get('/questions',questionsControllerCallbacks.allQuestions)
app.post('/logout',accountsControllerCallbacks.logout);



// app.post('/login',accountsControllerCallbacks.login);
  // app.get('/', pokemonControllerCallbacks.index);
  // app.get('/students', pokemonControllerCallbacks.students)
  // // do database query and return the results
  //   app.get('/students/new',pokemonControllerCallbacks.newStudent)
  //   app.post('/student', pokemonControllerCallbacks.createStudent)
  // app.get('/students/:id', pokemonControllerCallbacks.individualStudent)




  //app.get('/pokemons/:id', pokemons.getPokemon);
};

