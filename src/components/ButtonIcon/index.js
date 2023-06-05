import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAddSaldo, IconTransfer, IconEkspress, IconKiloan, IconKarpet, IconSatuan, IconSetrika, IconVIP, IconCuci } from '../../assets'
import { WARNA_DISABLE, WARNA_HITAM, WARNA_PUTIH } from '../../utils/constant'

const ButtonIcon = ({ title, type }) => {
    const Icon = () => {
        if (title === "Top Up") return <IconAddSaldo />;

        if (title === "Transfer") return <IconTransfer />;

        if (title === "Kiloan") return <IconKiloan />;

        if (title === "VIP") return <IconVIP />;

        if (title === "Satuan") return <IconSatuan />;

        if (title === "Setrika") return <IconSetrika />;

        if (title === "Ekspress") return <IconEkspress />;

        if (title === "Cuci") return <IconCuci />;

        if (title === "Karpet") return <IconKarpet />;

        return <IconAddSaldo />;
    }
    return (
        <TouchableOpacity style={styles.container (type)}>
            <View style={styles.button}>
                <Icon />
                <Text style={styles.text (type)}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container:(type) => ({
        marginBottom: type === "layanan" ? 12 : 0,
        marginRight: type === "layanan" ? 14 : 0 ,
    }),
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    text: (type) => ({
        marginTop: 12,
        fontSize: type === "layanan" ? 14 : 12,
        fontWeight: 400,
        color: type === "layanan" ? WARNA_HITAM : WARNA_DISABLE,
        textAlign: 'center'
    }),
})