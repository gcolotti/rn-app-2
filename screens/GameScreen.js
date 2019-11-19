import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import NumberContainer from './../components/NumberContainer';
import Card from './../components/Card';
import NiceButton from '../components/NiceButton';
import NiceText from '../components/NiceText';
import { AntDesign } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
};

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guesses, setGuesses] = useState([initialGuess.toString()]);
    const currentLower = useRef(1);
    const currentHigher = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(guesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigher.current = currentGuess;
        } else {
            currentLower.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLower.current, currentHigher.current, currentGuess);
        setCurrentGuess(nextNumber);
        setGuesses(pastGuesses => [nextNumber.toString(), ...pastGuesses])
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <View style={styles.btn}>
                    <NiceButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <AntDesign style={styles.icon} name={'caretdown'} />
                    </NiceButton>
                </View>
                <View style={styles.btn}>
                    <NiceButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <AntDesign style={styles.icon} name={'caretup'} />
                    </NiceButton>
                </View>

            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {guesses.map((guess, index) => 
                        <View style={styles.listItem}key={guess}>
                            <NiceText>#{guesses.length - index}</NiceText>
                            <NiceText>{guess}</NiceText>
                        </View>)
                    }
                </ScrollView> */}
                <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={item => item}
                    data={guesses}
                    renderItem={(itemData) =>{
                        return (
                            <View style={styles.listItem}>
                                <NiceText>#{guesses.length - itemData.index}</NiceText>
                                <NiceText>{itemData.item }</NiceText>
                            </View>
                        )}}
                />
            </View>
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
    },
    icon: {
        fontSize: 20
    },
    listContainer: {
        marginVertical: 10,
        width: '60%',
        flex: 1,
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }
});

export default GameScreen;