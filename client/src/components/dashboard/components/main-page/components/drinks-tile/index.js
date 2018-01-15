import React, {Component} from 'react';
import './drinks-tile.css';

export default class DrinksTile extends Component{
    constructor(props){
        super(props)
        this.base10_to_base64 = this._arrayBufferToBase64.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.props=nextProps;
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
            <div className="tile-wrap">
                <div>
                    <img className="tile-image" src={imgSrc} alt=""/>
                </div>
                <div className="tile-description">{this.props.data.name}</div>
                <div className="tile-button">
                    <button>
                        upvote
                    </button>
                    <div>
                    <i className="material-icons up-arrow">keyboard_arrow_up</i>
                    <span>{this.props.data.vot}</span>
                    </div>               
                </div>
            </div>
        );
    }
}