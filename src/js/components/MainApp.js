import React from "react";
import HeaderApp from "./HeaderApp";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";

export default
class MainApp extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }

    addOperation = (id, operation) => {
        let temp = [...this.state.tasks]

        temp.forEach(task => {
            if(task.id === id) {
                task.operations.push(operation)
            }
        })

        this.setState({
            tasks: temp
        })

        const url = `http://localhost:3000/tasks/${id}`; 
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(this.state.tasks.find(task => task.id === id))
        })
            .then(resp => resp.json());
    }

    addTask = (task) => {
        let temp = [...this.state.tasks]
        temp.unshift(task)

        this.setState({
            tasks: temp
        })

        const urlTasks = "http://localhost:3000/tasks"; 
        fetch(urlTasks, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
            .then(resp => resp.json())
    }

    componentDidMount() {
        const urlTasks = "http://localhost:3000/tasks"; 
        fetch(urlTasks)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                tasks: [...this.state.tasks, ...data]
            })
        })
    }

    startTimer = (taskId, operationId) => {
        let tempArr = [...this.state.tasks]

        
        tempArr.forEach(task => {
            if(task.id === taskId) {
                task.operations.forEach(operation => {
                    console.log(operation.timeSpent)

                    if(operation.id === operationId) {
                        this.interval = setInterval(() => {
                            console.log(this.state.tasks)
                            operation.timeSpent++
                        }, 1000) 
                    }
                })
            } 
        })

        this.setState({
            tasks: tempArr
        })
    }

    stopTimer = (taskId, operationId) => {
        let tempArr = [...this.state.tasks]
        tempArr.forEach(task => {
            if(task.id === taskId) {
                task.operations.forEach(operation => {
                    if(operation.id===operationId) {
                        clearInterval(this.interval)
                            task.timeSpent = task.operations.reduce((prev,curr) => { 
                            return prev + curr.timeSpent
                        }, 0)
                        
                    }
                })
            } 
        })

        this.setState({
            tasks: tempArr
        })

    }

    finishTask = (id) => {
        let tempArr = [...this.state.tasks]
        tempArr.forEach(task => {
            if(task.id === id) {
                task.status = "closed"
            }
        })

        this.setState({
            tasks: tempArr
        })

        const url = `http://localhost:3000/tasks/${id}`; 
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(this.state.tasks.find(task => task.id === id))
        })
            .then(resp => resp.json());
    }

    render() {
        return(
            <>
            <HeaderApp />
            <div className="container">
                <TaskForm addTasks ={this.addTask}/>
                <Tasks tasks = {this.state.tasks} onFinish={this.finishTask} start={this.startTimer} stop={this.stopTimer} add={this.addOperation}/>
            </div>
            </>
        )
    }
}
