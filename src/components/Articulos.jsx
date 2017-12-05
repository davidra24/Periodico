import React, {Component} from 'react';
import request from 'superagent';

class Articulos extends Component{

    constructor(){
        super();
        this.state = {
            articulos : []
        }
    }
   
    componentDidMount(){
        request
                .get('http://sw-news-letter.herokuapp.com/article')
                .end((err, res) =>{
                    const articulos = JSON.parse(res.text);
                    this.setState({
                        articulos : articulos
                    });
                });
    }

    render(){
        var articulos = this.state.articulos.map((articulo, i) => {
            var base64;
            base64 = articulo.image;
            return <div>
                    <li id="article" key={i}>
                        <div>
                            <div>
                                <img src={"" + base64} />
                            </div>
                            <div>{articulo.name}</div>
                            <div>{articulo.date}</div>
                            <div>{articulo.abstract}</div>
                        </div>
                    </li>
                </div>
        });
        return(
            <div>
                <ul>
                    {articulos}
                </ul>
            </div>
        )
    }
}

export default Articulos;