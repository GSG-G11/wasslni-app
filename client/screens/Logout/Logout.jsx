import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import {Text } from 'react-native';
import UserContext from '../../context/userContext';

export default function Logout({ navigation }){
    const { setUser } = useContext(UserContext);
    const logOut = async()=>{
        try{
            const response = await axios.get('https://wasslni.herokuapp.com/api/v1/auth/logout');
            setUser({});
            navigation.navigate('وصلني');

        } catch(error){
            console.log(error)
        }       
    }
    useEffect(()=>{
       logOut()
    })
    return(
        <Text>.</Text>
    )
}