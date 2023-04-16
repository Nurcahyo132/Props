import React, {Component} from 'react';
import './App.css'

class Props extends React.Component {
    render(){
        return(
            <p>Nama Saya Adalah {this.props.namaLengkap}</p>
        )
            
        }
    }

export default Props