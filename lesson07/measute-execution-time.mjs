
function measureTime(f) {
	// TODO
	const ret = f()
	console.log(ret)
	return ret
}

function foo() {
	const iterations = 10000000000
	for(let i = 0; i < iterations; ++i);
	return iterations
}

const start = Date.now()
let ret = foo()
const end = Date.now()
const duration = (end-start)/1000
console.log(`Foo took ${duration}s`)

console.log(`Foo returned ${ret}`)

// ---------------------------------------------------

const fooMeasured = measureTime(foo)

ret = fooMeasured()
console.log(`Foo returned ${ret}`)