function getClosestToZero() {
    for (let i = 0; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < Math.abs(arguments[0])) {
            arguments[0] = arguments[i];
        }
    }
    return arguments[0];
}