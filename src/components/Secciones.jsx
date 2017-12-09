import React, {Component} from 'react';
import request from 'superagent';

class Secciones extends Component{

    constructor(){
        super();
        this.state = {
            secciones : []
        }
    }

    componentDidMount(){
        request
                .get('http://sw-news-letter.herokuapp.com/section')
                .end((err, res) =>{
                    const secciones = JSON.parse(res.text);
                    this.setState({
                        secciones : secciones
                    });
                });
    }

    render(){
        var secciones = this.state.secciones.map((seccion, i) => {
            return <div>
                <li key={i}>{seccion.name}</li>
                </div>
        });
        return(
            <div>
                {secciones}
            </div>
        )
    }
}

export default Secciones;