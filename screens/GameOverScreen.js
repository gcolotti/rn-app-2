import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Colors from './../constants/colors';
import NiceButton from './../components/NiceButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>The Game is Over!</Text>
            <Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text>
            <View style={styles.btnContainer}>
                <NiceButton onPress={props.onNewGame}>New Game</NiceButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'ubuntu-regular',
    },
    btnContainer: {
        width: '80%',
        marginTop: 20,
    }
});

export default GameOverScreen;