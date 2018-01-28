class MemberController {
    constructor(realm) {
        this.coll = 'Member2'
        this.db = realm
    }

    create(name, address, age, callback) {
        try {
            this.db.write(() => {
                this.db.create(this.coll, { name: name, address: address, age: age })
                console.log('created')
                callback(null)
            })
        } catch (e) {
            console.log('[DEBUG] error:', e)
            callback(e)
        }
    }

    readAll() {
        try {
            let members = this.db.objects(this.coll)
            console.log('[DEBUG] fetch members', JSON.stringify(members))
            return members
        } catch (e) {
            console.log('[DEBUG] error:', e)
            return null
        }
    }

    readAllWithAscendingByAge() {
        try {
            let members = this.db.objects(this.coll).sorted('age')
            console.log('[DEBUG] fetch members', JSON.stringify(members))
            return members
        } catch (e) {
            console.log('[DEBUG] error:', e)
            return null
        }
    }

    readAllWithDescendingByAge() {
        try {
            let members = this.db.objects(this.coll).sorted('age', true)
            console.log('[DEBUG] fetch members', JSON.stringify(members))
            return members
        } catch (e) {
            console.log('[DEBUG] error:', e)
            return null
        }
    }

    readSomeByName(name) {
        try {
            let members = this.db.objects(this.coll).filtered(`name =  "${name}"`)
            console.log('[DEBUG] fetch members', JSON.stringify(members))
            return members
        } catch (e) {
            console.log('[DEBUG] error:', e)
            return null
        }
    }

    update(name, address, age, callback) {
        try {
            this.db.write(() => {
                this.db.create(this.coll, { name: name, address: address, age: age }, true)
                console.log('updated')
                callback(null)
            })
        } catch (e) {
            console.log('[DEBUG] error:', e)
            callback(e)
        }
    }

    delete(name, callback) {
        members = this.readSomeByName(name)
        console.log('[DEBUG] filtered data:', members)
        if (members.length > 0) {
            try {
                this.db.write(() => {
                    this.db.delete(members)
                    console.log('deleted')
                    callback(null)
                })
            } catch (e) {
                callback(e)
            }
        } else{
            callback ('no matched result')
        }
    }
}

export default MemberController