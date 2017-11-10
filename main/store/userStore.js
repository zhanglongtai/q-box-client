const fs = require("fs")

class UserStore {
    constructor() {
        this.savePath = ''
    }

    save(username, session) {
        const info = {
            username: username,
            session: session,
        }

        fs.writeFile(this.savePath,
            JSON.stringify(info, null, 4),
            (err) => {
                if (err) {
                    throw err
                } else {
                    event.sender.send('settings-updated')
                }
            }
        )
    }

    getInfo() {
        fs.readFile(this.savePath, (err, data) => {
            if (err) {
                throw err
            } else {
                const info = JSON.parse(data)
                return info
            }
        })
    }

    getUsername() {
        const info = this.getInfo()
        return info.username
    }

    getSession() {
        const info = this.getInfo()
        return info.session
    }
}

module.exports = {
    UserStore: UserStore,
}
