import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import './item-tile.css';

class ItemTile extends Component{
    constructor(props){
        super(props);

        this.state = {
            "invokeRegister": false
        }

        this.upvoteItem = this.upvoteItem.bind(this);
        this.base10_to_base64 = this._arrayBufferToBase64.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.props=nextProps;
    }

    upvoteItem(){
        if(this.props.token){
            axios.put(
                '/api/food/upvote',
                {
                    id: this.props.data._id
                },
                {
                    headers: { 'x-auth': this.props.token }
                }
            )
            .then(() => {
                this.props.reRenderFoodItems();
            })
            .catch((e) => {
                
            });
        }
        else{
            this.setState({invokeRegister: true});
        }
    }

    _arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }
    render(){
        let imgSrc = null;
        if(this.props.data.img){
            imgSrc = `data:image/jpeg;base64,${this._arrayBufferToBase64(this.props.data.img.data.data)}`
        }
        return(
        <div className="tile">
            <div className={`invoke-register ${this.state.invokeRegister ? "display-block" : "display-none"}`}>
                <div className="invoke-register__text-cont">
                    <Link to={{pathname: '/register'}}>
                        Register
                    </Link>
                </div>
            </div>
            <div className="tile__image">
                <img className="" src={imgSrc} alt=""/>
                <div className="tile__image--cover"></div>
            </div>
            <div className="tile__heading">
               <div>{this.props.data.name}</div>
               {
                   this.props.data._id === this.props.userInfo.upvotedFoodItem ?
                   (
                    <div>
                        <button>upvoted</button>
                    </div>
                   )
                   :
                   (
                    <div onClick={this.upvoteItem}>
                        <button>upvote</button>
                    </div>
                   )
               }
               
            </div>
            <div className="tile__description">
                <i className="material-icons favorite">thumb_up</i>
                <div className="tile__element">{this.props.data.votes}</div>
            </div>
        </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps, { })(ItemTile);


