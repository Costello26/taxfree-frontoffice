import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanTalon.module.scss';
import ticket from '../../assets/Png/ticket.png'
const Index = () => {
    return (
        <div>
            <div className="container">
                <AppBar />
                <div className={classes['card__content']}>
                    <RegulaInfo 
                    state={{
                    textUZ:"Iltimos, bort taloningizni ko`rsating ",
                    textRU:"Пожалуйста, предъявите ваш посадочный талон",
                    imgSrc: ticket
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default Index;
