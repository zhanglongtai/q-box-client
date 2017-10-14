function baseDeepMerge(target, source) {
    const newObject = {}
    const targetKeys = Object.keys(target)
    const sourceKeys = Object.keys(source)
    let stackKeys = sourceKeys.slice()

    for (let i = 0; i < targetKeys.length; i++) {
        const k = targetKeys[i]
        const sIndex = sourceKeys.indexOf(k)

        if (sIndex !== -1) {
            if (typeof(target[k]) === 'object' || typeof(source[k]) === 'object') {
                newObject[k] = baseDeepMerge(target[k], source[k])
                stackKeys = newArrayAfterPick(stackKeys, sIndex)
            } else {
                newObject[k] = source[k]
                stackKeys = newArrayAfterPick(stackKeys, sIndex)
            }
        } else {
            newObject[k] = target[k]
        }
    }

    if (stackKeys.length !== 0) {
        for (let i = 0; i < stackKeys.length; i++) {
            const k = stackKeys[i]
            newObject[k] = source[k]
        }
    }

    return newObject
}

function newArrayAfterPick(arr, index) {
    const tempArr = arr.slice()
    const newArr = arr.slice(0, index).concat(tempArr.slice(index + 1))
    return newArr
}

function objectDeepMerge(target, source) {
    const argKeys = Object.keys(arguments)
    if (argKeys.length > 2) {
        const stack = []
        
        for (let i = 0; i < argKeys.length; i++) {
            stack.push(arguments[argKeys[i]])
        }
        
        let newObject = null
        while(stack.length > 1) {
            const l = stack.length
            newObject = baseDeepMerge(stack[l - 2], stack[l - 1])
            stack.pop()
            stack[l - 2] = newObject
        }

        return newObject
    } else {
        return baseDeepMerge(target, source)
    }
    
}

export default objectDeepMerge
