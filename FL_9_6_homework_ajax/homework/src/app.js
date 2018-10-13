// task 1
const http = {};
http.get = url => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                const error = new Error(xhr.statusText);
                error.code = xhr.status;
                reject(error);
            }
        };

        xhr.onerror = () => {
            reject(new Error('Network Error'));
        };

        xhr.send();
    });
};

// task 2
const lat = document.getElementById('display-latitude');
const lon = document.getElementById('display-longitude');
const track = document.getElementById('submit');
const resultWater = document.getElementById('result-for-water');
const resultLand = document.getElementById('result-for-land');
const resultTitle = document.getElementById('result-title');
const load = document.getElementById('load-result');

lat.focus();
const validate = (num) => {
    return isNaN(num) || num.trim() === '';
};

track.addEventListener('click', (e) => {
    e.preventDefault();

    resultWater.classList.remove('result-for-water');
    resultLand.classList.remove('result-for-land');
    resultTitle.innerHTML = null;

    if (validate(lat.value) || validate(lon.value)) {
        resultTitle.innerHTML = `Please enter the correct coordinates`;

        return false;
    }
    if (lat.value > 90 || lat.value < -90 || lon.value > 180 || lat.value < -180) {
        resultTitle.innerHTML = `Please enter the correct coordinates`;

        return false;
    }

    load.classList.add('loading');
    http.get(`https://api.onwater.io/api/v1/results/${lat.value},${lon.value}`)
        .then(responseText => {
            const obj = JSON.parse(responseText);
            load.classList.remove('loading');
            if (obj.water) {
                resultTitle.innerHTML = `You are in the water`;
                resultWater.classList.add('result-for-water');
            } else {
                resultTitle.innerHTML = `You are on the land`;
                resultLand.classList.add('result-for-land');
            }

            return console.log(obj);
        })
        .catch(error => {
            load.classList.remove('loading');

            return console.log(`Rejected: ${error}, limit (15 requests every minute for free)`);
        });
});