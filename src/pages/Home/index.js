import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Header, IconSearch, Profile } from '../../assets'
import { WARNA_DISABLE, WARNA_HITAM, WARNA_PUTIH } from '../../utils/constant'
import { PesananItem, Saldo, ButtonIcon } from '../../components'


const Home = () => {
    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
            <ImageBackground source={Header} style={styles.header}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.p}>Selamat datang, </Text>
                        <Text style={styles.h1}>Kaleb </Text>
                    </View>
                    <Image source={Profile} style={styles.profile} />
                </View>

                <View style={styles.search}>
                    <IconSearch />
                    <TextInput style={styles.p2} placeholder="What are you looking for?" placeholderTextColor='grey' />
                </View>
            </ImageBackground>
            <Saldo />

            <View style={styles.layanan}>
                <Text style={styles.label}>Layanan Kami</Text>
                <View style={styles.iconLayanan}>
                    <ButtonIcon title="Kiloan" type="layanan" />
                    <ButtonIcon title="Satuan" type="layanan" />
                    <ButtonIcon title="VIP" type="layanan" />
                    <ButtonIcon title="Setrika" type="layanan" />
                    <ButtonIcon title="Karpet" type="layanan" />
                    <ButtonIcon title="Cuci" type="layanan" />
                    <ButtonIcon title="Ekspress" type="layanan" />
                    <ButtonIcon title="Ekspress" type="layanan" />
                </View>
            </View>

            <View style={styles.pesananAktif}>
                <Text style={styles.label}>Pesanan Aktif</Text>
                <PesananItem title="Pesanan No. 001234" status="Proses" />
                <PesananItem title="Pesanan No. 002345" status="Proses" />
                <PesananItem title="Pesanan No. 003295" status="Pengemasan" />
                <PesananItem title="Pesanan No. 004533" status="Sedang diantar" />
            </View>
        </ScrollView>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: WARNA_PUTIH
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.35,
        paddingHorizontal: 24,
    },
    container: {
        marginTop: windowHeight * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: windowHeight * 0.03,
    },
    p: {
        fontSize: 18,
        color: WARNA_PUTIH
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: WARNA_PUTIH
    },
    p2: {
        fontSize: 14,
        color: WARNA_HITAM,
        marginLeft: 4,
    },
    search: {
        backgroundColor: WARNA_PUTIH,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row'
    },
    layanan: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    label: {
        fontSize: 18,
        fontWeight: 500,
        color: WARNA_HITAM,
        marginBottom: 20,
    },
    iconLayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 12,
    },
    pesananAktif: {
        paddingHorizontal: 24,
        paddingTop: 12,
        marginBottom: 24,
    }
})