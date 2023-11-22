import './header.css';

import logo from '../../assets/logo.png';
import searchicon from '../../assets/searchicon.png';



function Header() {

    /*
    
        console.log("toto?",toto);
        console.log("numb?", numb);
        
        */

    return (

        <div className="myclass">

            <header>
                <img className="imgLogo" src={logo} alt="logo" />
                <div className="searchBar">
                    <input />
                    <img src={searchicon} alt="icon" />
                </div>
                <div className="headerWriting">
                    Mettre mon logement sur AirBnB
                </div>
            </header>


        </div>

    )
};


export default Header;