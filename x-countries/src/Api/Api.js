import axios from 'axios'

export const data = async()=>{
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        return response.data
        
    } catch (e) {
        console.error(e)
        throw e;
    }
}