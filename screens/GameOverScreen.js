import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Colors from './../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>The Game is Over!</Text>
            <Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text>
            <View style={styles.btnContainer}>
                <Button color={Colors.primary}title={'New Game'} onPress={props.onNewGame} />
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
    },
    btnContainer: {
        width: '80%',
        marginTop: 20,
    }
});

export default GameOverScreen;