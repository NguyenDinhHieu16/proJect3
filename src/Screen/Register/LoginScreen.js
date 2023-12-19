import { Button } from '@rneui/themed';
import React, { useState } from 'react'
import { ScrollView, TextInput, View, Text, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

const LoginScreen = () => {

const navigation = useNavigation();
const [userName, setUserName] = useState('');
const [password, setPassWord] = useState('');

    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={() => {navigation.navigate({name:'Flash'})}}>
                    <FontAwesomeIcon style={{color: '#fff'}} size={22} icon={faAngleLeft} />
                </TouchableOpacity>
                <View style={styles.component1}>
                
                    <TextInput
                        style={styles.input}
                        placeholder='Số di động hoặc email'
                        value={userName}
                        onChangeText={setUserName}
                        placeholderTextColor='#8d8e8e'
                    />
        
                    <TextInput
                        style={styles.input}
                        placeholder='Mật khẩu'
                        value={password}
                        onChangeText={setPassWord}
                        placeholderTextColor='#8d8e8e'
                    />
                    <Button
                        title="Đăng nhập"
                        titleStyle={styles.login}
                        buttonStyle={{backgroundColor: '#ffb800', borderRadius: 50, padding: 10,marginTop: 30,}}
                        onPress={() => {
                            navigation.navigate({name:'Home'});
                            console.log('Đăng nhập');
                        }}
                    />      
                    <Button
                        title="Bạn quên mật khẩu ư?"
                        titleStyle={{color: '#8d8e8e', fontSize: 14,}}
                        buttonStyle={{backgroundColor: '#28282a', borderRadius: 50, marginTop: 10,}}
                        onPress={() => {
                            console.log("Quen mat khau");
                        }}
                    />
                </View>  
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: '10%',
        backgroundColor: '#111014',
    },
    back: {
        marginLeft: '5%',
        backgroundColor: '#363334',
        borderRadius: '50%',
        width: '12%',
        aspectRatio: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingRight: 3,
    },
    fieldIniput: {
        color: '#fff',
        fontSize: 25,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 40,
      },
    input: {
        fontSize: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '90%',
        marginVertical: 10,
        color: '#fff',
        backgroundColor: '#28282a',
    },
    component1: {
        flex: 1,
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    login: {
        fontSize: 18, 
        color: '#000',
        fontWeight: 500,
        width: '90%',
    },
    signUp: {
        borderWidth: 1,
        backgroundColor: '#fff', 
        borderRadius: 50,
        borderColor: '#32CD32',
    },
    nameApp: {
        fontSize: 16,
        color: '#B0B0B0',
        marginTop: 10,
    }
})