var React = require("react");
var marked = require('marked')
export default class Studentquestion extends React.Component {
  render() {
    let {data} = this.props;

    let question = data[0].question;
    let topic = data[0].topic;

    let answersList = data.map(item=>{
        if(item.answer){
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

        }
    })

   let id = data[0].id;

    return (
      <html>
        <body>
         <div>Question: {question}
<form method ="get" action= {`/questions/edit/${id}`}>
          <input type="submit" value="edit"/>
        </form>
        <form method ="get" action= {`/questions/delete/${id}`}>
          <input type="submit" value="delete"/>
        </form>
         </div><br />
        <div>Topic: {topic}</div><br />
         <div>
             Answers:
             <br />
             <br />
             <button id="revealans">Reveal</button>
             <div id="answerslist" style={{display:'none',overflowWrap:'break-word',width:'300px'}}>{answersList}
             <form method ="get" action= {`/answers/add/${id}`}>
          <input type="submit" value="Add an answer"/>
        </form>
             </div>
        </div><br />
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
