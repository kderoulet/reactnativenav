import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
  } from 'react-native';  
import React, { Component } from 'react';
  
class FormScreen extends Component {
    state = {
        number: 0,
        firstField: false,
        secondFieled: false,
        thirdField: false,
        fourthField: false,
        fifthField: false
    }

    pressFirstField() {
        this.setState(this.state.firstField ? 
            {firstField: false, number: this.state.number-=20} : 
            {firstField: true, number: this.state.number+=20})
        }
    pressSecondField() {
        this.setState(this.state.secondField ? 
            {secondField: false, number: this.state.number-=10} : 
            {secondField: true, number: this.state.number+=10})
        }
    pressThirdField() {
        this.setState(this.state.thirdField ? 
            {thirdField: false, number: this.state.number-=5} : 
            {thirdField: true, number: this.state.number+=5})
        }
    pressFourthField() {
        this.setState(this.state.fourthField ? 
            {fourthField: false, number: this.state.number-=13} : 
            {fourthField: true, number: this.state.number+=13})
        }
    pressFifthField() {
        this.setState(this.state.fifthField ? 
            {fifthField: false, number: this.state.number-=7} : 
            {fifthField: true, number: this.state.number+=7})
        }

    render() {
        return(
            <View style={{
            flex: 1,
            backgroundColor: '#ffffff'
            }}>
                <Button
                    title="Field One"
                    color="#841584"
                    onPress={() =>
                        this.pressFirstField()
                    }
                />
                <Button
                    title="Field Two"
                    color="#841584"
                    onPress={() =>
                        this.pressSecondField()
                    }
                />
                <Button
                    title="Field Three"
                    color="#841584"
                    onPress={() =>
                        this.pressThirdField()
                    }
                />
                <Button
                    title="Field Four"
                    color="#841584"
                    onPress={() =>
                        this.pressFourthField()
                    }
                />
                <Button
                    title="Field Five"
                    color="#841584"
                    onPress={() =>
                        this.pressFifthField()
                    }
                />
                <Text>
                {`${this.state.number}`}
                </Text>
            </View>
        );
    }
}

export default FormScreen