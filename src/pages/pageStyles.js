import COLORS from "../assets/colors/colors";

const { StyleSheet } = require("react-native");

let pagesStyles = StyleSheet.create({
    pageContainer: {
        backgroundColor: COLORS.secondBack,
        height: '100%',
        // padding: 25,
        position: 'relative'
    }
})

export default pagesStyles;