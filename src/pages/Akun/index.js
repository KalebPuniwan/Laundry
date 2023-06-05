import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconUpdate, ProfileBig, SplashBackground } from '../../assets'
import { WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constant'
import { PesananItem, Information, InputField } from '../../components'


const Akun = () => {
    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <View style={styles.homeContainer}>
                <Image source={ProfileBig} style={styles.profile} />
                <Text style={styles.title}>Kaleb Puniwan Yahya</Text>
                <Text style={styles.subtitle}>Member Silver</Text>
                <View style={styles.infoContainer}>
                    <Information title="Riwayat" qty="10" />
                    <Information title="Voucher" qty="12" />
                    <Information title="Pesanan" qty="4" />
                </View>
            </View>

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <InputField title="Username" input="Kaleb Puniwan Yahya"/>
                    <InputField title="Email" input="Kalebpuniwan@gmail.com"/>
                    <InputField title="No. Telepon" input="08651444261"/>
                    <InputField title="Alamat" input="Jl. Pringgodani No.1A, Mrican, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281"/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <IconUpdate />
                    <Text style={styles.txt}>Update</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}

export default Akun
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    title: {
        marginTop: 12,
        fontSize: 24,
        color: WARNA_PUTIH,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        color: WARNA_PUTIH,
        fontWeight: '400',
    },
    homeContainer: {
        marginTop: 24,
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: WARNA_PUTIH,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    subContainer: {
        paddingTop: windowHeight * 0.02,
        paddingHorizontal: 24,
        marginBottom:12,
    },
    txt:{
        marginLeft: 12,
        fontSize: 14,
        color:WARNA_PUTIH,
    },
    button:{
        backgroundColor: WARNA_SEKUNDER,
        marginHorizontal: 24,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    }
})