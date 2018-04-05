import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



import './add-item.css';

class AddItem extends Component {
  constructor(){
    super();
    this.state = {
        food: {
            name: { value: '', error: ''},
            desc: { value: '', error: ''},
            img: {value: '', error: ''}
        }
      
    }

    this.fetchUser = this.fetchUser.bind(this);
    this.addFood = this.addFood.bind(this);

  }

  componentDidMount(){
    if(this.props.token){
        this.fetchUser();
    }
  }

  handleInputChange(event, myArg) {
    this.setState({[myArg] : {...this.state[myArg],[event.target.name]: { value: event.target.value, error: ''}}});
  }

  handleFileInput(event, myArg) {
    var name = event.target.name;
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
        this.setState({[myArg] : {...this.state[myArg],[name]: { value: e.target.result, error: ''}}});
    };

    reader.readAsDataURL(file);
  }

  //api to get info about the current user
  fetchUser(){
    let token = this.props.token;
    axios.get('/api/user/me', { headers: { "x-auth": token } }).then((defs)=>{
        this.setState({name: defs.data.firstName})
    }).catch((error) => {
        console.log(error);
    });
  }

  //api to add a new food item to database
  addFood(){
    let foodObj = {};
    foodObj.name = this.state.food.name.value;
    foodObj.description = this.state.food.desc.value;
    foodObj.votes = 0;
    foodObj.img = {};
    foodObj.img.data = this.state.food.img.value;

    axios.post('/api/food', foodObj).then((defs) => {
        console.log("success");
    }).catch((error) => {
        console.log(error);
    })
  }



  render() {
    if(this.props.token){
        return(
            <div className="add-food__cont">
                <div className="add-food__input-cont">
                    <div className="add-food__input">
                        <label htmlFor="foodName">Food Name</label>
                        <input
                            type="text"
                            name="name"
                            id="foodName"
                            value={this.state.food.name.value}
                            onChange={(e,i,value) => this.handleInputChange(e,"food")}
                        />
                    </div>
                    <div className="add-food__input">
                        <label htmlFor="foodDesc">Food Description</label>
                        <input
                            type="text"
                            name="desc"
                            id="foodDesc" 
                            value={this.state.food.desc.value}
                            onChange={(e,i,value) => this.handleInputChange(e,"food")}
                        />
                    </div>
                    <div className="add-food__input">
                        <label htmlFor="foodImg">Food Image</label>
                        <input
                            type="file"
                            name="img"
                            id="foodImg"
                            
                            onChange={(e,i,value) => this.handleFileInput(e,"food")}
                        />
                    </div>
                    <button onClick={this.addFood}>save</button>
                </div>
                <div className="add-food__display-cont">
                </div>
            </div>
        )
    }
    else{
        return (
            <div>Sorry you are not an Admin, you are not allowed to add items</div>
        );
    }
  }
}

function mapStateToProps(state) {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps, { })(AddItem);

