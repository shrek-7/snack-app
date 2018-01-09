import React, {Component} from 'react';
import './item-tile.css';

export default class ItemTile extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextProps){
        this.props=nextProps;
    }
    render(){
        return(
        <div className="tile">
            <div className="tile__image">
                <img className="" src={this.props.src} alt=""/>
                <div className="tile__image--cover"></div>
            </div>
            <div className="tile__heading">
               <div>{this.props.name}</div>
               <div>
                    <button>upvote</button>
               </div>
            </div>
            <div className="tile__description">
                <i className="material-icons favorite">thumb_up</i>
                <div className="tile__element">103</div>
            </div>
        </div>
        );
    }
}

