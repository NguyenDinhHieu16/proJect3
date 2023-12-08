import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Button } from '@rneui/base';

const SignUpScreen = () => {

const navigation = useNavigation();

    return (
        <ScrollView>
            <View>
                <Text style={{fontSize: 18, fontWeight: 500,}}>Tham gia Pets Social</Text>
                
            </View>
        </ScrollView>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({

});