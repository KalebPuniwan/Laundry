import { Dimensions, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { SplashBackground } from '../../assets'
import { WARNA_PUTIH } from '../../utils/constant'
import { PesananItem } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'


const Pesanan = () => {
    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Text style={styles.title}>Pesanan Aktif </Text>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <PesananItem title="Pesanan No. 001234" status="Proses" />
                    <PesananItem title="Pesanan No. 002345" status="Proses" />
                    <PesananItem title="Pesanan No. 003295" status="Pengemasan" />
                    <PesananItem title="Pesanan No. 004533" status="Sedang diantar" />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Pesanan
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