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
            <div className="tile__description">
                <div className="tile__element">one</div>
                <div className="vl"></div>
                <div className="tile__element">two</div>
                <div className="vl"></div>
                <div className="tile__element">three</div>
            </div>
        </div>
        );
    }
}

