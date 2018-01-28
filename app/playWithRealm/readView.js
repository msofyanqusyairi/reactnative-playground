import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    FlatList,
} from 'react-native'

import { NavigationActions, } from 'react-navigation'

var Realm = require('realm')

import Input from '../../components/input'
import Label from '../../components/label'
import CustomButton from '../../components/button'

import Member from '../../models/playWithRealm/member'
import MemberController from '../../controllers/playWithRealm/memberController'

class ReadView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reload: 0,
            members: []
        }

        this.realm = null
        this._onReload = this._onReload.bind(this)
        this._sortAsc = this._sortAsc.bind(this)
        this._sortDsc = this._sortDsc.bind(this)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'View Members',
    })

    componentWillMount() {
        this.realm = new Realm({ schema: [Member] })
    }

    _fetchMembers() {
        // console.log(this.realm.path)
        member = new MemberController(this.realm)
        console.log('[DEBUG] toarray: ', this._toArray(member.readAll()))
        arrObj = this._toArray(member.readAll())

        return arrObj
    }

    _toArray(objects) {
        let newArr = []
        for (key in objects) {
            newArr.push(objects[key])
        }

        return newArr
    }

    _sortAsc(){
        member = new MemberController(this.realm)
        arrObj = this._toArray(member.readAllWithAscendingByAge())
        sortedMembers = arrObj
        this.setState({members: arrObj})
    }

    _sortDsc(){
        member = new MemberController(this.realm)
        arrObj = this._toArray(member.readAllWithDescendingByAge())
        sortedMembers = arrObj
        this.setState({members: arrObj})
    }

    _renderItem(item) {
        return (
            <View>
                <Text>
                    {'Name: ' + item.name}
                </Text>
                <Text>
                    {'Address: ' + item.address}
                </Text>
                <Text>
                    {'Age: ' + item.age}
                </Text>
            </View>
        )
    }

    _renderFlatList() {
        return (
            <FlatList
                data={this.state.members}
                renderItem={({ item }) => this._renderItem(item)}
                keyExtractor={(item, index) => item.name}
                ItemSeparatorComponent={(highlighted) => (
                    <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
                )}
            />
        )
    }

    _onReload(){
        this.setState({members: (this._fetchMembers())})
    }

    render() {
        console.log('[DEBUG] render readView')
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                <CustomButton title={'Reload'} onPress={this._onReload} />
                <CustomButton title={'Sorting ascending by age'} onPress={this._sortAsc} />
                <CustomButton title={'Sorting descending by age'} onPress={this._sortDsc} />
                {this._renderFlatList()}
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
    },
    separator: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        height: 2,
    }
})


export default ReadView