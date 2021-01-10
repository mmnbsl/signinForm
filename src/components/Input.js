import React, {Component} from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }
    render() {
        const { placeHolder, iconName, secureTextEntry, returnKeyType, autoCapitalize } = this.props;
        return (
           <View>
               <View style = {style.inputContainer}>
                   <View style = {style.iconContainer}>
                        <Icon
                            name={iconName}
                            color={'grey'}
                        />
                   </View>
                   <View style = {style.verticalLine}/>
                   <TextInput
                        style = {style.input}
                        placeholder = {placeHolder}
                        secureTextEntry = {secureTextEntry}
                        returnKeyType={returnKeyType}
                        autoCapitalize={autoCapitalize}
                   />
               </View>
           </View> 
        );
    }
}

Input.propTypes = {
    placeHolder : PropTypes.string.isRequired,
    iconName : PropTypes.string.isRequired
}

const style = StyleSheet.create({
    inputContainer : {
        flexDirection : 'row',
        marginVertical : 10,
        borderRadius : 5,
        borderColor : '#010101',
        borderWidth : .3,
        alignItems : 'center',
        paddingVertical : 5
    },
    input : {
        fontSize : 17,
        height: 40,
        marginHorizontal : 20,
        width : '100%'
    },
    iconContainer : {
        marginHorizontal : 15
    },
    verticalLine : {
        height : '100%',
        width : .5,
        backgroundColor: 'grey'
    }
})