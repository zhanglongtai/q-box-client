const fs = require("fs")

class UserStore {
    constructor(filePath) {
        this.filePath = filePath
    }

    save(username, session) {
        let settings
        try {
            const data = fs.readFileSync(this.filePath, { encoding: 'utf-8' })
            settings = JSON.parse(data)

            settings.account.userID = username
            settings.accountTemp.userID = username
            settings.account.session = session
            settings.accountTemp.session = session
        } catch (err) {
            throw err
        }

        try {
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(settings, null, 4)
            )
        } catch (err) {
            throw err
        }
    }

    getInfo() {
        try {
            const data = fs.readFileSync(this.filePath, { encoding: 'utf-8' })
            const settings = JSON.parse(data)
            const info = settings.account
            return info
        } catch (err) {
            throw err
        }
    }

    getUsername() {
        const info = this.getInfo()
        return info.userID
    }

    getSession() {
        const info = this.getInfo()
        return info.session
    }
}

module.exports = {
    UserStore: UserStore,
}
