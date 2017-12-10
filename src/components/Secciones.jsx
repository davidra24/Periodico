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
                .get('https://sw-news-letter.herokuapp.com/section')
                .end((err, res) =>{
                    const secciones = JSON.parse(res.text);
                    this.setState({
                        secciones : secciones
                    });
                });
    }

    render(){
        var secciones = this.state.secciones.map((seccion, i) => {
            return <li className="dropdown" key={i}><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">{seccion.name}</a></li>
        });
        return(
            <div>
                {secciones}
            </div>
        )
    }
}

export default Secciones;