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
                                        <a href="#articulo-completo" className="" data-toggle="modal">
                                            <figcaption>
                                                <h3>{articulo.name}</h3>
                                                <p>{articulo.date}</p>
                                                <p>{articulo.abstract}</p>
                                            </figcaption>
                                        </a>
                                        {/* Dialogo modal */}
                                        <div className="modal fade" id="articulo-completo">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* header de la ventana */}
                                                    <div className="modal-header">
                                                        <button tyle="button" className="close" data-dismiss="modal" >&times;</button>
                                                        <h3 className="modal-title">{articulo.name}</h3>
                                                        <h6>{articulo.date}</h6>
                                                        <h6>{articulo.section}</h6>
                                                    </div>
                                                    {/* Contenido de la ventana */}
                                                    <img className="img-responsive center-block " src={"" + base64}/>
                                                    <div className="modal-body">
                                                        <p>{articulo.text}</p>
                                                    </div>
                                                    {/* footer */}
                                                    <div className="modal-footer">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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