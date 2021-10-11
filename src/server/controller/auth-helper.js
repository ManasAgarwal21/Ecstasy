function authenticate(jwt, cb){
    if(typeof window !== undefined){
        sessionStorage.setItem("ECSID", JSON.stringify(jwt.token));
    }
    cb();
}

function isAuthenticated(){
    if(typeof window === undefined)
        return false;
    if(sessionStorage.getItem("ECSID")){
        return JSON.parse(sessionStorage.getItem("ECSID"));
    }
    else return false;
}

export {authenticate, isAuthenticated};