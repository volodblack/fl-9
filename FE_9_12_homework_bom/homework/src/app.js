const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

const divAddNew = document.querySelector('.add-new-item');
divAddNew.style.display = 'none';
const mainPage = document.querySelector('.main-page');
const divModify = document.querySelector('.modify-page');
divModify.style.display = 'none';
const addBtn = document.getElementById('addNewTask');
const saveChangesBtn = document.getElementById('savedBtn');
const saveChangesBtnMod = document.getElementById('savedBtnMod');
const canceldBtn = document.getElementById('canceledBtn');
const canceldBtnMod = document.getElementById('canceledBtnMod');
const inputNew = document.getElementById('input-new');
const inputModify = document.getElementById('input-modify');

canceldBtn.addEventListener('click', toMainPage);
canceldBtnMod.addEventListener('click', toMainPage);

addBtn.onclick = () => {
    mainPage.style.display = 'none';
    divAddNew.style.display = 'block';
    divModify.style.display = 'none';
    const inputNew = document.getElementById('input-new');
    inputNew.focus();
}

saveChangesBtn.onclick = () => {
    mainPage.style.display = 'block';
    divAddNew.style.display = 'none';
    divModify.style.display = 'none';

    const li = document.createElement('li');
    li.className = 'to-do-item';

    const divForCheckSpan = document.createElement('div');
    divForCheckSpan.className = 'check-and-span';

    const check = document.createElement('img');
    check.setAttribute('src','./assets/img/todo-s.png');
    check.className = 'check-button';

    const spanForText = document.createElement('span');
    spanForText.className = 'li-span-text';

    const divForDltBtn = document.createElement('div');
    divForDltBtn.className = 'dlt-btn';
    
    const dltBtn = document.createElement('img');
    dltBtn.setAttribute('src', './assets/img/remove-s.jpg');
    dltBtn.className = 'dlt-btn';
    
    const textLi = document.createTextNode(inputNew.value);
    spanForText.appendChild(textLi);
    textLi.className = 'text-li';

    divForCheckSpan.appendChild(check);
    divForCheckSpan.appendChild(spanForText);

    divForDltBtn.appendChild(dltBtn);

    li.appendChild(divForCheckSpan);
    li.appendChild(divForDltBtn);

    const ulList = document.querySelector('#list');
    ulList.appendChild(li);

    inputNew.value = '';

    const liList = document.getElementsByClassName('to-do-item');
    if (liList.length >= 1) {
        document.querySelector('.empty').style.display = 'none';
    }

    dltBtn.onclick = () => {
        ulList.removeChild(li);
    }
    check.onclick = (e) => {
        if (e.target.classList.contains('check-button')) {
            check.removeAttribute('src');
            check.setAttribute('src', './assets/img/done-s.png')
        }
        check.addEventListener('click', unCheckItem);
        function unCheckItem(e) {
            if (e.target.classList.contains('check-button')) {
                check.removeAttribute('src');
                check.setAttribute('src', './assets/img/todo-s.png')
            }
        }
    }
    console.log(liList);
    spanForText.onclick = () => {
        mainPage.style.display = 'none';
        divAddNew.style.display = 'none';
        divModify.style.display = 'block';
        const liSpanText = document.getElementsByClassName('text-li');
        inputModify.value = liSpanText;
    }

}

saveChangesBtnMod.onclick = () => {
    mainPage.style.display = 'block';
    divAddNew.style.display = 'none';
    divModify.style.display = 'none';
}

function toMainPage() {
    mainPage.style.display = 'block';
    divAddNew.style.display = 'none';
    divModify.style.display = 'none';
    inputNew.value = '';
}

