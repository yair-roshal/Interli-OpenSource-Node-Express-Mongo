import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const Word = props => (
 
  <td className="cell" >

    <div className="edit">
      {/* <Link to={"/edit/" + props.word._id}>edit</Link> */}
          <Link to={"/edit/"+props.word._id}>edit</Link> | <a href="#" onClick={() => { props.deleteWord(props.word._id) }}>delete</a>


    </div>

    <div className="description">{props.word.description}</div>
    <div className="translate">{props.word.translation}</div>

  </td>
 


  // <tr>
  //   <td>{props.word.username}</td>
  //   <td>{props.word.description}</td>
  //   <td>{props.word.translation}</td>
  //   <td>{props.word.date.substring(0,10)}</td>
  //   <td>
  //     <Link to={"/edit/"+props.word._id}>edit</Link> | <a href="#" onClick={() => { props.deleteWord(props.word._id) }}>delete</a>
  //   </td>
  // </tr>


)

export default class WordsList extends Component {
  constructor(props) {
    super(props);

    this.deleteWord = this.deleteWord.bind(this)

    this.state = {words: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/words/')
      .then(response => {
        this.setState({ words: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteWord(id) {
    axios.delete('http://localhost:5000/words/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      words: this.state.words.filter(el => el._id !== id)
    })
  }

  wordList() {
    return this.state.words.map(currentword => {
      return <Word word={currentword} deleteWord={this.deleteWord} key={currentword._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Утренние благославления</h3>

        <table className="table" align="right">
          <thead className="thead-light">
            <tr>
              <th>Позиция</th>
                <th>страница</th>
            </tr>
          </thead>
 
          <tbody>
        </tbody>
 
        </table>


        <div >
        {/* <a href="#"> */}
          {/* <table className="tablefloat" align="right"  border="1" cellPadding="7" cellSpacing="5"> */}
          <table className="table_text" align="right"  border="1" cellPadding="7" cellSpacing="5">
            <tbody>
              <tr className="row">
                {this.wordList()}
              </tr>
            </tbody>
          </table>
        </div>

 
      </div>
    )
  }
}