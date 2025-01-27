import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react";

const AppRouter =  observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>
                <Route key = {path} path={path}  Component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key = {path} path={path}  Component={Component} exact/>
            )}
            { <Route path="*" element={ <Navigate to={LOGIN_ROUTE} replace={true} /> } /> }
        </Routes>
    );
});

export default AppRouter;