import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import '../../App.css';
import Teplone from "./Teplone";
import TeplTime from "./TeplTime";
import HumidityTime from "./HumidityTime";
import HumidityOne from "./HumidityOne";
import MyCalendar from "./Calendar";
import CalendarRange from "./CalendarRange";
import {TEPLOMAIN_ROUTE} from "../../utils/consts";

const TeplOneMain = () => {
    const [chosenDate, setChosenDate] = useState('2024-03-12');
    const [chosenDateStart, setChosenDateStart] = useState('2024-03-12');
    const [chosenDateEnd, setChosenDateEnd] = useState('2024-03-20');
    const [chosenOne, setOne] = useState('temp');
    const [chosenTwo, setTwo] = useState('humidity');
    const [chosenOneName, setOneName] = useState('Температура');
    const [chosenTwoName, setTwoName] = useState('Влажность');

    const handleDateChange = (date) => {
        const formattedDate = getFormattedDate(date);
        setChosenDate(formattedDate);
    };

    const handleDateRangeChange = (range) => {
        const formattedDateStart = getFormattedDate(range.startDate);
        const formattedDateEnd = getFormattedDate(range.endDate);
        setChosenDateStart(formattedDateStart);
        setChosenDateEnd(formattedDateEnd);
    };

    function getFormattedDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function Temp(){
        setTwo('temp')
        setTwoName('Температура')
    }
    function Humidity(){
        setOne('humidity')
        setOneName('Влажность')
    }

    function Dust(){
        setTwo('dustpm2')
        setTwoName('Пыльность')
    }

    function Dewpoint(){
        setOne('dewpoint')
        setOneName('Точка росы')
    }
    console.log(chosenDateStart)
    console.log(chosenDateEnd)
    let dayfirst = '2024-03-01';
    let daylast = '2024-03-30';

    if((chosenDate || (chosenDateStart && chosenDateEnd))&&(chosenOne && chosenTwo)) {
        return (
            <Container fluid style={{paddingTop: 10}}>
                <Row>
                    <Col>
                        <a href={TEPLOMAIN_ROUTE}>
                            <button style={{
                                borderRadius: '10px',
                                fontSize: "20px",
                                borderWidth: '1px',
                                marginRight: 20,
                                minWidth: 200 }}
                            >Выберите теплицу</button>
                        </a>
                    </Col>
                    <Col>
                        <MyCalendar onDateChange={handleDateChange}/>
                    </Col>
                    <Col>
                        <CalendarRange onDateRangeChange={handleDateRangeChange}/>
                    </Col>
                    <Col>
                        <button style={{
                            borderRadius: '10px',
                            fontSize: "20px",
                            borderWidth: '1px',
                            marginRight: 20,
                            minWidth: 200 }}
                            onClick={Temp}
                        >Температура</button>
                    </Col>
                    <Col>
                        <button style={{
                            borderRadius: '10px',
                            fontSize: "20px",
                            borderWidth: '1px',
                            marginRight: 20,
                            minWidth: 200 }}
                            onClick={Humidity}
                        >Влажность</button>
                    </Col>
                    <Col>
                        <button style={{
                            borderRadius: '10px',
                            fontSize: "20px",
                            borderWidth: '1px',
                            marginRight: 20,
                            minWidth: 200 }}
                            onClick={Dust}
                        >Пыль</button>
                    </Col>
                    <Col>
                        <button style={{
                            borderRadius: '10px',
                            fontSize: "20px",
                            borderWidth: '1px',
                            marginRight: 20,
                            minWidth: 200 }}
                            onClick={Dewpoint}
                        >Точка росы</button>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col md={2}>
                        <div className="colSt">
                            <p>MAX {chosenOneName} за сегодня: 20°С</p>
                            <p>MIN {chosenOneName} за сегодня: 15°С</p>
                            <p>MAX {chosenOneName} за 7 дней: 21°С</p>
                            <p>MIN {chosenOneName} за 7 дней: 13°С</p>
                            <p>MAX {chosenOneName} за 30 дней: 12°С</p>
                            <p>MIN {chosenOneName} за 30 дней: 10°С</p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="colSt">
                            <HumidityTime day={chosenDate} name={chosenDate} type={chosenOne} name1={chosenOneName}/>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="colSt">
                            <TeplTime day={chosenDate} name={chosenDate} type={chosenTwo} name1={chosenTwoName}/>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col md={2} >
                        <div className="colSt" >
                            <p>MAX {chosenTwoName} за сегодня: 80</p>
                            <p>MIN {chosenTwoName} за сегодня: 60</p>
                            <p>MAX {chosenTwoName} за 7 дней: 90</p>
                            <p>MIN {chosenTwoName} за 7 дней: 55</p>
                            <p>MAX {chosenTwoName} за 30 дней: 92</p>
                            <p>MIN {chosenTwoName} за 30 дней: 52</p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="colSt">
                            <HumidityOne dayfirst={chosenDateStart} daylast={chosenDateEnd}
                                         name={chosenOneName + ' от времени в период с '+chosenDateStart+' по '+chosenDateEnd}
                                         type={chosenOne}
                            />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="colSt">
                            <Teplone dayfirst={chosenDateStart} daylast={chosenDateEnd}
                                     name={chosenTwoName + ' от времени в период с '+chosenDateStart+' по '+chosenDateEnd}
                                     type={chosenTwo}
                            />
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <div className="colSt">
                            <HumidityOne dayfirst={dayfirst} daylast={daylast}
                                         name={chosenOneName + ' от времени за последние 30 дней'}
                                         type={chosenOne}
                            />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="colSt">
                            <Teplone dayfirst={dayfirst} daylast={daylast}
                                     name={chosenTwoName + ' от времени за последние 30 дней'}
                                     type={chosenTwo}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default TeplOneMain;
