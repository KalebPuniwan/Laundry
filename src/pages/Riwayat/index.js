import { Dimensions, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { SplashBackground } from '../../assets'
import { WARNA_PUTIH } from '../../utils/constant'
import { RiwayatItem } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const Riwayat = () => {
    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Text style={styles.title}> Riwayat Pesanan </Text>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <RiwayatItem title="Kiloan" date="05 May 2023, 15:18" />
                    <RiwayatItem title="VIP" date="04 May 2023, 13:21" />
                    <RiwayatItem title="Satuan" date="02 May 2023, 13:06" />
                    <RiwayatItem title="Ekspress" date="01 May 2023, 12:07" />
                    <RiwayatItem title="Karpet" date="25 Apr 2023, 15:18" />
                    <RiwayatItem title="Kiloan" date="24 Apr 2023, 15:18" />
                    <RiwayatItem title="VIP" date="20 Apr 2023, 15:18" />
                    <RiwayatItem title="Satuan" date="15 Apr 2023, 15:18" />
                    <RiwayatItem title="Ekspress" date="05 Apr 2023, 15:18" />
                    <RiwayatItem title="Karpet" date="02 Apr 2023, 12:20" />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Riwayat
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        paddingVertical: 40,
        fontSize: 24,
        color: WARNA_PUTIH,
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: WARNA_PUTIH,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    subContainer: {
        paddingTop: windowHeight * 0.08,
        paddingHorizontal: 24,
    }
})