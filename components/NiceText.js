import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NiceText = props => {
    return (
        <Text style={{...styles.niceText, ...props.style}}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    niceText: {
        fontFamily: 'ubuntu-regular'
    }
});

export default NiceText;