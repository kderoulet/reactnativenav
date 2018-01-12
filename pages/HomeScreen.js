import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
  } from 'react-native';  
import React, { Component } from 'react';
  
class HomeScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{
            flex: 1,
            backgroundColor: '#ffffff'
            }}>
                <Text>
                    Welcome to Coastal
                </Text>
                <Button
                    title="New Form"
                    color="#841584"
                    onPress={() =>
                        navigate('Form')
                    }
                />
            </View>
        );
    }
}

export default HomeScreen