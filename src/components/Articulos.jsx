import React, { Component } from 'react';
import request from 'superagent';

class Articulos extends Component {

    constructor() {
        super();
        this.state = {
            articulos: []
        }
    }

    componentDidMount() {
        request
            .get('http://sw-news-letter.herokuapp.com/article')
            .end((err, res) => {
                const articulos = JSON.parse(res.text);
                this.setState({
                    articulos: articulos
                });
            });
    }

    render() {
        var articulos = this.state.articulos.map((articulo, i) => {
            var base64;
            base64 = articulo.image;
            return (<div id="article">                        
                            <div className="row text-center">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <figure>
                                        <img className="img-responsive center-block " src={"" + base64} width="640" height="480"/>
                                        <a href="#">
                                            <figcaption>
                                                <h3>{articulo.name}</h3>
                                                <p>{articulo.date}</p>
                                                <p>{articulo.abstract}</p>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                    </div>)
        });
        return (
            <div>
                {articulos}
            </div>
        )
    }
}

export default Articulos;