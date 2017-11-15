const cp = require("child_process")
const fs = require("fs")

const diskInfoCMD = function() {
    return new Promise((resolve, reject) => {
        let output = ''
        const disk = cp.spawn('wmic', ['logicaldisk'])

        disk.stdout.on('data', (data) => {
            const info = data.toString('utf8')
            output += info
        })
        
        disk.stderr.on('data', (data) => {
            reject(new Error(`${data}`))
        })
        
        disk.on('close', () => {
            const list = output.split('\r\r\n')
            const formattedList = []
            for (let i = 1; i < list.length; i++) {
                const splittedItem = list[i].split(' ').filter((item) => {
                    if (item !== '') {
                        return true
                    }
                })
        
                if (splittedItem.length !== 0) {
                    formattedList.push(splittedItem)
                }
            }
        
            const driveList = []
            formattedList.forEach((item) => {
                if (item[6] === '3') {
                    driveList.push(item[1])
                }
            })

            resolve(driveList)
        });
    })
}

module.exports = diskInfoCMD
