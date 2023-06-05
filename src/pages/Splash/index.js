import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Logo2, SplashBackground,Bar} from '../../assets'
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout( () =>{
            navigation.replace('MainApp');
        }, 4000)
    },[navigation]);

    return (
        <ImageBackground source={SplashBackground} style={styles.background}  options={{ headerShown: false }}>
            <Image source={Logo2} style={styles.logo}/>
                <LottieView source={Bar} autoPlay loop style={styles.loading}/>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    logo:{
        width:200,
        
    },
    loading:{
        marginTop: 10,
        width: 200,
    },
    
})