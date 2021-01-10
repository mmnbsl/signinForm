import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableHighlight, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import SignUpForm from './SignUpForm';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const bottomTextContainer = Platform.select({
            ios: style.bottomTextContainerIOS,
            android: style.bottomTextContainerAndroid
        })

        return (
            <View style = {style.mainContainer}>
                <LinearGradient colors={['#6583F5', '#7B42FB']} style={style.background} />
                <SafeAreaView >
                    <View style={style.headerTitleContainer}>
                        <Text style={style.title}>Sign in</Text>
                        <Text style={style.description}>Login to your account</Text>
                    </View>
                    <View style={style.signInContainer}>
                        <ScrollView>
                            <SignUpForm />
                        </ScrollView>
                    </View>
                </SafeAreaView>
                <View style={bottomTextContainer}>
                    <Text>Don't you have an account? </Text>
                    <TouchableHighlight
                        onPress = {()=> {}}
                        underlayColor = {'white'} >
                        <View>
                            <Text style = {style.signupButton}>Sign Up Now!</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    mainContainer : {
        flex : 1,
    },
    background : {
        position : 'absolute',
        top:-300,
        left :-300,
        width : '150%',
        height : 800,
        transform: [{ rotateZ : '60deg'}]
    },
    headerTitleContainer : {
        alignItems : 'center',
        flexDirection : 'column',
        paddingVertical : 20,
    },
    title : {
        color : 'white',
        fontSize : 34,
        fontWeight : '600',
    },
    description : {
        color : 'white',
        paddingTop : 5
    },
    signInContainer : {
        paddingHorizontal : 10,
    },
    bottomTextContainerIOS : {
        justifyContent: 'center',
        flexDirection : 'row',
        flex : 1,
        paddingVertical : 20,
        alignItems: 'flex-end'
    },
    bottomTextContainerAndroid : {
        justifyContent: 'center',
        alignItems : 'flex-end',
        flex : 1,
        flexDirection : 'row',
        paddingVertical: 10,
    },
    signupButton : {
        color: '#7B42FB'
    }

})

export default SignUp;