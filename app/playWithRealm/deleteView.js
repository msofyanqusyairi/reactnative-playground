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

class DeleteView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.navigation.state.params ? props.navigation.state.params.name : '',
            address: props.navigation.state.params ? props.navigation.state.params.address : '',
            age: props.navigation.state.params ? props.navigation.state.params.age : '',
        }

        this.realm = null
        this._onChangeName = this._onChangeName.bind(this)
        this._onDeleteMember = this._onDeleteMember.bind(this)
    }

    componentDidMount(){
        this.realm = new Realm({schema: [Member]})
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Delete Member',
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

    _onDeleteMember() {
        member = new MemberController(this.realm)
        member.delete(this.state.name, (error) => {
            if (error)
                Alert.alert('Error: '+error)
            else
                Alert.alert('Deleted')
        })
    }

    render() {
        return (
            // <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                <View style={[styles.center, styles.container]}>
                    <View style={[styles.container, styles.center]}>
                        <Text>{'Delete members by name'}</Text>
                        <Input textLabel={'Name'} text={this.state.name} onChangeText={this._onChangeName} />
                        <CustomButton title={'Delete Member'} onPress={this._onDeleteMember} />
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


export default DeleteView