export default function api_options(){
    return{
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: process.env.REACT_APP_LANGUAGE,
        },
    }
}