import { Container, Row, Col } from 'react-bootstrap';
import {TEPLOMAIN_ROUTE} from '../../utils/consts';
import { FaAtlassian } from "react-icons/fa";

const Сompleks = () => {
    // Предположим, у вас есть массив данных о теплицах
    const teplData = [
        { name: 'Комплекс 1', kolvoteplic: 25},
        { name: 'Комплекс 2', kolvoteplic: 20},
        { name: 'Комплекс 3', kolvoteplic: 21},
        { name: 'Комплекс 4', kolvoteplic: 23},
        { name: 'Комплекс 5', kolvoteplic: 21},
        // Добавьте остальные данные для остальных теплиц
    ];
    return (
        <Container fluid>
            <h1 style={{color: "white"}}>Выбор комплекса</h1>
            <Row>
                {teplData.map((tepl, index) => (
                    <Col key={index} md={2} style={{marginTop: "20px"}}>
                        <a href={TEPLOMAIN_ROUTE}>
                            <div className='colSt'>
                                <h2>{tepl.name}</h2>
                                <p><FaAtlassian/> Количество теплиц: {tepl.kolvoteplic}</p>
                            </div>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Сompleks;
