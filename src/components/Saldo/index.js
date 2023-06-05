import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_DISABLE, WARNA_HITAM, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.informasiSaldo}>
                <Text style={styles.p}>Saldo</Text>
                <Text style={styles.h1}>Rp. 100.000</Text>
                <Text style={styles.p2}>100 Points</Text>
            </View>
            <View style={styles.buttonAksi}>
                <ButtonIcon title="Top Up"/>
                <Gap width ={12}/>
                <ButtonIcon title="Transfer"/>
            </View>        
            
        </View>
    )
}

export default Saldo

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingVertical:16,
        paddingHorizontal:24,
        marginHorizontal: 24,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: -windowHeight*0.08,
        flexDirection:'row'
    },

    informasiSaldo:{
        width: '40%'
    },

    p:{
        fontSize: 14,
        color:WARNA_DISABLE,
        marginBottom:4
    },
    h1:{
        fontSize: 20,
        color: WARNA_HITAM,
        fontWeight: 800,
        marginBottom:4
    },
    p2:{
        fontSize: 14,
        color: WARNA_SEKUNDER,
        fontWeight:500
    },
    buttonAksi:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-end'
        
    }

})