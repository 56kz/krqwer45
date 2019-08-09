import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      stateForm: ''
    }
  }

  handleLiChange(task){
    if (task.done === true) {
      const newArr = this.state.tasks.map((elem, i) =>
       (task.id -1) === i ? {id: task.id, name: task.name , done: false} : elem
      )
      this.setState({
        tasks: newArr,
      })
    } else {
      const newArr = this.state.tasks.map((elem, i) =>
       (task.id -1) === i ? {id: task.id, name: task.name , done: true} : elem
      )
      this.setState({
        tasks: newArr,
      })
    }
  }

  handleEnter(e){
    e.preventDefault();
    if (this.state.newTask.length === 0) {
      this.setState({
        stateForm: 'error'
      })
    } else {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, {id: this.state.tasks.length + 1 , name: this.state.newTask, done: false}],
        newTask: '',
        stateForm: ''
      }))
    }
  }

  handleChange(e){
    this.setState({
      newTask: e.target.value
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id} className={task.done == true ? 'done' : ''} onClick={this.handleLiChange.bind(this, task)}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.handleEnter.bind(this)}>
            <input className={this.state.stateForm} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.handleChange.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
