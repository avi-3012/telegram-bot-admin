import axios from 'axios';

export const signIn = async (key:any) =>{
    const response = await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}/admin/signin`,
        data: {
          key: key
        }
      })
    return response
}

export const getUsers = async (token:string) =>{
    const response = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API}/admin/subscribedusers`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    return response
}

export const deleteSubscribedUser = async (token:string, id:string) =>{
    const response = await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}/admin/deletesubscribeduser`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          id: id
        }
      })
    return response
}

export const updateWeatherKey = async (token:string, key:string) =>{
  const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/admin/updateweatherkey`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        key: key
      }
    })
    console.log(response)
  return response
}

export const updateBotName = async (token:string, name:string) =>{
  const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/admin/setbotname`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        name: name
      }
    })
    console.log(response)
  return response
}

export const blockUser = async (token:string, id:string) =>{
  const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/admin/blockuser`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        id: id
      }
    })
    console.log(response)
  return response
}

export const getBlockedUsers = async (token:string) =>{
  const response = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/admin/blockedusers`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  return response
}

export const unblockUser = async (token:string, id:string) =>{
  const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/admin/unblockuser`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        id: id
      }
    })
    console.log(response)
  return response
}