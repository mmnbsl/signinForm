import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import OtherLoginButton from '../components/OtherLoginButton';

class SignUpForm extends Component {
    constructor () {
        super()
        this.state = {
            checkBox : true
        } 
    }
    render() {
        return (
            <View style = {style.container}>
                <Input 
                    placeHolder={'Username or e-mail'} 
                    iconName={'person'}
                    returnKeyType = {'next'}
                    autoCapitalize = {'none'}
                    />

                <Input 
                    placeHolder={'Password'}
                    iconName={'lock'}
                    secureTextEntry = {true}
                    returnKeyType={'done'} />
                <View style = {style.optionsContainer}>
                    <Text style = {style.forgetPassword}>Forget password?</Text>
                    <View style = {style.checkBoxContainer}>
                        <Checkbox
                            uncheckedColor={'#6583F5'}
                            color={'#6583F5'}
                            style = {style.checkBox}
                            status = {this.state.checkBox ? 'checked' : 'unchecked'}
                            onPress = {()=>{
                               this.setState({
                                   checkBox : !this.state.checkBox
                               })
                           }} />
                        <TouchableHighlight 
                            onPress={() => { this.setState({ checkBox: !this.state.checkBox})}} 
                            underlayColor = {'white'}>
                                <Text>
                                    Keep me Signed
                                </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View>
                    <MyButton />
                </View>
                <View style = {style.orContainer}>
                    <Text style = {style.orText}>------------------------ or ------------------------</Text>
                </View>
                <View>
                    <OtherLoginButton 
                        title = {'LOGIN WITH FACEBOOK'}
                        backgroundColor={'#5173AD'}
                        iconBackGroundColor={'#35629B'} />
                    <OtherLoginButton 
                        title = {'LOGIN WITH GOOGLE'}
                        backgroundColor={'#E35D47'}
                        iconBackGroundColor= {'#D6513E'} />
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        marginVertical : 20,
        paddingHorizontal : 10,
        paddingTop : 20,
        width : '100%',
        borderRadius : 10,
        shadowColor : '#000',
        shadowOpacity : 0.2,
        shadowRadius : 3,
        shadowOffset : {
            width : 0,
            height : 2,
        },
        elevation : 4
    },
    optionsContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        paddingTop : 5,
        alignItems : 'center'
    },
    checkBoxContainer : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    forgetPassword : {
        color: '#7B42FB'
    },
    signed : {
        color: '#6583F5'
    },
    checkBox : {
        borderColor : 'grey',
        borderWidth : 0.5
    },
    orContainer : {
        alignItems : 'center',
        paddingVertical : 10
    },
    orText : {
        color : 'grey'
    }
})

export default SignUpForm;