class Member {
    get name() {
        return this.name
    }

    get address(){
        return this.address
    }

    get age(){
        return this.age
    }
}

Member.schema = {
    name: 'Member2',
    primaryKey: 'name',
    properties: {
        name: 'string', //primary key
        address: 'string',
        age: {type: 'int', default:0},
    }
}

export default Member