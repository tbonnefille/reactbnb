
import logo from './assets/logo.png';
import searchicon from './assets/searchicon.png';
import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.webp';
import img5 from './assets/img5.webp';
import img6 from './assets/img6.webp';
import img7 from './assets/img7.webp';



import './App.css';

function App() {

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

            <section className="cardsContainer">
                <div className="card">

                    <img src={img1} alt="img1" />
                    <div>Texte</div>

                </div>
                <div className="card">
                    <img src={img2} alt="img2" />
                    <div>Texte</div>
                </div>
                <div className="card">
                    <img src={img3} alt="img3" />
                    <div>Texte</div>
                </div>
                <div className="card">
                    <img src={img4} alt="img4" />
                    <div>Texte</div>
                </div>
                <div className="card">
                    <img src={img5} alt="img5" />
                    <div>Texte</div>
                </div>
                <div className="card">
                    <img src={img6} alt="img6" />
                    <div>Texte</div>
                </div>
                <div className="card">
                    <img src={img7} alt="img7" />
                    <div>Texte</div>
                </div>




            </section >




        </div>














    );
}

export default App;
