import React,{ Component } from "react";
import './index.css'

export default class Item extends Component {

    state = {mouse:false}

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    //调用方加了小括号入参就一定要return写成高阶的形式
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    //删除一个todo得到回调  不用高阶的写法 注意下面的调用
    handleDelete = (id)=>{
        if (window.confirm('确定删除？')){
            this.props.deleteTodo(id)
        }

    }

    render() {
        const {id,name,done} = this.props
        return (
            <li style={{backgroundColor:this.state.mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }
}
