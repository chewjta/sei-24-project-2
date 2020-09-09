var React = require("react");
var marked = require('marked')

export default class Onequestion extends React.Component {
  render() {
    let {data,userId,type} = this.props;
    console.log(data)
    let question = data[0];
    let topic = data[0].topic;
       let id = data[0].id;

const render = (obj) => {
    if(obj.qnmarkdown){
        obj.question = marked(obj.question);
         if(obj.questioner == userId){
        return <div class="card text-center">
  <h5 class="card-header">Question</h5>
  <div class="card-body">
    <div dangerouslySetInnerHTML={{__html: obj.question}}></div>
    <p class="card-text">Topic: {topic}</p>
    <footer class="blockquote-footer">Current votes: {obj.questionvote}</footer>
    <div class="row d-flex justify-content-center align-items-center" >
          <form method ="get" action= {`/questions/vote/${id}`}>
          <input type="submit" value="vote" className="btn btn-primary" />
          </form>
    <form method ="get" action= {`/questions/edit/${id}`} style={{margin:'0 20px'}}>
          <input type="submit" value="edit" className="btn btn-info" />
        </form>
        <form method ="get" action= {`/questions/delete/${id}`}>
          <input type="submit" value="delete" className="btn btn-danger"/>
        </form>
        </div>
  </div>
</div>
    } else {
        return <div class="card text-center">
  <h5 class="card-header">Question</h5>
  <div class="card-body">
    <div dangerouslySetInnerHTML={{__html: obj.question}}></div>
    <p class="card-text">Topic: {topic}</p>
    <footer class="blockquote-footer">Current votes: {obj.questionvote}</footer>
    <div class="row d-flex justify-content-center align-items-center" >
          <form method ="get" action= {`/questions/vote/${id}`}>
          <input type="submit" value="vote" className="btn btn-primary" />
          </form>
          </div>
  </div>
</div>
    }
    } else {
    if(obj.questioner == userId){
        return <div class="card text-center">
  <h5 class="card-header">Question</h5>
  <div class="card-body">
    <h5 class="card-title">{obj.question}</h5>
    <p class="card-text">Topic: {topic}</p>
    <footer class="blockquote-footer">Current votes: {obj.questionvote}</footer>
    <div class="row d-flex justify-content-center align-items-center" >
    <form method ="get" action= {`/questions/vote/${id}`}>
          <input type="submit" value="vote" className="btn btn-primary" />
          </form>
    <form method ="get" action= {`/questions/edit/${id}`} style={{margin:'0 20px'}}>
          <input type="submit" value="edit" className="btn btn-info" />
        </form>
        <form method ="get" action= {`/questions/delete/${id}`}>
          <input type="submit" value="delete" className="btn btn-danger"/>
        </form>
        </div>
  </div>
</div>
    } else {
        return <div class="card text-center">
  <h5 class="card-header">Question</h5>
  <div class="card-body">
    <h5 class="card-title">{obj.question}</h5>
    <p class="card-text">Topic: {topic}</p>
    <footer class="blockquote-footer">Current votes: {obj.questionvote}</footer>
        <div class="row d-flex justify-content-center align-items-center" >
          <form method ="get" action= {`/questions/vote/${id}`}>
          <input type="submit" value="vote" className="btn btn-primary" />
          </form>
          </div>
  </div>
</div>
    }
}
}



question = render(question)

    let answersList = data.map(item=>{
        if(item.answer){
            if(item.answerer == userId || type == 'teacher'){
                if(item.markdown){
                if(item.verified){
                item.answer=marked(item.answer)
            return <div class="card text-center">
                  <div class="card-header">
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div style={{color:'#0FF900',border:'1px solid #0FF900'}}dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                    <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                    <form method ="get" action= {`/answers/edit/${item.answersid}`} style={{margin:'0 20px'}}>
                          <input type="submit" value="edit" className="btn btn-info" />
                        </form>
                        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
                          <input type="submit" value="delete" className="btn btn-danger"/>
                        </form>
                        </div>
                  </div>
                </div>
     } item.answer=marked(item.answer);
     return <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                     <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                    <form method ="get" action= {`/answers/edit/${item.answersid}`} style={{margin:'0 20px'}}>
                          <input type="submit" value="edit" className="btn btn-info" />
                        </form>
                        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
                          <input type="submit" value="delete" className="btn btn-danger"/>
                        </form>
                        </div>
                  </div>
                </div>
     } else {
        if(item.verified){
            return <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div style={{color:'#0FF900',border:'1px solid #0FF900'}}> {item.answer}</div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                        <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                    <form method ="get" action= {`/answers/edit/${item.answersid}`} style={{margin:'0 20px'}}>
                          <input type="submit" value="edit" className="btn btn-info" />
                        </form>
                        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
                          <input type="submit" value="delete" className="btn btn-danger"/>
                        </form>
                        </div>
                  </div>
                </div>
        }
        return <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div> {item.answer}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                    <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                    <form method ="get" action= {`/answers/edit/${item.answersid}`} style={{margin:'0 20px'}}>
                          <input type="submit" value="edit" className="btn btn-info" />
                        </form>
                        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
                          <input type="submit" value="delete" className="btn btn-danger"/>
                        </form>
                        </div>
                  </div>
                </div>
     }
 } else {
    if(item.markdown){
                if(item.verified){
                item.answer=marked(item.answer)
            return <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div style={{color:'#0FF900',border:'1px solid #0FF900'}} dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                    <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                        </div>
                  </div>
                </div>
     } item.answer=marked(item.answer);
     return <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                    <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                        </div>
                  </div>
                </div>
     } else {
        if(item.verified){
            return <div>
                <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div style={{color:'#0FF900',border:'1px solid #0FF900'}}> {item.answer}</div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                    <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                        </div>
                  </div>
                </div>
        </div>
        }
        return <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div> {item.answer}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                    <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                        </div>
                  </div>
                </div>
     }
 }


        }
    })



    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
        {question}

<div class="card text-center">
  <div class="card-body">
    <button id="revealans" class="btn btn-warning">Reveal Answer</button>
             <div id="answerslist" style={{display:'none'}}>{answersList}
        </div>
  </div>
</div>


        <div class="card text-center">
  <div class="card-body">
        <form method ="get" action= {`/answers/add/${id}`}>
          <input type="submit" value="Add an answer" class="btn btn-primary"/>
        </form>
        <br />
            <form method ="get" action= {`/questions`}>
          <input type="submit" value="Back to questions page" class="btn btn-secondary"/>
        </form>
          </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
        <script src="/questionscript.js"></script>
        </body>
      </html>
      );
  }
}
