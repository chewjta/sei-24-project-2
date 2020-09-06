var React = require("react");
var marked = require('marked')
export default class Onequestion extends React.Component {
  render() {
    let {data,userId} = this.props;

    let question = data[0];
    let topic = data[0].topic;
       let id = data[0].id;

const render = (obj) => {
    if(obj.questioner == userId){
        return <div>
            {obj.question}
          <form method ="get" action= {`/questions/edit/${id}`}>
          <input type="submit" value="edit"/>
        </form>
        <form method ="get" action= {`/questions/delete/${id}`}>
          <input type="submit" value="delete"/>
        </form>
        </div>
    } else {
        return <div>{obj.question}</div>
    }
}

question = render(question)

    let answersList = data.map(item=>{
        if(item.answer){
            if(item.answerer == userId){
                if(item.markdown){
                if(item.verified){
                item.answer=marked(item.answer)
            return <div>
             <div style={{color:'green'}}dangerouslySetInnerHTML={{__html: item.answer}}></div>
          <form method ="get" action= {`/answers/edit/${item.answersid}`}>
          <input type="submit" value="edit"/>
        </form>
        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
          <input type="submit" value="delete"/>
        </form>
         </div>
     } item.answer=marked(item.answer);
     return <div>
             <div dangerouslySetInnerHTML={{__html: item.answer}}></div>
          <form method ="get" action= {`/answers/edit/${item.answersid}`}>
          <input type="submit" value="edit"/>
        </form>
        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
          <input type="submit" value="delete"/>
        </form>
         </div>
     } else {
        if(item.verified){
            return <div>
                <p style={{color:'green'}}>{item.answer}</p>
            <form method ="get" action= {`/answers/edit/${item.answersid}`}>
          <input type="submit" value="edit"/>
        </form>
        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
          <input type="submit" value="delete"/>
        </form>
        </div>
        }
        return <div>
                {item.answer}
            <form method ="get" action= {`/answers/edit/${item.answersid}`}>
          <input type="submit" value="edit"/>
        </form>
        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
          <input type="submit" value="delete"/>
        </form>
        </div>
     }
 } else {
    if(item.markdown){
                if(item.verified){
                item.answer=marked(item.answer)
            return <div>
             <div style={{color:'green'}}dangerouslySetInnerHTML={{__html: item.answer}}></div>
         </div>
     } item.answer=marked(item.answer);
     return <div>
             <div dangerouslySetInnerHTML={{__html: item.answer}}></div>
         </div>
     } else {
        if(item.verified){
            return <div>
                <p style={{color:'green'}}>{item.answer}</p>
        </div>
        }
        return <div>
                {item.answer}
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
         <div>Question: {question}
         </div><br />
        <div>Topic: {topic}</div><br />
         <div>
             Answers:
             <br />
             <br />
             <button id="revealans">Reveal</button>
             <div id="answerslist" style={{display:'none',overflowWrap:'break-word',width:'300px'}}>{answersList}
             </div>
        </div><br />
        <form method ="get" action= {`/answers/add/${id}`}>
          <input type="submit" value="Add an answer"/>
        </form>
        <br />
        <div>
            <form method ="get" action= {`/questions`}>
          <input type="submit" value="Back to questions page"/>
        </form>
        </div>
        <script src="/questionscript.js"></script>
        </body>
      </html>
      );
  }
}
