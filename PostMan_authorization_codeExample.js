// postman automatic checking authorization code

//signup
if(pm.response.code === 201){
    pm.environment.set('authToken', pm.response.json().token)
}

//signin
if(pm.response.code === 200){
    pm.environment.set('authToken', pm.response.json().token)
}

