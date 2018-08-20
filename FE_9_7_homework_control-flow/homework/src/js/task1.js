const minLogin = 4;
const eightClock = 20;
const login = prompt('Enter your login','Your login');

userEnter(login);

function userEnter(login) {
    if (login === '' || login === null) {
        alert('Canceled');
    } else if (login.length < minLogin) {
        alert("I don't know any users having name length less than 4 symbols");
    } else if (login === 'User') {
        const password = prompt('Enter your password','Your password'); 
        if (password === '' || password === null) {
            alert('Canceled');
        } else if (password === 'SuperUser') {
            alert(new Date().getHours() < eightClock ? 'Good day!' : 'Good evening!');
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you')
    }
}