import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from './../components/Card';
import Colors from './../constants/colors';
import Input from './../components/Input';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button color={Colors.secondary} title={'Reset'} onPress={() => { }} />
                    </View>
                    <View style={styles.btn}>
                        <Button color={Colors.primary} title={'Confirm'} onPress={() => { }} />
                    </View>
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
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
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
    },
});

export default StartGameScreen;