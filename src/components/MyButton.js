import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <LinearGradient colors={['#6573F5', '#6583F5']} style={style.buttonBackground}>
                    <TouchableHighlight 
                        style = {{justifyContent : 'center'}}
                        onPress={() => { Alert.alert("Click")}} 
                        underlayColor = 'transparent' >
                            <View style = {style.buttonTextContainer}>
                                <Text style={style.buttonText}>SIGN IN</Text>
                            </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        );
    }
}
const style = StyleSheet.create({
    buttonBackground : {
        height : 50,
        borderRadius : 5,
        marginVertical : 10,
        justifyContent : 'center'
    },
    buttonText : {
        color : 'white',
        fontSize : 20,
        fontWeight : '600'
    },
    buttonTextContainer : {
        alignItems : 'center',
    }
})

export default MyButton;