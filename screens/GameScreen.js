import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from './../components/NumberContainer';
import Card from './../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomNetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    const nextGuessHandler = (direction) => {
        
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <View style={styles.btn}>
                    <Button title={'LOWER'} onPress={nextGuessHandler.bind(this, 'lower')}/>
                </View>
                <View style={styles.btn}>
                    <Button title={'GREATER'} onPress={nextGuessHandler.bind(this, 'greater')}/>
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