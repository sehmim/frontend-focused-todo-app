import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class List extends Component {

state= {
    showDetails : false,
    edit : false
}

list = () => {
    this.props.list
}
deleteItem = (item, index) => {
    this.props.deleteItem(item, index) 
}

showItem = (index) => {
    this.props.showItem(index) 
}
editToggle = () => {
    this.setState(prevState => ({
        edit: !prevState.edit
      }));
}
edit = (index) => {
    this.props.edit(index) 
}
render() {

    return (
        <ul class="list-group">
        {
            this.props.list.map((item,index) =>{
                return(
                    <div className="container" key={index} >
                        <li className="list-group-item">
                            <span className="container"> <h3> {item.title} </h3></span>
                            <div>
                                <Button  onClick= { () => { this.deleteItem(item.title, index) } } variant="contained" color="secondary" className="box">
                                    <i class="material-icons">clear</i>  
                                </Button>

                                <Button onClick= { () => { this.showItem(index) }} variant="contained" color="primary" className="">
                                    <i class="material-icons">keyboard_arrow_down</i>
                                </Button>
                                {
                                    this.state.edit ? 
                                    <div>
                                        <textarea placeholder={ item.details }></textarea> <br/>
                                        <button onClick= { () => { this.edit(index) }} > Update </button>        
                                        <button onClick= { this.editToggle } > Back </button>        
                                    </div>
                                    :
                                    (item.show) ? 
                                    <div>
                                        <p className="well">{item.details}</p>
                                        {/* <button onClick= { () => { this.editToggle(index) } } > Edit </button> */}
                                    </div> : null
                                }
                            </div>
                        </li> 
                    </div>
                )
            })
    
        }
        </ul>)

  }
}

export default List;
