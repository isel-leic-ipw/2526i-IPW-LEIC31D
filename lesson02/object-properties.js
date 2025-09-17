let o1 = {
    n1: 123,
    n2: "Benfica",
    n3: "SLB",
    propName: "You are a dummy JavaScript programmer",
}

// for(let n in o1) {
//     console.log(n)
//     console.log(o1[n])
// }


function showProps(o, propNames) {
    for(let i=0; i < propNames.length; i++) {
        let propName = propNames[i]
        console.log('PropName: ' + propName)
        console.log('PropValue: ' + o[propName])
    }
}

showProps(o1, ['n1', 'n3', 'n5', 'n7', 'propName'])










// for(let n in o1) {
//     console.log('property name:' + n)
//     console.log('property value:' + o1[n])

// }

