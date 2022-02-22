import React, { Component } from 'react';
import axios from 'axios'; 

export default class EditWord extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeOriginal = this.onChangeOriginal.bind(this);
    this.onChangeTranslation = this.onChangeTranslation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      translation: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/words/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          translation: response.data.translation,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeOriginal(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeTranslation(e) {
    this.setState({
      translation: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const word = {
      username: this.state.username,
      description: this.state.description,
      translation: this.state.translation,
      date: this.state.date
    }

    console.log(word);

    axios.post('http://localhost:5000/words/update/' + this.props.match.params.id, word)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit word</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Original: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeOriginal}
              />
        </div>

        <div className="form-group">
          <label>Translation </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.translation}
              onChange={this.onChangeTranslation}
              />
        </div>
 
        <div className="form-group">
          <input type="submit" value="Edit Word" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}