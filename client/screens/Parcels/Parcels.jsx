import React, { useEffect, useState } from "react";
import { Text , View , StyleSheet} from 'react-native';
import { Card, Title  } from "../../components";
import axios from 'axios';

export default function Parcels(){
    const [parcels , setParcels ] = useState('');
    const getParcels = async()=>{
        try{
            const response = await axios.get('https://wasslni.herokuapp.com/api/v1/parcels/')
            setParcels(response.data.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getParcels()
    }, [])
    console.log(parcels);
    return (
        <View style={styles.cardContainer}>
            <View style={styles.title} ><Title  >طرودي</Title></View>
                {parcels.length && parcels.map((parcel)=> <Card id={parcel.id} name={parcel.name} status={parcel.status}/>)}
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer :{
        flex:1,
        direction:"ltr",

    },
    title:{
        float : 'right'

    }
  
  })