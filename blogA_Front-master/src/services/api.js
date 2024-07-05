import axios from "axios";


const apiClient = axios.create({
    //Error de sintaxis en la baseUrl 
    baseURL: 'http://localhost:3000/blog/v2/',
    timeout:5000,
})


export const getPosts = async () => {
    try{                    //Error de sintaxis 
                            //Cambio de post a get 
        return await apiClient.get('posts')
    }catch(e){
        return{
            error: true,
            e: e
        }
    }
}

export const getPostByName = async (name) => {
    try {
      return await apiClient.get(`posts/${name}`);
    } catch (e) {
      return {
        error: true,
        e: e
      }
    }
  }

export const getCommentByPostName = async (name) => {
  try{
    return await apiClient.get(`posts/${name}/comments`)
  }catch(e){
    return{
      error:true,
      e: e
    }
  }
}
  

export const addComment = async (name, text) => {
  try{
    return await apiClient.post(`posts/${name}/add-comments`, text)
  }catch(e){
    return{
      error:true,
      e: e
    }
  }
}
  