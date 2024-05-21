
import Auth from "../src/pages/Auth";
import DevicePage from "../src/pages/DevicePage";
import Basket from "../src/pages/Basket";
import Shop from "../src/pages/Shop";
import TeplOneMain from "./pages/tepl/TeplOneMain";
import TeplMain from "./pages/tepl/TeplMain";
import Compleks from "./pages/tepl/Compleks";
import {
    BASKET_ROUTE,
    CLOTHING_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    TEPLONE_ROUTE,
    TEPLOMAIN_ROUTE, COMPLEKS_ROUTE,
} from "./utils/consts";



export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: TEPLONE_ROUTE,
        Component: TeplOneMain
    },
    {
        path: TEPLOMAIN_ROUTE,
        Component: TeplMain
    },
    {
        path: COMPLEKS_ROUTE,
        Component: Compleks
    }
]

export  const publicRoutes =[
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CLOTHING_ROUTE + '/:id',
        Component: DevicePage
    },
]