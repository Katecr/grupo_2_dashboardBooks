import React from 'react';
import image from '../assets/images/logo_white.png';
import {Route, Routes, Link} from 'react-router-dom'




// import Error404 from './Error404';
import GenresInDb from './GenresInDb';
import MoviesInDb from './MoviesInDb';
import ContentRowMovies from './ContentRowMovies';
import CategoriesDetail from './CategoriesDetail';
import ContentWrapper from './ContentWrapper';




function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Books Libreria</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                     <Link className="nav-link collapsed" to="/stats">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Estados</span>
                    </Link>
                    
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>
                

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/table">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla productos</span></a>
                </li>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            


    <Routes>
          
        <Route path="/" element = {<ContentWrapper />} />
        <Route path="/stats" element = {<div className='col-8'> <ContentRowMovies /></div>} />
        <Route path="/categories" element =  {<GenresInDb />} />
        <Route path="/table" element = {<MoviesInDb />} />
        <Route path="/categories/:id" element = {<CategoriesDetail />} />


          {/*<Route path='*' element= {<Error404 />} /> */}

    </Routes>




        </React.Fragment>
    )
}
export default SideBar;