import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Left,
    Button,
    ScrollView,
} from 'react-native'

import { NavigationActions, } from 'react-navigation'

import CustomButton from '../../components/button'
import Input from '../../components/input'
import Label from '../../components/label'

class B extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.navigation.state.params ? props.navigation.state.params.name : '',
            address: props.navigation.state.params ? props.navigation.state.params.address : '',
            age: props.navigation.state.params ? props.navigation.state.params.age : '',
        }

        this._onChangeName = this._onChangeName.bind(this)
        this._onChangeAddress = this._onChangeAddress.bind(this)
        this._onChangeAge = this._onChangeAge.bind(this)
        this._onGoToA = this._onGoToA.bind(this)
        this._onGoToC = this._onGoToC.bind(this)
        this._handleGoBack = this._handleGoBack.bind(this)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'B',
        headerStyle: { backgroundColor: 'deepskyblue', borderWidth: 1, borderBottomColor: 'white', },
        // headerRight: (
        //     <Button
        //         title={'Forward'} onPress={() => navigation.navigate('C', navigation.state.params)}
        //     />
        // ),
    })

    componentDidUpdate() {
        const { navigate } = this.props.navigation
        let params = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
            goBack: this._handleGoBack,
        }
        console.log(this.state, this.props.navigation.state.params)
        if (!this._isEqual(this.props.navigation.state.params, this.state))
            // this.props.navigation.setParams(params)
            console.log('equal state and params')
        // console.log('[DEBUG] show params', this.props.navigation.state.params)
    }

    _isEqual(obj1, obj2) {
        if (obj1 && obj2)
            return (obj1.name === obj2.name && obj1.address === obj2.address && obj1.age === obj2.age)
        else
            return false
    }

    _onChangeName(name) {
        this.setState({ name: name })
    }

    _onChangeAddress(address) {
        this.setState({ address: address })
    }

    _onChangeAge(age) {
        this.setState({ age: age })
    }

    _onGoToC() {
        // forward
        console.log('[DEBUG] on B', 'pressed goto C button')
        const { navigate } = this.props.navigation
        let params = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
            goBack: this._handleGoBack,
        }
        navigate('C', params)
    }

    _onGoToA() {
        // backward
        console.log('[DEBUG] on B', 'pressed goto A button')
        const { navigate } = this.props.navigation
        let params = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
        }
        this.props.navigation.goBack()
        this.props.navigation.state.params.goBack('A', params)
    }

    _handleGoBack(key, backParams) {
        if (key !== 'B') {
            this.props.navigation.goBack()
            this.props.navigation.state.params.goBack('A', backParams)
        } else {
            this.setState(backParams)
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                <View style={[styles.center, styles.container]}>
                    <View style={[styles.container, styles.center]}>
                        <Input textLabel={'Name'} text={this.state.name} onChangeText={this._onChangeName} />
                        <Input textLabel={'Address'} text={this.state.address} onChangeText={this._onChangeAddress} />
                        <Input textLabel={'Age'} text={this.state.age} onChangeText={this._onChangeAge} />
                        <CustomButton title={'GO to C'} color={'white'} onPress={this._onGoToC} />
                        <CustomButton title={'GO to A'} color={'white'} onPress={this._onGoToA} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    center: {
        // justifyContent: 'center',
        alignItems: 'center',
    }
})


export default B