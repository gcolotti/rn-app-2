import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from './../constants/colors';

const NiceButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={{...styles.btnContainer, ...props.style}}>
                <Text style={styles.btnText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 150,
        height: 50,
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'ubuntu-regular'
    }
});

export default NiceButton;