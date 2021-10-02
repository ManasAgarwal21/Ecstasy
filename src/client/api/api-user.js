const create = async (user) => {
    try{
        let response = await fetch('/api/users/',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // object to json string
            body: JSON.stringify(user)
        });
        // json to object
        return await response.json();
    }catch(err){
        console.log(err);
    }
}

const list = async (signal) => {
    try{
        let response = await fetch('/api/users/', {
            method: 'GET',
            signal: signal
        });
        return await response.json();
    }catch(err){
        console.log(err);
    }
}

export {create, list};