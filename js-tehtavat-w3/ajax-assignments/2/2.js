const options = {
    method: "POST",
    body: JSON.stringify({
        name: "Tomi",
        job: "unemployed"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}

url = "https://reqres.in/api/users"


async function fetchData(url, options) {
    const response =  await fetch(url, options);
    const json = await response.json()
    console.log(json);
    
}
    
fetchData(url, options);