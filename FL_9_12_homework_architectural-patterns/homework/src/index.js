import './style.scss';

import {htmlText, usersData} from './utils';
import {createStore} from 'redux';
import {LOAD_MORE, REMOVE, SEARCH, newAction} from './actions';
import {reducer} from './reducer';

const root = document.querySelector('.root');
root.innerHTML = htmlText;

const DOM_ELEMENTS = {
    usersList: document.getElementById('users'),
    input: document.getElementById('search'),
    btnMore: document.getElementById('load-more'),
    displayUsers: document.getElementById('display-users'),
    allUsers: document.getElementById('all-users'),
};

const renderList = (users) => {
    const template = users.map((user) => {
        return `
        <li id=${user.id} class="item-raw template-grid">
            <div class="item photo"><img src=${user.picture} alt="picture"></div>
            <div class="item name">${user.name}</div>
            <div class="item adress">${user.location}</div>
            <div class="item email">${user.email}</div>
            <div class="item phone-number">${user.phone}</div>
            <div class="item timezone">${user.timezone}</div>
            <div class="item actions"><button class="remove" id="${user.id}">Remove</button></div>
        </li>`;
    }).join('\n');
    DOM_ELEMENTS.usersList.innerHTML = template;
};

const store = createStore(reducer);
renderList(store.getState());

const displayOpenUsers = () => {
    DOM_ELEMENTS.displayUsers.innerText = store.getState().length;
    DOM_ELEMENTS.allUsers.innerText = usersData.getUsers().length;
};
displayOpenUsers();

store.subscribe(displayOpenUsers);
store.subscribe(() => {
    renderList(store.getState());
});

DOM_ELEMENTS.btnMore.addEventListener('click', () => {
    const value = usersData.loadMore();
    const action = newAction(LOAD_MORE, value);
    store.dispatch(action);
});

DOM_ELEMENTS.usersList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const id = event.target.parentElement.parentElement.id;
        const action = newAction(REMOVE, id);
        store.dispatch(action);
    }
});

DOM_ELEMENTS.input.addEventListener('keyup', (event) => {
    const action = newAction(SEARCH, event.target.value);
    store.dispatch(action);
});