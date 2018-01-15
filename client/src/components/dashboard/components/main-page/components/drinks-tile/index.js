import React, {Component} from 'react';
import './drinks-tile.css';

export default class DrinksTile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="tile-wrap">
                <div>
                    <img className="tile-image" src={this.props.src} alt=""/>
                </div>
                <div className="tile-description">{this.props.title}</div>
                <div className="tile-button">
                    <button>
                        upvote
                    </button>
                </div>
            </div>
        );
    }
}