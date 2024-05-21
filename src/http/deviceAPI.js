import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createDevice = async (clothing) => {
    const {data} = await $authHost.post('api/clothing', clothing)
    return data
}

export const fetchDevices = async (name, typeId, page, limit= 5) => {
    const {data} = await $host.get('api/clothing', {params: {
            name, typeId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/clothing/' + id)
    return data
}