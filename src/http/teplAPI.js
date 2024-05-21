import {$authHost, $host} from "./index";

export const getTemp = async (dayfirst, daylast, type) => {
    const {data} = await $host.get('api/tepl', {params:{
        dayfirst, daylast, type
        }
    })
    return data
}

export const getHumidity = async (dayfirst, daylast, type) => {
    const {data} = await $host.get('api/tepl/humidity', {params:{
        dayfirst, daylast, type
        }
    })
    return data
}

export const getTempDay = async (day, type) => {
    const {data} = await $host.get('api/tepl/day', {params:{
        day, type
        }
    })
    return data
}

export const getHumidityDay = async (day, type) => {
    const {data} = await $host.get('api/tepl/humidityday', {params:{
        day, type
        }
    })
    return data
}