import React,{useState} from 'react'
import { View,Text,Alert } from 'react-native';

import Input from "../components/Input"
import Button from "../components/Button"

function Member({navigation}){
    const [userName, setUserName]=useState(null) 
    const [userSurName, setUserSurName]=useState(null) 
    const [userAge, setUserAge]=useState(null) 
    const [userMail, setUserMail]=useState(null) 
    const [userCity, setUserCity]=useState(null) 
    function handleSubmit(){
        if(!userName ||!userSurName ||!userAge || !userMail ||!userCity){
            Alert.alert("Kebap Fitness Salonu"," Bilgiler Boş Bırakılamaz!")
            return;
        }
        
        const user={
            userName,
            userSurName,
            userAge,
            userMail,
            userCity,
        };
        
        
        
        navigation.navigate("MemberResult",{user})
    }
    return(
        <View>
            <Input label="Üye Adı" placeholder="Üyenin İsmini Giriniz..." onChangeText={setUserName}/>
            <Input label="Üye Soyadı" placeholder="Üyenin Soyismini Giriniz..." onChangeText={setUserSurName}/>
            <Input label="Üye Yaşı" placeholder="Üyenin Yaşını Giriniz..." onChangeText={setUserAge}/>
            <Input label="E-Posta" placeholder="Üyenin E-posta Adresini Giriniz..." onChangeText={setUserMail}/>
            <Input label="Şehir" placeholder="Üyenin Şehir Adresini Giriniz..." onChangeText={setUserCity}/>
            <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
        </View>
    )
}

export default Member