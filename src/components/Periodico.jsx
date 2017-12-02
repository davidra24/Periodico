import React, {Component} from 'react';
import request from 'superagent';

class Periodico extends Component{

    constructor(){
        super();
        this.state = {
            categorias : []
        }
    }

    componentDidMount(){
        request
                .get('http://cocomquickeat.herokuapp.com/obtenercategoria')
                .end((err, res) =>{
                    const categorias = JSON.parse(res.text).Categorias;
                    this.setState({
                        categorias : categorias
                    });
                });
    }

    render(){
        var categorias = this.state.categorias.map((categoria, i) => {
            return <div>
                <li key={i}>Nombre categoria: {categoria.nombre}</li>
                </div>
        });
        return(
            <div>
                <h1> Hola Mundo </h1>
                <ul>
                    {categorias}
                </ul>
            </div>
        )
    }
}

export default Periodico;