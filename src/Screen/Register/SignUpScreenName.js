import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, View, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';



const SignUpScreen = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

const navigation = useNavigation();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={() => {navigation.navigate({name:'SignUpEmail'})}}>
                    <FontAwesomeIcon style={{color: '#fff'}} size={22} icon={faAngleLeft} />
                </TouchableOpacity>
                <View style={styles.component1}>
                    <Text style={styles.titleEmail}>What's your name?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='First name'
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholderTextColor='#8d8e8e'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Last name'
                        value={lastName}
                        onChangeText={setLastName}
                        placeholderTextColor='#8d8e8e'
                    />
                     
                    
                </View>  
                <View style={{justifyContent: 'flex-end', alignItems: 'center', width: '100%',}}>
                    <Button
                        title="Tiếp tục ->"
                        titleStyle={styles.continue}
                        buttonStyle={{backgroundColor: '#ffb800', width: '100%', borderRadius: 50, padding: 10,marginTop: 10,}}
                        onPress={() => {
                            navigation.navigate({name:'Login'});
                        }}
                    />    
                </View> 
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: '10%',
        backgroundColor: '#111014',
        paddingBottom: 30,
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
    },
    continue: {
        fontSize: 18, 
        color: '#000',
        fontWeight: 500,
    },
    titleEmail: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 900,
    }
})