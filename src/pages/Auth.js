import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom"
import {COMPLEKS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TEPLOMAIN_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);

            }
            user.setUser(user)
            user.setIsAuth(true)
            history(COMPLEKS_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style = {{height: window.innerHeight -54  }}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type = "password"
                    />
                    <Row className = "d-flex align-self-auto mt-3 pl-3 pr-3">
                        {isLogin ?
                            <Col xs={4} md={8}>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся! </NavLink>
                            </Col>
                            :
                            <Col xs={4} md={7}>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите! </NavLink>
                            </Col>
                        }
                        <Col xs={3} md={2}>

                        </Col>
                        <Col xs={4} md={2}>
                            <Button
                                variant= "outline-dark"
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;