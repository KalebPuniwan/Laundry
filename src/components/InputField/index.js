import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { WARNA_DISABLE, WARNA_HITAM } from '../../utils/constant'

const InputField = ({ title, input }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subContainer}>
                <Text style={styles.input}>{input}</Text>
            </View>
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    input: {
        fontSize: 14,
        color: WARNA_DISABLE
    },
    title: {
        fontSize: 14,
        color: WARNA_HITAM,
        fontWeight:'600',
        marginBottom: 4,
    },
    subContainer: {
        paddingHorizontal:8,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: WARNA_DISABLE,
    }
})