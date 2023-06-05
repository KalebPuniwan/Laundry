import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconPesananAktif } from '../../assets'
import { WARNA_DISABLE, WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constant'
import Gap from '../Gap'

const PesananItem = ({title, status}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <IconPesananAktif />
            <View style={styles.txt}>
                <Text style={styles.h1}>{title}</Text>
                <Text style={styles.p}>{status}</Text>
            </View>
            <Gap width ={52}/>
            <Text style={styles.txtHarga}> Rp. 50.000 </Text>
        </TouchableOpacity>
    )
}

export default PesananItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: WARNA_PUTIH,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 2.65,
        elevation: 3,
    },
    txt:{
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    },
    h1:{
        fontSize: 15,
        fontWeight:'bold',
        color:WARNA_HITAM,
    },
    p:{
        fontSize: 14,
        fontWeight:'400',
        color:WARNA_DISABLE,
    },
    txtHarga:{
        fontSize: 16,
        fontWeight:'bold',
        textAlignVertical:'center',
        color: WARNA_SEKUNDER
    }
})