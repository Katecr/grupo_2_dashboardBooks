import React, { Component } from "react";
import ChartRow from './ChartRow';

class MoviesInDb extends Component {
    constructor(){
        super()
        this.state = {

           productsList : []

        }
    }



    componentDidMount(){

        fetch("/api/products")
        
        .then(res=>res.json())
        
        .then(product =>{
            console.log(product)
            this.setState({productsList: product.data})
        })
        .catch(error => console.log(error))

    }


    render () {

        return (
  
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Lenguaje</th>
                                <th>Páginas</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                    {

                        this.state.productsList.map((product, index)=> {


                            return <ChartRow  {...product} key = {index} />


                        })

                    }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
}

export default MoviesInDb;