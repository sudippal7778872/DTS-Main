import axios from 'axios';
import { createPost } from '../../services/PostsService';


const increment = () => {
    return {
        type: "INCREMENT"
    }
}
const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
const login = (isAuthenticated) => {
    return {
        type: "LOGIN",
        isAuthenticated
    }
}
const loginValidate = (data) => {
    return dispatch => {
        axios.get('http://localhost:4000/users')
            .then((res) => {
                let value = res.data
                var result = value.find(val => val.username === data.username && val.password === data.password)
                if (result) {
                    dispatch(login(true))
                }
                else {
                    dispatch(login(false))
                }
            })
    }
}


const createPostAction =  (values) =>{
    return (dispatch)=>{
        createPost(values)
        .then((res)=>{
            console.log(res.data)
            window.alert("Location has been successfully registed");
        })
        .catch((err)=>{
            console.log(err)
        })

    }
}

export { createPostAction }
