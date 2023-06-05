import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_DISABLE, WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constant'
import { IconNext } from '../../assets'

const Information = ({title, qty}) => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
            <Text style={styles.h1}>{qty}</Text>
            <IconNext />
            </View>
            
            <Text style={styles.p}>{title}</Text>
        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: WARNA_SEKUNDER,
        borderRadius: 10,
        marginRight: 12,
        marginTop: 12,
    },
    subcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    h1:{
        fontSize: 20,
        color: WARNA_PUTIH,
        fontWeight: '800'
    },
    p:{
        fontSize: 14,
        color:WARNA_PUTIH,
    }
})