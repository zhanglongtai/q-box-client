const fs = require("fs")

class UserStore {
    constructor(filePath) {
        this.filePath = filePath
    }

    save(username, session) {
        let settings
        try {
            settings = fs.readFileSync(this.filePath, { encoding: 'utf-8' })
            settings.account.relevance = username
            settings.accountTemp.relevance = username
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
            const settings = fs.readFileSync(this.filePath, { encoding: 'utf-8' })
            const info = settings.account
            return info
        } catch (err) {
            throw err
        }
    }

    getUsername() {
        const info = this.getInfo()
        return info.relevance
    }

    getSession() {
        const info = this.getInfo()
        return info.session
    }
}

module.exports = {
    UserStore: UserStore,
}
