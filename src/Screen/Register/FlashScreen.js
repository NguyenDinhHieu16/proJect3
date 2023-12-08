import { Button } from '@rneui/themed';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlashScreen = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.imageFlash}>
            <Image
                style={styles.image}
                source={require('../../../assets/test.png')}
                resizeMode='contain'
            />
        </View>
        <View style={styles.textForm}>
           <Text style={styles.titleHeader}>Locket</Text>
           <Text style={styles.describe}>Ảnh trực tiếp từ bạn bè, ngay trên màn hình chính</Text>
           <Button
                title='Create an account'
                titleStyle={{color: '#000', fontSize: 18,}}
                buttonStyle={styles.btnCreate}
                onPress={()=>{}}
           />
           <Button
                title='Sign in'
                titleStyle={{color: '#fff', fontSize: 18}}
                buttonStyle={{marginBottom: 20, marginTop: 10,}}
                type='clear'
                onPress={()=>{navigation.navigate({name: 'Login'}), console.log('Sign In')}}
           />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#111014',
        justifyContent: 'space-between',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    imageFlash: {
        height: '55%',
    },
    titleHeader: {
        color: '#fff',
        fontSize: 40,
        // fontFamily: 'DVN-Fredoka-Bold',
        fontWeight: 900,
        
    },
    textForm: {
        alignItems: 'center',
    },

    btnCreate: {
        backgroundColor: '#ffb800',  
        borderRadius: 50, 
        paddingVertical: 15, 
        paddingHorizontal: 20,
        marginTop: 40,
    },
    describe: {
        color:'#b8b6b2', 
        fontSize: 20,
        width: 250, 
        textAlign: 'center',
        marginTop: 25,
    }
});

export default FlashScreen;
