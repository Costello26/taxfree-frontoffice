import React from 'react'
import printCheck from '../../assets/printPage.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import classes from './PrintCheck.module.scss'
import Rasm from '../../assets/Png/code.jpg'
import TaxFreeLogo from '../../assets/Png/TaxFreeLogo.png'
export default function PrintCheck() {
    function printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a2");
                pdf.addImage(imgData, 'JPEG', 0, 0, 420,);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;
    }
    return (
        <div style={{ width: "90%", height: "auto", margin: "0 auto", overflow: "hidden" }}>
            {/* <img  width={"100%"} src={printCheck} alt="check" style={{ transform: "translateX(-50px)" }} /> */}

            <div id='divToPrint' className={classes.print__check}>
                <div className={classes.print__check__header}>
                    <div className={classes.header__left}><h5>Tax Free Form</h5></div>
                    <div className={classes.header__right}>
                        <img className={classes['code']} src={Rasm} alt="code" />
                        <div className={classes["header__info"]}>
                            ОПЕРАТОР FRONT OFFICE <br />
                            OLIMOV A. T. <br />
                            id 12345678
                        </div>
                    </div>
                </div>
                <div className={classes.check__section}>
                    <div className={classes.check__header}>
                        <div className={classes.check__left}>
                            <p> РАСЧЕТ СУММЫ TAX FREE</p>
                        </div>
                        <div className={classes.check__right}>
                            <ul>
                                <li>СУММА </li>
                                <li>ВАЛЮТА </li>
                                <li>СУММА </li>
                                <li>ВАЛЮТА</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.check__main}>
                        <div className={classes.check__left}>
                            <img src={TaxFreeLogo} alt="" />
                            <div>
                                <ul>
                                    <li>ИТОГОВАЯ СТОИМОСТЬ ТОВАРОВ С НДС</li>
                                    <li>КОЛИЧЕСТВО ЧЕКОВ</li>
                                    <li>
                                        НАЧИСЛЕННАЯ СУММА НДС (TAX FREE)

                                    </li>
                                    <li>ОДОБРЕННАЯ К ВЫПЛАТЕ СУММА НДС (TAX FREE)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.check__right}>
                            <div className={classes.summa}>
                                <ul>
                                    <li>1 293 000.00</li>
                                    <li>15</li>
                                    <li>124 682.00</li>
                                    <li>124 682.00</li>
                                </ul>
                            </div>
                            <div className={classes.valyuta}>
                                <ul>
                                    <li>UZS</li>
                                    <li></li>
                                    <li>UZS</li>
                                    <li>UZS</li>
                                </ul>
                            </div>
                            <div className={classes.summa}>
                                <ul>
                                    <li>11.25</li>
                                </ul>
                            </div>
                            <div className={classes.valyuta}>
                                <ul>
                                    <li>USD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //card info  */}
                <div className={classes.card__section}>
                    <div className={classes.card__header}>
                        <div className={classes.card__left}>
                            <p>НОМЕР КАРТЫ МЕЖДУНАРОДНОЙ ПЛАТЕЖНОЙ СИТЕМЫ</p>
                        </div>
                        <div className={classes.card__right}>
                            <p>ТИП КАРТЫ</p>
                            <p>СРОК ДЕЙСТВИЯ</p>
                        </div>
                    </div>
                    <div className={classes.card__info}>
                        <div className={classes.card__left}>
                            <p>4000 **** **** 9010</p>
                        </div>
                        <div className={classes.card__right}>
                            <p>VISA</p>
                            <p>08/24</p>
                        </div>
                    </div>
                </div>

                <div className={classes.user__info__section}>
                    <div className={classes.user__info__left}>
                        <div className={classes.box}>
                            <p>ИНФОРМАЦИЯ О ЗАЯВИТЕЛЕ</p>
                        </div>
                        <div className={classes.name}>
                            <div className={classes.text_muted}>
                                ПОЛНОЕ ИМЯ
                            </div>
                            <div className={classes.inp_name}>
                                Hellen Mirren
                            </div>
                            <div className={classes.text_muted}>
                                ПАСПОРТНЫЕ ДАННЫЕ
                            </div>
                            <div className={classes.inp_passport}>
                                <div className={classes.pass1}>
                                    GBR
                                </div>
                                <div className={classes.pass2}>
                                    533475514
                                </div>
                            </div>
                            <div className={classes.text_muted}>
                                СТРАНА ПРОЖИВАНИЯ
                            </div>
                            <div className={classes.inp_name}>
                                Great Britain
                            </div>

                            <div className={classes.text_muted}>
                                ГОРОД
                            </div>
                            <div className={classes.city}>
                                <div className={classes.city1}>
                                    London
                                </div>
                                <div className={classes.city2}>
                                    +44-7871234567
                                </div>
                            </div>
                            <div className={classes.text_muted}>
                                Email
                            </div>
                            <div className={classes.inp_name}>
                                h.mirrer@gmail.com
                            </div>
                            <p className={classes.text_muted}>
                                Пожалуйста, удостоверьтесь в правильности заполнения полей, где указаны ваши персональные данные. В случае обнаружения ошибки, просим вас незамедлительно обратиться оператору Tax Free и указать поле, в котором нужно внести корретировки.
                            </p>
                        </div>
                    </div>
                    <div className={classes.user__info__right}>
                        <div className={classes.box}>
                            <p>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</p>
                        </div>
                        <div className={classes.box1}>
                            <p className={classes.text_muted}>
                                Данной подписью я подтверждаю, что:
                            </p>
                            <ul>
                                <li> Даю согласие на обработку персональных данных, указанных в бланке Tax Free Form.</li>
                                <li> Несу персональную ответственность за правильность и достоверность информации, указанной в бланке Tax Free Form.</li>
                                <li> Ознакомлен с итоговой суммой возвращаемого НДС (Tax Free) и претензий не имею.</li>
                                <li> Ознакомлен с правилами системы Tax Free Uzbekistan.</li>
                            </ul>
                            <p className={classes.text_muted}>
                            Подпись заявителя________________________________________________
                            </p>
                            <p className={classes.text_muted}>
                            Примечание
                            </p>
                            <p className={classes.text_muted2}>
                            Сумма НДС (Tax Free) пересчитывается на дату оплаты платежа в соответствии с установленным курсом валюты, обслуживающим коммерческим банком.
                            </p>
                            <p className={classes.text_muted2}>
                            Возврат одобренной к выплате суммы НДС (TAX FREE) будет осуществлен на карту международных платежных систем, зарегистрированных в мобильном  приложении  «Soliq», и в сроках, установленных 
правилами Tax Free Uzbekistan.
                            </p>
                            <p className={classes.text_muted2} style={{fontSize:"16px"}}>
                            Подпись заявителя________________________________________________
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{}}>
                <button
                    style={{
                        width: "276px",
                        height: "55px",
                        background: "#325ECD",
                        borderRadius: "16px",
                        fontWeight: 500,
                        fontSize: "30px",
                        color: "white",
                        border: "none",
                        margin: "20px 0"
                    }}
                    onClick={()=>{printDocument()}}
                >Chop etish </button>
            </div>
        </div >
    )
}