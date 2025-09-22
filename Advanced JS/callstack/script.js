let callstack = 0;
try {
    function sayHello() {
        callstack++
        sayHello()
    }
    sayHello();
} catch (e) {
    console.log(e.message)
    console.log('call stack size: ', callstack)
}

console.log('end')