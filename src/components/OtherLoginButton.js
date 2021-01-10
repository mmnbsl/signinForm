import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'

class OtherLoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { title, backgroundColor, iconBackGroundColor  } = this.props
        return (
            <View style = {style.container}>
                <View style = {style.buttonContainer}>
                    <View style={[style.iconContainer ,{ backgroundColor : iconBackGroundColor}]}>
                        <Icon
                            style = {style.icon}
                            name = 'facebook'
                            color = 'white'
                        />
                    </View>
                    <View style={[style.buttonTextContainer, { backgroundColor }]}>
                        <Text style = {style.buttonTitle}>{title}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container : {
        marginVertical : 10
    },
    buttonContainer: {
        flexDirection : 'row',
    },
    buttonTextContainer : {
        height : 50,
        flex : 1,
        borderBottomRightRadius : 5,
        borderTopRightRadius : 5,
        alignItems : 'center',
        justifyContent : 'center'
    },
    buttonTitle : {
        color : 'white'
    },
    icon : {
        color : 'white'
    },
    iconContainer : {
        paddingHorizontal : 13,
        justifyContent : 'center',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        
    }
})

export default OtherLoginButton;