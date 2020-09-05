var React = require("react");

export default class Onequestion extends React.Component {
  render() {
    console.log(this.props)
    let {data} = this.props;

    let question = data[0].question;
    let topic = data[0].topic;

    let answersList = data.map(item=>{
        if(item.answer){
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
    })

   let id = data[0].id;

    return (
      <html>
        <head />
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
        <script src="/questionscript.js"></script>
        </body>
      </html>
      );
  }
}
