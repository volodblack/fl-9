import data from './data';

const htmlText = `
<header>
    <div class="fixed-header">
        <span>Search by name:</span>
        <input type="text" id="search" placeholder="Enter user name">
    </div>
</header>

<main>
    <ul class="container-for-users">
        <div>
            <li class="headers-columns template-grid">
                <div>Photo</div>
                <div>Name</div>
                <div>Adress</div>
                <div>Email</div>
                <div>Phone number</div>
                <div>Timezone</div>
                <div>Actions</div>
            </li>
        </div>
        <div id="users"></div>
    </ul>
</main>

<footer>
    <div class="fixed-footer">
        <div class="text-footer">Display 
            <span id="display-users"></span> users out of 
            <span id="all-users"></span>
        </div>
        <button id="load-more" class="load-more">LOAD MORE</button>
    </div>
</footer>
`;

const users_default = 5;
const step = 5;
const usersData = userItems(data);

function userItems(defaultUsers) {
    let users = defaultUsers;
    let show = users_default;
    const getUsers = () => {
        return users;
    };
    const showByDefault = () => {
        return users.slice(0, users_default);
    };
    const loadMore = () => {
        return users.slice(show, show += step);
    };
    const removeUser = (id) => {
        return users = users.filter((user) => user.id !== id);
    };
    return {
        getUsers,
        showByDefault,
        loadMore,
        removeUser
    };
}

export {htmlText, usersData};