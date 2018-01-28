import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Alert,
} from 'react-native'

import { NavigationActions, } from 'react-navigation'

var Realm = require('realm')

import CustomButton from '../../components/button'
import Input from '../../components/input'
import Label from '../../components/label'

import Member from '../../models/playWithRealm/member'
import MemberController from '../../controllers/playWithRealm/memberController'

class CreateView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.navigation.state.params ? props.navigation.state.params.name : '',
            address: props.navigation.state.params ? props.navigation.state.params.address : '',
            age: props.navigation.state.params ? props.navigation.state.params.age : '',
        }

        this.realm = null
        this._onChangeName = this._onChangeName.bind(this)
        this._onChangeAddress = this._onChangeAddress.bind(this)
        this._onChangeAge = this._onChangeAge.bind(this)
        this._onCreateNewMember = this._onCreateNewMember.bind(this)
    }

    componentDidMount(){
        this.realm = new Realm({schema: [Member]})
    }

    componentDidUpdate(){
        console.log('[DEBUG] did update')
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Create New Member',
    })

    _onChangeName(name) {
        this.setState({ name: name })
    }

    _onChangeAddress(address) {
        this.setState({ address: address })
    }

    _onChangeAge(age) {
        this.setState({ age: age })
    }

    _onCreateNewMember() {
        let params = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
        }
        member = new MemberController(this.realm)
        member.create(params.name, params.address, parseInt(params.age), (error) => {
            if (error)
                Alert.alert('Error: '+error)
            else
                Alert.alert('Created')
        })
    }

    render() {
        return (
            // <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                <View style={[styles.center, styles.container]}>
                    <View style={[styles.container, styles.center]}>
                        <Input textLabel={'Name'} text={this.state.name} onChangeText={this._onChangeName} />
                        <Input textLabel={'Address'} text={this.state.address} onChangeText={this._onChangeAddress} />
                        <Input textLabel={'Age'} text={this.state.age} onChangeText={this._onChangeAge} />
                        <CustomButton title={'Create a Member'} onPress={this._onCreateNewMember} />
                    </View>
                </View>
            // </ScrollView>
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


export default CreateView