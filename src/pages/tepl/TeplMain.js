import { Container, Row, Col } from 'react-bootstrap';
import {COMPLEKS_ROUTE, TEPLOMAIN_ROUTE, TEPLONE_ROUTE} from '../../utils/consts';
import { FaTemperatureHigh, FaTint } from 'react-icons/fa';
import React from "react"; // Импортируем иконки

const TeplMain = () => {
    // Предположим, у вас есть массив данных о теплицах
    const teplData = [
        { name: 'Теплица 1', temperature: 25, humidity: 60 },
        { name: 'Теплица 2', temperature: 20, humidity: 70 },
        { name: 'Теплица 3', temperature: 21, humidity: 65 },
        { name: 'Теплица 4', temperature: 23, humidity: 50 },
        { name: 'Теплица 5', temperature: 21, humidity: 52 },
        { name: 'Теплица 6', temperature: 25, humidity: 63 },
        { name: 'Теплица 7', temperature: 21, humidity: 60 },
        { name: 'Теплица 8', temperature: 20, humidity: 62 },
        { name: 'Теплица 9', temperature: 21, humidity: 61 },
        { name: 'Теплица 10', temperature: 23, humidity: 60 },
        // Добавьте остальные данные для остальных теплиц
    ];

    return (
        <Container fluid>
            <h1 style={{color: "white"}}>Выбор теплицы
            <a href={COMPLEKS_ROUTE} style={{marginLeft: 50}}>
                <button style={{
                    borderRadius: '10px',
                    fontSize: "20px",
                    borderWidth: '1px',
                    marginRight: 20,
                    minWidth: 200 }}
                >Выберите комплекс</button>
            </a>
            </h1>
            <Row>
                {teplData.map((tepl, index) => (
                    <Col key={index} md={2} style={{marginTop: "20px"}}>
                        <a href={TEPLONE_ROUTE}>
                            <div className='colSt'>
                                <h2>{tepl.name}</h2>
                                <p><FaTemperatureHigh /> Температура: {tepl.temperature}°C</p>
                                <p><FaTint /> Влажность: {tepl.humidity}%</p>
                            </div>
                        </a>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col style={{marginTop: "50px"}}>
                    {/*<h1 style={{color: "white"}}>Отклонений показателей от нормы не обнаружено</h1>*/}
                    <h1 style={{color: "green"}}>Отклонения показателей от нормы не обнаружены</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default TeplMain;
