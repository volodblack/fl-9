function *factorial(n){
    let rslt = 1;
    for (let i = 1; i <= n; i++) {
        rslt *= i;
        yield rslt;
    }
}

for (let n of factorial(5)) {
    console.log(n)
}