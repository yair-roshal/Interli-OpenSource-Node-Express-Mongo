import React, { Component } from 'react';
import axios from 'axios'; 

 
 
export default class CreateWord extends Component {

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeOriginal = this.onChangeOriginal.bind(this);
    this.onChangeTranslation = this.onChangeTranslation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ' ',
      description: ' ',
      text: ' ',

      translation: ' ',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
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

    axios.post('http://localhost:5000/words/add', word)
    // axios.post('http://localhost:5000/texts/add', word)
      .then(res => console.log(res.data));

    // window.location = '/';
  }




//   writeMassive() {

//   const elements = ['Fire', 'Air', 'Water'];

//   const doubled = elements.map( (element) =>
//   {
//     axios.post('http://localhost:5000/words/add', word)
//     .then(res => console.log(res.data));   
//   }
//    );

// }



showFile =    (e) => {
  e.preventDefault()
  const reader = new FileReader()

  let arrWords = new Array();


  reader.onload =    (e) => { 
    const text = (e.target.result) 
    const elements = text.split(" ");
  
          const doubled = elements.map( (element) =>
 
          {
            const word = {
              // id: elements.indexOf(element),
              username: "yair",
              description: element,
              translation: this.state.translation,
              date: this.state.date
            }

            arrWords.push(word);

            console.log(`word---`, word)
            console.log(`arrWords---`, arrWords)
 
            // axios.post('http://localhost:5000/words/addArr', word)
            //   .then(res => console.log(res.data));

          }
           );
   
           axios.post('http://localhost:5000/words/addArr', arrWords)
           .then(res => console.log(res.data));

  // window.location = '/';
 
  };
  reader.readAsText(e.target.files[0])
  }

 

// showFile = async (e) => {
//   e.preventDefault()
//   const reader = new FileReader()

//   reader.onload = async (e) => { 
//     const text = (e.target.result)
       
//     const word = {
//             username: this.state.username, 
//             // description: this.state.text,
//             description: text,
//             translation: this.state.translation,
//             date: this.state.date
//             }
        
//           console.log("word2222222----",word );
        
//           axios.post('http://localhost:5000/words/add', word)
//             .then(res => console.log(res.data));
//   // window.location = '/';
 
//   };
//   reader.readAsText(e.target.files[0])
//   }




  render() {

 

    return (
    <div>


 
      <h3>Create New Word</h3>



      <form onSubmit={this.onSubmit}>

      <label>Username: </label>
        <div className="form-group"> 
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

        <label>Original: </label>
        <div className="form-group"> 
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeOriginal}
              />
        </div>


        <label>Translate: </label>
        <div className="form-group">
          <input 
              type="text" 
              className="form-control"
              value={this.state.translation}
              onChange={this.onChangeTranslation}
              />
        </div>
 
        <div className="form-group">
          <input type="submit" value="Create" className="btn btn-primary" />
        </div>

      </form>




      <input type="file" onChange={(e) => this.showFile(e)} />

    </div>
    )
  }
}