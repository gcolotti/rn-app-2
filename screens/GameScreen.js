import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import NumberContainer from './../components/NumberContainer';
import Card from './../components/Card';
import NiceButton from '../components/NiceButton';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLower = useRef(1);
    const currentHigher = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...',
            [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigher.current = currentGuess;
        } else {
            currentLower.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLower.current, currentHigher.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds +1);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <View style={styles.btn}>
                    <NiceButton onPress={nextGuessHandler.bind(this, 'lower')}>LOWER</NiceButton>
                </View>
                <View style={styles.btn}>
                    <NiceButton onPress={nextGuessHandler.bind(this, 'higher')}>HIGHER</NiceButton>
                </View>
                
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
    btn: {
        width: 100,
    }
});

export default GameScreen;