import React, { Component } from 'react';
let getId = '';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: " ",
            dataItems: []
        }

    }
    onInputChange(evt) {
        this.setState({
            item: evt.target.value
        });
    }
    addItem() {
        let item = this.state.item;
        let dataItems = this.state.dataItems;
        dataItems.push(item)
        this.setState({
            dataItems: dataItems,
            item: ''
        })
        console.log(dataItems)
    }
    delete(evt) {
        var id = evt.target.id;
        let dataItems = this.state.dataItems;
        dataItems.splice(id, 1);
        this.setState({
            dataItems
        })
    }
    edit(evt) {
        getId = evt.target.id
        this.setState({
            item: this.state.dataItems[evt.target.id]
        })
        document.getElementById("add").style.display = "none";
        document.getElementById("update").style.display = "block";
        evt.target.parentNode.style.borderBottom = "2px solid red";
        evt.target.style.display = "none"
    }
    update(evt) {
        let updateValue = this.state.dataItems;
        updateValue[getId] = this.state.item
        this.setState({
            dataItems: updateValue,
            item: ''
        })
        document.getElementById("add").style.display = "block";
        document.getElementById("update").style.display = "none";
        let updateDate = document.getElementsByClassName("edit")
        for (let i = 0; i < updateDate.length; i++) {
            updateDate[i].style.display = "block";
            updateDate[i].parentNode.style.borderBottom = "none"
        }
    }
    render() {
        const { item, dataItems } = this.state;
        let itemList = dataItems.map((item, index) =>
            <li key={index} >
                {item}
                <span id={index} onClick={(evt) => this.delete(evt)} className="btn btn-danger">
                    X
                </span>
                <span id={index} onClick={(evt) => this.edit(evt)} className="edit btn btn-success">
                    Edit
                </span>
            </li>)
        return (
            <div>
                <div className="header">React Todo app</div>
                <div className="body">
                    <ul>{itemList}</ul>
                </div>
                <div className="Footer">
                    <input type='text' value={item} onChange={(evt) => this.onInputChange(evt)} />
                    <button id="add" onClick={(evt) => this.addItem(evt)}>+</button>
                    <button id="update" onClick={(evt) => this.update(evt)}>Update</button>
                </div>
            </div>
        );
    }
}

export default Todo;