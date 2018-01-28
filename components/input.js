import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native'

class Input extends Component {
    constructor(props) {
        super(props)
    }

    _onChangeText(text) {
        this.props.onChangeText(text.text)
    }
    render() {
        return (
            <View style={[styles.container]}>
                <Text>{this.props.textLabel}</Text>
                <TextInput underlineColorAndroid='transparent' style={[styles.inputLayout]} onChangeText={(text) => this._onChangeText({ text })} value={this.props.text} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputLayout: {
        height: 50,
        width: 200,
        marginTop: 1,
        marginRight: 1,
        marginBottom: 1,
        marginLeft: 1,
        borderWidth: 1,
        borderColor: '#d8d8d8',
    },
    container: {
        marginRight: 5,
        marginLeft: 2,
    },
})

export default Input