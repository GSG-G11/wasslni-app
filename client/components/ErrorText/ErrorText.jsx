import React from "react";
import { Text } from 'react-native';

export default function ErrorText({errMsg}){
    return (
        <Text style={{color : 'red'}}>{errMsg}</Text>
    )
}