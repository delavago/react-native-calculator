import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import COLORS from '../../assets/colors/colors';

let Header = (props: {title: string}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerLabel}>{props.title}</Text>
        </View>
    )
}

let styles = StyleSheet.create({
    headerContainer: {

    },
    headerLabel: {
        color: COLORS.offWhite,
        fontFamily: "Poppins-Medium",
        fontSize: 24
    }
})

export default Header;