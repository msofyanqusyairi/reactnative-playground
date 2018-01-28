import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'

class Label extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text style={[styles.labelLayout, styles.text]}>
                    {this.props.content}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    labelLayout: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        marginRight: 1,
        marginBottom: 1,
        marginLeft: 1,
    },
    text: {
        color: '#000',
        fontSize: 50,
    }
})

export default Label