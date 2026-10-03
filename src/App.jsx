import { Component } from 'react'
import { TaskList } from './components/TaskList'
import { FormTask } from './components/FormTask'
export class App extends Component {
  state = {
    tasks: [
      { id: 1, text: 'do homework' },
      { id: 2, text: "wash the dishes" },
      { id: 3, text: "make a bed" }
    ]
  }
  handleDelete = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }))
  }
  handleTask = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text.trim()) {
      const task = { id: crypto.randomUUID, text }
      this.setState(prevState => ({
        tasks: [...prevState.tasks, task]
      }))
      form.reset();
    }
    else {
      alert('Введіть таску нормально')
      form.reset()
    }
  }
  render() {
    const { tasks } = this.state;
    return (
      <>
        <FormTask handleTask={this.handleTask} />
        <TaskList tasks={tasks} onDelete={this.handleDelete}/>
      </>
    )
  }
}

export default App
