import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                todoList:[],
                activeItem:{
                    id: null,
                    title: '',
                    completed: false,
                },
                editing: false,
            }
            this.fetchTasks = this.fetchTasks.bind(this)
    };

    componentWillMount(){
        this.fetchTasks()
    }

    fetchTasks(){
        console.log('Fetching...')

        fetch('https://8000-b70d03e8-2862-46b8-ae0c-74f87d8dec7e.ws-eu01.gitpod.io/api/task-list/')
        .then(response => response.json())
        .then(data =>
            this.setState({
                todoList: data
            })
            )
    }


    render(){
        var tasks = this.state.todoList
        return(
            <div className="container">
                <div id="task-container">
                    <div id="form-wrapper">
                        <form id="form">
                            <div className="flex-wrapper">
                                <div style={{flex: 6}}>
                                    <input className="form-control" id="title" type="text" name="title" placeholder="Add task.."></input>
                                </div>

                                <div style={{flex: 1}}>
                                    <input id="submit" className="btn btn-warning" type="submit" name="Add"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="list-wrapper">
                        {tasks.map(function(task, index){
                            return(
                                <div key={index} className="task-wrapper flex-wrapper">
                                    <div style={{flex: 7}}>
                                        <span>{task.title}</span>
                                    </div>
                                    <div style={{flex: 1}}>
                                        <button className="btn btn-sm btn-outline-info">Edit</button>
                                    </div>
                                    <div style={{flex: 1}}>
                                        <button className="btn btn-sm btn-outline-dark delete">-</button>
                                    </div>
                                </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
