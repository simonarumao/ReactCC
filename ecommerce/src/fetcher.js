const base_url = "http://localhost:3001"
const fetcher = async (url) => {
    let responseObject = { errorMessage: "", data: [] };
    try {
        const response = await fetch(base_url + url)
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`)
        }
        const reponseData = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = reponseData;
        
    }
    catch (err)
    {
        responseObject.errorMessage = err.message;
        
    }
    return responseObject;
    
}

export const getCategories = () => {
    return fetcher('/categories');
}

export const getProducts = id => {
    return fetcher('/products?catId=' + id);
}
