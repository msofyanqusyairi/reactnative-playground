import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

class CustomButton extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    _onPress() {
        console.log('on press')
        this.props.onPress()
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonLayout} onPress={this._onPress.bind(this)} >
                <View>
                    <Text style={{color: this.props.color}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonLayout: {
        height: 50,
        width: 200,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4e87e8'
    },
})

export default CustomButton