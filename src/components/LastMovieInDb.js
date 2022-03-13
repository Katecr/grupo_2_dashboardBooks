
import React, { Component } from "react"


class LastMovieInDb extends Component {

	constructor() {
        super()
        this.state = {
            productSelect: []
        }
    }

		componentDidMount() {
	
		fetch('api/products/19')
		.then((res) => res.json())
		.then(product =>{
				console.log(product)
			this.setState({productSelect: product.data})
		})
		.catch(error => console.log(error))
	}

render() {
return(
     <>
               
			{/*<!-- Last Movie in DB -->*/}
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Ultimo libro creado</h5>
					</div>
					<div className="card-body">
						<div className="text-center">
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3030/images/books/book-el-chico-de-buchenwald.png'} alt=" Star Wars - Mandalorian "/>
						</div>
						<p>Al salir de Buchenbald, Romek volvió a la vida: había pasado parte de su infancia en uno de los campos de concentración nazis más crueles y aprendió demasiado pronto qué significa sufrir. Había conocido la maldad humana en estado puro.</p>
					</div>
				</div>
		</div>

    </>
	)
}
}

export default LastMovieInDb;