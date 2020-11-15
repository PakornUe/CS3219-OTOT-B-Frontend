import axios from "axios"
import querystring from "querystring"

const apiURL = process.env.REACT_APP_API_ENDPOINT_URL


export const fetchList = async (userId: string, setData:any) => {
    const query = querystring.stringify({
        requestor_uid:userId
    })

    const list = await axios.get(apiURL + '/listEntry?' + query, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
        }
    })

    setData(list.data)
}

export const updateEntry = async (userId: string, targetId:number, title: string, url: string, description: string) => {
    const query = querystring.stringify({
        requestor_uid: userId,
        id: targetId,
        title,
        url,
        description
    })

    return await axios.put(apiURL + '/updateEntry?' + query)
}


export const deleteEntry = async (userId: string, targetId: number) => {
    const query = querystring.stringify({
        requestor_uid: userId,
        id: targetId
    })

    return await axios.delete(apiURL + '/deleteEntry?' + query)
}

export const createEntry = async (userId: string, title: string, url: string, description: string) => {
    const query = querystring.stringify({
        requestor_uid: userId,
        title,
        url,
        description
    })

   return await axios.post(apiURL + '/createEntry?' + query)
}