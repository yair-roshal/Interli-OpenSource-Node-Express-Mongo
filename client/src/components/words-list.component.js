import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Word = props => (

  <td className="cell" >

    <div className="edit">
      <Link to={"/edit/" + props.word._id}>edit</Link> | <a href="#" onClick={() => {props.deleteWord(props.word._id)}}>delete</a>
    </div>

    <div className="description">{props.word.description}</div>
    <div className="translate">{props.word.translation}</div>

  </td>

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
        this.setState({words: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteWord(id) {
    axios.delete('http://localhost:5000/words/' + id)
      .then(response => {console.log(response.data)});

    this.setState({
      words: this.state.words.filter(el => el._id !== id)
    })
  }

  wordList() {
    return this.state.words.map(currentword => {
      return <Word word={currentword} deleteWord={this.deleteWord} key={currentword._id} />;
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
        </table>

        <table className="table_text" align="right" border="1" cellPadding="7" cellSpacing="5">
          <tbody>
            <tr className="row">
              {this.wordList()}
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}