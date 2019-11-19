import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from './../components/Card';
import Colors from './../constants/colors';
import Input from './../components/Input';
import NumberContainer from '../components/NumberContainer';
import NiceText from '../components/NiceText';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button color={Colors.primary} title={'Start Game!'} onPress={() => {props.onStartGame(selectedNumber)}} />
            </Card>
        );
    };

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <NiceText style={styles.title}>Start a New Game!</NiceText>
                <Card style={styles.gameDescription}>
                    <NiceText>Pick a number and let the computer guess it. Once the game started, you need to tell the computer if your number is Lower o Higher than the guessed.</NiceText>
                </Card>
                <Card style={styles.card}>
                    <NiceText>Select a number</NiceText>
                    <View style={styles.inputContainer}>
                        <Input 
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType={'number-pad'}
                            maxLength={2}
                            onChangeText={numberInputHandler}
                            value={enteredValue}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button color={Colors.secondary} title={'Reset'} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.btn}>
                            <Button color={Colors.primary} title={'Confirm'} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    inputContainer: {
        marginVertical: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    btn: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center',
        fontFamily: 'ubuntu-bold',
        fontSize: 30,
        color: Colors.primary
    },
    summaryContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    gameDescription: {
        width: '80%',
        marginBottom: 10,
    }
});

export default StartGameScreen;