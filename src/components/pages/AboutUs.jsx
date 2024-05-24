import React from 'react';
import '../css/aboutus.css'
import Esteban from '../../assets/Esteban Centurión.jpeg'
import Julio from '../../assets/Julio.jpeg'
import Axel from '../../assets/Axel Yoel Ontiveros.jpg'
import Facundo from '../../assets/Facundo Moyano.jpeg'
import Fernando from '../../assets/Fernando Abregu.jpeg'
import Maxi from '../../assets/Jose Maximiliano Leal.jpeg'
const Aboutus = () => {
    return (
        <section>
        <div className="wrapper">

        <div className="title">
            <h4>Integrantes</h4>
        </div>

        <div className="card_Container">

            <div className="card">

                <div className="imbBx">
                    <img src={Esteban} alt=""/>
                </div>

                <div className="content">
                    <div className="contentBx">
                        <h3>Esteban Centurión<br/><span>Programador</span></h3>
                    </div>
                    <ul className="sci" style={{
          marginRight:"11%"}}>
                        <li>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="card">

<div className="imbBx">
    <img src={Julio}alt=""/>
</div>

<div className="content">
    <div className="contentBx">
        <h3>Julio Rafael Bottanpm  <br/><span>Programador</span></h3>
    </div>
    <ul className="sci"style={{
          marginRight:"11%"}}>
        <li >
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </li>
        <li >
            <a href="#"><i className="fa-brands fa-github"></i></a>
        </li>
        <li >
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </li>
    </ul>
</div>

</div>

            <div className="card">

                <div className="imbBx">
                    <img src={Axel} alt=""/>
                </div>

                <div className="content">
                    <div className="contentBx">
                        <h3>Axel Yoel Ontiveros <br/><span>Programador</span></h3>
                    </div>
                    <ul className="sci"style={{
          marginRight:"11%"}}>
                        <li>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="card">

                <div className="imbBx">
                    <img src={Facundo} alt=""/>
                </div>

                <div className="content">
                    <div className="contentBx">
                        <h3>Facundo Moyano <br/><span>Programador</span></h3>
                    </div>
                    <ul className="sci"style={{
          marginRight:"11%"}}>
                        <li >
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="card">

        <div className="imbBx">
            <img src={Fernando} alt=""/>
        </div>

        <div className="content">
            <div className="contentBx">
                <h3>Fernando Abregu<br/><span>Programador</span></h3>
            </div>
            <ul className="sci"style={{
          marginRight:"11%"}}>
            <li>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </li>
        <li>
            <a href="#"><i className="fa-brands fa-github"></i></a>
        </li>
        <li>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </li>
    </ul>
</div>

</div>
<div className="card">

<div className="imbBx">
    <img src={Maxi} alt=""/>
</div>

<div className="content">
    <div className="contentBx">
        <h3>Jose Maximiliano Leal <br/><span>Programador</span></h3>
    </div>
    <ul className="sci"style={{
          marginRight:"11%"}}>
        <li >
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </li>
        <li >
            <a href="#"><i className="fa-brands fa-github"></i></a>
        </li>
        <li >
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </li>
    </ul>
</div>

</div>
        </div>

    </div>
    </section>
    );
};

export default Aboutus;