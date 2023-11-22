
import { toto } from './exExport';
import { numb } from './exExport';

import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {

    console.log("toto?", toto);
    console.log("numb?", numb);



    return (

        <div className="myclass">


            <Header />
            <Section />
            <Footer />


        </div>


    );
}

export default App;
