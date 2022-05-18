import React, { useEffect, useState } from "react";
import { Text , View , StyleSheet} from 'react-native';
import { Card, Loader, Title  } from "../../components";
import axios from 'axios';

export default function Parcels(){
    const [parcels , setParcels ] = useState('');
    const [loading, setLoading] = useState(true);
    const getParcels = async()=>{
        try{
            const response = await axios.get('https://wasslni.herokuapp.com/api/v1/parcels/')
            setParcels(response.data.data);
            setLoading(false);
        }catch(error){
            setLoading(false);
        }
    }
    useEffect(()=>{
        getParcels()
    }, [])
    return (
        
        <View style={styles.cardContainer}>
            <View style={styles.title} ><Title  >طرودي</Title></View>
            {loading ?<Loader />: null}
            <View>{parcels.length? parcels.map((parcel)=> <View style={styles.card}><Card id={parcel.id} name={parcel.name} status={parcel.status}/></View>) : <Title>لا يوجد طرود حاليا</Title>}</View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    cardContainer :{
        flex:1,
        direction:"ltr",
    },
    card : {
        height : '40%',
        width : '95%',
    }
  })