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
            if(i==0){
                return (<div>
                    <li id="article" key={i}>
                        <div>
                            <img src={"" + base64} width="810" height="444"/>
                                <div>
                                    <h3>{articulo.name}</h3>
                                    <h4>{articulo.date}</h4>
                                    <p>{articulo.abstract}</p>
                                </div>
                        </div>
                    </li>
                </div>)
            }else{
            return (<div>
                    <li id="article" key={i}>
                        <div>
                            <img src={"" + base64} width="405" height="222"/>
                                <div>
                                    <h3>{articulo.name}</h3>
                                    <h4>{articulo.date}</h4>
                                    <p>{articulo.abstract}</p>
                                </div>
                        </div>
                    </li>
                </div>)
            }
        });
        return(
            <div>
                {articulos}
            </div>
        )
    }
}

export default Articulos;