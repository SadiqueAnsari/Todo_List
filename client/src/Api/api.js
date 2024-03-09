import client from "../Interceptor/Interceptor"


export const userApi ={
     userRegistration : (data)=>client.post('/register',data),
     userLogin : (data)=>client.post('/login',data),
     addTask : (data)=>client.post('/user/createTask',{task:data}),
    //  getTask : (searchTask,page)=>client.get(`/user/getTask?searchTask=${searchTask}&page=${page}&limit=${5}`)
}
