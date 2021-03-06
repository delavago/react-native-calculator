import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLORS from '../assets/colors/colors';
import CalculatorButton from '../components/buttons/calculatorButton.component';
import Header from '../components/header/header.component';
import { arithmeticOperation, characterEvaluator } from '../utils/calcUtils';
import pagesStyles from './pageStyles';

let Calculator = () => {

    let buttonColumn1 = [" ", "(", "7", "4", "1", "C"]
    let buttonColumn2 = [" ", ")", "8", "5", "2", "0"]
    let buttonColumn3 = [" ", "-+", "9", "6", "3", "."]

    let sampleHistory = ["10 + 10", "25 / 5", "96 * 5", "33 * 2", "1 + 1"]

    let [calcValue, setCalcValue] = useState("0")
    let [arithmeticValue, setArithmeticValue] = useState("0")

    let getButtonValue = (value: String) => {
        
    }

    let setCalcInput = (val: string) => {
        let temp = characterEvaluator(calcValue,val);
        setCalcValue(temp)
    }

    let setArithmeticExpression = (operation: string) => {
        let temp = arithmeticOperation(operation,arithmeticValue,calcValue)
        setArithmeticValue(temp)
    }

    return (
        <View style={pagesStyles.pageContainer}>
            <View style={styles.headerWrapper}>
                <Header
                    title="Calculator"
                />
            </View>
            <View style={styles.mainContentContainer}>

                <View style={styles.calculatorValuesContainer}>
                    {/* History list */}
                    <View style={styles.historyContainer}>
                        <FlatList
                            data={sampleHistory}
                            renderItem={({ item, index, separators })=>(
                                <CalcHistoryItem data={item} key={"cal-history-"+index}/>
                            )}
                            scrollEnabled={true}
                        />
                    </View>
                    
                    <View style={{width: '100%', height: 2, backgroundColor: COLORS.lightBlack}}/>

                    {/* Calculation view */}
                    <View style={styles.calculationContainer}>
                        <Text style={styles.calculationText}>{arithmeticValue}</Text>
                        <Text style={styles.calculationResultText}>{calcValue}</Text>
                    </View>
                </View>

                <View style={styles.calculatorButtonContainer}>
                    <View style={styles.calculatorButtonColumn}>
                        {buttonColumn1.map((val,index) =>
                            <View style={{ marginBottom: 15 }} key={"buttonColumn1-"+index}>
                                {val !== " " ? <CalculatorButton
                                    type="value"
                                    value={val}
                                    onPress={()=>setCalcInput(val)}
                                /> : <View style={{height: 55, width: 55}}/>}
                            </View>)}
                    </View>
                    <View style={styles.calculatorButtonColumn}>
                        {buttonColumn2.map((val,index) =>
                            <View style={{ marginBottom: 15 }} key={"buttonColumn2-"+index}>
                                {val !== " " ? <CalculatorButton
                                    type="value"
                                    value={val}
                                    onPress={()=>setCalcInput(val)}
                                /> : <View style={{height: 55, width: 55}}/>}
                            </View>)}
                    </View>
                    <View style={styles.calculatorButtonColumn}>
                        {buttonColumn3.map((val,index) =>
                            <View style={{ marginBottom: 15 }} key={"buttonColumn3-"+index}>
                                {val !== " " ? <CalculatorButton
                                    type="value"
                                    value={val}
                                    onPress={()=>setCalcInput(val)}
                                /> : <View style={{height: 55, width: 55}}/>}
                            </View>)}
                    </View>


                    <View style={styles.calculatorButtonColumn}>
                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"delete"}
                                // onPress={()=>setArithmeticExpression("delete")}
                            >
                                <FontAwesome name="arrow-left" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"divide"}
                                onPress={()=>setArithmeticExpression("divide")}
                            >
                                <FontAwesome5 name="divide" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"multiply"}
                                onPress={()=>setArithmeticExpression("multiply")}
                            >
                                <FontAwesome name="close" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"minus"}
                                onPress={()=>setArithmeticExpression("minus")}
                            >
                                <FontAwesome name="minus" size={25} color={COLORS.yellow} />
                            </CalculatorButton>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <CalculatorButton
                                type="operator"
                                value={"plus"}
                                onPress={()=>setArithmeticExpression("plus")}
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

let CalcHistoryItem = (props: {data: String}) => {
    return (
        <Pressable style={styles.calcHistoryContainer}>
            <Text style={styles.calcHistoryText}>{props.data}</Text>
        </Pressable>
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
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
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
    },
    historyContainer: {
        flex: 1
    },
    calculationContainer: {
        flex: 1
    },
    calculationText: {
        fontFamily: 'Poppins-Regular',
        color: COLORS.offWhite,
        fontSize: 18,
        margin: 0,
        textAlign: 'right'
    },
    calculationResultText: {
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.offWhite,
        fontSize: 24,
        margin: 0,
        textAlign: 'right',
    },
    calcHistoryContainer: {
        marginBottom: 5
    },
    calcHistoryText: {
        fontFamily: 'Poppins-Regular',
        color: COLORS.lightBlack,
        fontSize: 18,
        margin: 0,
        textAlign: 'right'
    },
})

export default Calculator