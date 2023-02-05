import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function Result({route}){
    const {user} = route.params;
    return(
        <View>
            <Text style={styles.label}>Üye Adı: {user.userName} </Text>
            <Text style={styles.label}>Üye SoyAdı: {user.userSurName.toUpperCase()}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-Posta Adresi: {user.userMail} </Text>
            <Text style={styles.label}>Üye Şehri: {user.userCity}</Text>
        </View>
    )
}

export default Result

const styles=StyleSheet.create({
    label:{
        fontWeight:"bold",
        fontSize:20,
        margin:10,
    }
})