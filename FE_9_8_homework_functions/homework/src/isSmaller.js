function isSmaller(a,b) { 
    return a < b; 
    /* return !isBigger(a,b); I considered reuse isBigger function as indicated in the task, 
    but eslint show an error:''isBigger' is not defined  no-undef'*/
}