import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLORS from '../assets/colors/colors';
import CalculatorButton from '../components/buttons/calculatorButton.component';
import Header from '../components/header/header.component';
import pagesStyles from './pageStyles';

let Calculator = () => {

    let buttonColumn1 = [" ", "(", "7", "4", "1", "C"]
    let buttonColumn2 = [" ", ")", "8", "5", "2", "0"]
    let buttonColumn3 = [" ", "-/+", "9", "6", "3", "."]

    return (
        <View style={pagesStyles.pageContainer}>
            <View style={styles.headerWrapper}>
                <Header
                    title="Calculator"
                />
            </View>
            <View style={styles.mainContentContainer}>
                <View style={styles.calculatorValuesContainer}>

                </View>
                <View style={styles.calculatorButtonContainer}>
                    <View style={styles.calculatorButtonColumn}>
                        {buttonColumn1.map(val =>
                            <View style={{ marginBottom: 15 }}>
                                {val !== " " ? <CalculatorButton
                                    type="number"
                                    value={val}
                                /> : <View style={{height: 55, width: 55}}/>}
                            </View>)}
                    </View>
                    <View style={styles.calculatorButtonColumn}>
                        {buttonColumn2.map(val =>
                            <View style={{ marginBottom: 15 }}>
                                {val !== " " ? <CalculatorButton
                                    type="number"
                                    value={val}
                                /> : <View style={{height: 55, width: 55}}/>}
                            </View>)}
                    </View>
                    <View style={styles.calculatorButtonColumn}>
                        {buttonColumn3.map(val =>
                            <View style={{ marginBottom: 15 }}>
                                {val !== " " ? <CalculatorButton
                                    type="number"
                                    value={val}
                                /> : <View style={{height: 55, width: 55}}/>}
                            </View>)}
                    </View>


                    <View style={styles.calculatorButtonColumn}>
                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"delete"}
                            >
                                <FontAwesome name="arrow-left" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"divide"}
                            >
                                <FontAwesome5 name="divide" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"multiply"}
                            >
                                <FontAwesome name="close" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"minus"}
                            >
                                <FontAwesome name="minus" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"plus"}
                            >
                                <FontAwesome name="plus" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"equal"}
                            >
                                <FontAwesome5 name="equals" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    headerWrapper: {
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25
    },
    mainContentContainer: {
        height: '100%',
        width: '100%',
        display: 'flex'
    },
    calculatorValuesContainer: {
        flex: 1
    },
    calculatorButtonContainer: {
        display: "flex",
        flexDirection: 'row',
        flex: 3,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.mainBlack,
        bottom: 0,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        padding: 15,
    },
    calculatorButtonColumn: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    }
})

export default Calculator