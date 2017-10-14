import log from "./log"
import objectDeepMerge from "./objectDeepMerge"

function beginTest() {
    const arg1 = {}
    const arg2 = {
        a: 1,
        b: {
            c: 1,
            d: 1,
        },
    }
    const arg3 = {
        b: {
            c: 3,
        },
    }
    const arg4 = {
        a: 2,
        b: {
            c: 1,
            d: 1,
            f: {
                e: 1,
                g: 1,
            },
        },
    }
    
    const result1 = objectDeepMerge(arg1, arg2, arg3)
    log(
        {
            a: 1,
            b: {
                c: 3,
                d: 1,
            },
        },
        result1
    )

    const result2 = objectDeepMerge(arg3, arg4)
    log(
        {
            a: 2,
            b: {
                c: 1,
                d: 1,
                f: {
                    e: 1,
                    g: 1,
                },
            },
        },
        result2
    )
}

beginTest()
