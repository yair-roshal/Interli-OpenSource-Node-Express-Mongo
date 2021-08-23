import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const Exercise = props => (
 
  <td height="60" valign="middle" align="center">

    <div className="edit">
    <Link to={"/edit/" + props.exercise._id}>edit</Link>
    </div>

  <div className="heb">{props.exercise.description}</div>
  <div className="translate">{props.exercise.translation}</div>
 
  </td>
 
  // <span>

  //   <a>{props.exercise.description}</a>
  //   <a>{props.exercise.translation}</a>
  //   <Link to={"/edit/" + props.exercise._id}>edit</Link>
  //   <a></a>

  // </span>
 


  // <tr>
  //   <td>{props.exercise.username}</td>
  //   <td>{props.exercise.description}</td>
  //   <td>{props.exercise.translation}</td>
  //   <td>{props.exercise.date.substring(0,10)}</td>
  //   <td>
  //     <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
  //   </td>
  // </tr>


)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
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



        <a>
          <table className="tablefloat" align="right"  border="1" cellPadding="7" cellSpacing="5">
            <tbody>
              <tr>
                {this.exerciseList()}
              </tr>
            </tbody>
          </table>
        </a>

 
      </div>
    )
  }
}