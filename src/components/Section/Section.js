import './section.css';

import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.webp';
import img7 from '../../assets/img7.webp';

import Card from '../Card/Card';



function Section() {

    return (


        <section className="cardsContainer">


            <Card txt='apt1' img={img1} alt="image1" />
            <Card txt='apt2' img={img2} alt="image2" />
            <Card txt='apt3' img={img3} alt="image3" />
            <Card txt='apt4' img={img4} alt="image4" />
            <Card txt='apt5' img={img5} alt="image5" />
            <Card txt='apt6' img={img6} alt="image6" />
            <Card txt='apt7' img={img7} alt="image7" />


        </section >



    )


}



export default Section;