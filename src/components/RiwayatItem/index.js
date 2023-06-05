import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconEkspress, IconKiloan, IconKarpet, IconSatuan, IconSetrika, IconVIP, IconCuci } from '../../assets'
import { WARNA_DISABLE, WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constant'
import Gap from '../Gap'

const RiwayatItem = ({title, date}) => {
    const Icon = () => {
        if (title === "Kiloan") return <IconKiloan />;

        if (title === "VIP") return <IconVIP />;

        if (title === "Satuan") return <IconSatuan />;

        if (title === "Setrika") return <IconSetrika />;

        if (title === "Ekspress") return <IconEkspress />;

        if (title === "Cuci") return <IconCuci />;

        if (title === "Karpet") return <IconKarpet />;

        return <IconKiloan />;
    }
    return (
        <TouchableOpacity style={styles.container}>
            <Icon />
            <View style={styles.txt}>
                <Text style={styles.h1}>{title}</Text>
                <Text style={styles.p}>{date}</Text>
            </View>
            <Gap width ={64}/>
            <Text style={styles.txtHarga}> Rp. 50.000 </Text>
        </TouchableOpacity>
    )
}

export default RiwayatItem

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