import React from 'react';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import COLORS from '../../assets/colors/colors';

interface CalculatorButtonType {
    type: string,
    value: string
}

let CalculatorButton:FC<CalculatorButtonType> = (props) => {
    return (
        <Pressable style={styles.buttonContainer}>
            {props.type==="operator" ? 
                <>{props.children}</>
            :null}
            
            {props.type==="number" || props.type==="modifier" ? 
                <Text style={styles.buttonText}>{props.value}</Text>
            :null}
        </Pressable>
    )
}

let styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: COLORS.secondBack,
        width: 55,
        height: 55,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 34,
        color: COLORS.offWhite,
        lineHeight:50
    }
})

export default CalculatorButton;