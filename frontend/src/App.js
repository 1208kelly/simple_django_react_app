import React from 'react';
import './App.css';


class App extends React.component {
    render(){
        return(
            <div className="container">
                <div id="task-container">
                    <div id="form-wrapper">
                        <form id="form">
                            <div className="flex-wrapper">
                                <div style={{flex: 6}}>
                                    <input className="form-control" id="title" type="text" name="title" placeholder="Add Task"></input>
                                </div>
                            </div>

                            <div style={{flex: 1}}>
                                <input id="submit" className="btn btn-warning" type="submit" name="Add"></input>
                            </div>
                        </form>
                    </div>
                    <div id="list-wrapper">
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
