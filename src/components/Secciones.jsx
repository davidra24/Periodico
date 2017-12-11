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
            return <li className="dropdown" key={i}><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">{seccion.name}</a></li>
        });
        return(
            <div>
                <div>
                    <div className="navbar-form navbar-left" role="search">
                        {secciones}&nbsp;
                        <input type="text" className="form-control" placeholder="Buscar"/>&nbsp;
                        <button type="submit" className="form-control"><span className="glyphicon glyphicon-search "></span></button>&nbsp;
                        <a href="http://facebook.com" className="btn btn-social-icon btn-facebook"><span className="fa fa-facebook">f</span></a>&nbsp;
                        <a href="http://twitter.com"className="btn btn-social-icon btn-twitter"><span className="fa fa-twitter">t</span></a>&nbsp;
                        <a href='#login' className="" data-toggle="modal">&nbsp;
                            <button type="submit" className="form-control"> Ingresar </button>&nbsp;
                        </a>
                        {/* Dialogo modal */}
                        <div className="modal fade" id="login">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* header de la ventana */}
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" >&times;</button>
                                        <h3 className="modal-title">Ingresar</h3>
                                    </div>
                                    {/* Contenido de la ventana */}
                                    <div className="modal-body">
                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label" htmlFor="inputUser">Usuario</label><br/>
                                                <div className="col-sm-10"><br/>
                                                    <input type="text" className="form-control" 
                                                        id="usuario" placeholder="Usuario"/>
                                                </div>
                                            </div><br/><br/>    
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label"
                                                    htmlFor="inputPassword3" >Password</label><br/>
                                                <div className="col-sm-10"><br/>
                                                    <input type="password" className="form-control"
                                                        id="inputPassword3" placeholder="Password"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">Ingresar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) /////////////// TERMINA RETURN
    }
}

export default Secciones;