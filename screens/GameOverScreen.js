import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import Colors from './../constants/colors';
import NiceButton from './../components/NiceButton';
import NiceText from './../components/NiceText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <NiceText style={styles.text}>The Game is Over!</NiceText>
            <View style={styles.imgContainer}>
                <Image
                    source={require('./../assets/gameover.jpg')}
                />
            </View>
            <NiceText style={styles.text}>Rounds: {props.roundsNumber} - Number: {props.userNumber}</NiceText>
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
    },
    btnContainer: {
        width: '80%',
        marginTop: 20,
    },
    imgContainer: {
        width: 300,
        height: 300,
        alignItems: 'center',
        borderRadius: 150,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1,
        overflow: 'hidden',
        marginVertical: 20
    }
});

export default GameOverScreen;