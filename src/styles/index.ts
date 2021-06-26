import {StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';

const colors = {
    primary: "#407BFF",
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    darkGray: "#263238",
    mediumGray: "#9E9E9E",
    black: "#000000",
    red: "#DF5753",
    secondary: '#33569B',
}

const text = StyleSheet.create({
    regular: {
        fontSize: 16,
        fontWeight: '200',
        textAlign: 'center',
        color: colors.mediumGray,
    },
    bold: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: colors.darkGray,
    },
    primaryText: {
        fontSize:14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.white,
        marginLeft: 20,

    },
})

const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    card: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            height: 0,
            width: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    draw: {
        width: 313,
        height: 225,
    },

    arrow:{
        width: 10,
        height:15,
    },

    textContainer:{
        paddingHorizontal: 20,
    },

    primaryButton:{
        backgroundColor: colors.primary,
        width: 290,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    
    },

    arrowContainer:{
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export {colors, theme, text};