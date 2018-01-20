import React, {Component} from 'react';
import './item-tile.css';

export default class ItemTile extends Component{
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
        <div className="tile">
            <div className="tile__image">
                <img className="" src={imgSrc} alt=""/>
                <div className="tile__image--cover"></div>
            </div>
            <div className="tile__heading">
               <div>{this.props.data.name}</div>
               <div>
                    <button>upvote</button>
               </div>
            </div>
            <div className="tile__description">
                <i className="material-icons favorite">thumb_up</i>
                <div className="tile__element">{this.props.data.votes}</div>
            </div>
        </div>
        );
    }
}

