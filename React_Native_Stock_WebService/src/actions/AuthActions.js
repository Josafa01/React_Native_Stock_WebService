import { AsyncStorage } from 'react-native';

export const LogOut = () => {
    return (dispatch) => {
        AsyncStorage.removeItem('jwt')
        
        dispatch({
            type:'getStatus',
            payload:{
                isLogged:2
            }
        });

        dispatch({
            type:'getName',
            payload:{
                name:''
            }
        });

        dispatch({
            type:'getEmail',
            payload:{
                email:''
            }
        });

        dispatch({
            type:'getPass',
            payload:{
                pass:''
            }
        });
    };    
};

export const watchLogin = () => {
    return (dispatch) => {
        AsyncStorage.getItem('jwt')
        .then((data)=>{
            if(data != null && data != '') {
                dispatch({
                    type:'getStatus',
                    payload:{
                        isLogged:1
                    }
                });
            } else {
                dispatch({
                    type:'getStatus',
                    payload:{
                        isLogged:2
                    }
                });
            }
        })
        .catch((error)=>{
            dispatch({
                type:'getStatus',
                payload:{
                    isLogged:2
                }
            });
        });
    };
};

// endpoint IP de seu servidor exemplo 192.168.X.XXX
export const LoginUser = (email, pass) => {
    return  (dispatch)=>{
        let endpoint = 'http://IP/webservice_stock/user/login';
        let Data = JSON.stringify({
            email:email,
            pass:pass
        });

        fetch(endpoint, {
            method:'POST',
            body:Data
        })
        .then((r)=>r.json())
        .then((json)=>{
            if(json.error == '') {
                AsyncStorage.setItem('jwt', json.jwt);
                
                dispatch({
                    type:'getStatus',
                    payload:{
                        isLogged:1
                    }
                });

            } else {
                alert(json.error);
            }
        })
        .catch((error)=>{
            alert("Falah na requisiçao: " + error);
        });
    };
};

// endpoint IP de seu servidor exemplo 192.168.X.XXX
export const InsertNewUser = (name, email, pass) => {
    return  (dispatch)=>{
        let endpoint = 'http://IP/webservice_stock/user/new_user';
        let Data = JSON.stringify({
            name:name,
            email:email,
            pass:pass
        });

        fetch(endpoint, {
            method:'POST',
            body:Data
        })
        .then((r)=>r.json())
        .then((json)=>{
            if(json.error == '') {
                AsyncStorage.setItem('jwt', json.jwt);
                
                dispatch({
                    type:'getStatus',
                    payload:{
                        isLogged:1
                    }
                });

                dispatch({
                    type:'getName',
                    payload:{
                        name:''
                    }
                });

                dispatch({
                    type:'getEmail',
                    payload:{
                        email:''
                    }
                });

                dispatch({
                    type:'getPass',
                    payload:{
                        pass:''
                    }
                });

            } else {
                alert(json.error);
            }
        })
        .catch((error)=>{
            alert("Falah na requisiçao: " + error);
        });
    };
};

export const getName = (name) => {
    return {
        type:'getName',
        payload:{
            name:name
        }
    }
};

export const getEmail = (email) => {
    return {
        type:'getEmail',
        payload:{
            email:email
        }
    }
};

export const getPass = (pass) => {
    return {
        type:'getPass',
        payload:{
            pass:pass
        }
    }
};