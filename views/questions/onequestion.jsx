var React = require("react");

export default class Onequestion extends React.Component {
  render() {
    console.log(this.props)
    let {data} = this.props;

    let question = data[0].question;
    let topic = data[0].topic;

    let answersList = data.map(item=>{
        return <p>{item.answer}<form method ="get" action= {`/questions/delete/${item.id}`}>
          <input type="submit" value="delete"/>
        </form><form method ="get" action= {`/questions/delete/${item.id}`}>
          <input type="submit" value="delete"/>
        </form></p>})

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
             <div id="answerslist" style={{display:'none'}}>{answersList}</div>
        </div><br />
        <script src="/questionscript.js"></script>
        </body>
      </html>
      );
  }
}
