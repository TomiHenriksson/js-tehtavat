url = "https://reqres.in/api/unknown/23";

const options = {
    method: 'GET',
    headers: {
       'Content-Type': 'application/json'
    }
}
async function fetchData(url, options) {
    let response;
    try {
        response =  await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const json = await response.json()
        return json
    }
    catch (error) {
        console.log(error);
        throw error;
        
    }
}

fetchData(url, options);

