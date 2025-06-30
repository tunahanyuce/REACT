import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import { useSelector } from 'react-redux'

const useStockCall = () => {

    const dispatch=useDispatch()
    const BASE_URL=import.meta.env.VITE_BASE_URL
    const {token}=useSelector((state)=>state.auth)


    const getFirms=async()=>{
        dispatch(fetchStart())

        try {

            const {data} = await axios.get(`${BASE_URL}firms`,{
                headers:{
                    Authorization:`Token ${token}`
                }
            })
            
            console.log(data)
            
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        }
    }

  return  {getFirms}
}

export default useStockCall