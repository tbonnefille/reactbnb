import '../App.css';


import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';
import img7 from '../assets/img7.webp';


function Section() {

    return (


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

        


    )





}



export default Section;