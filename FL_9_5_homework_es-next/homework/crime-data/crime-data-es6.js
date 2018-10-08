const victimDataSource = name => {
    let victimsByName = {
        'John': {
            name: 'John',
            surname: 'Doe',
            age: '99',
            jobTitle: 'Victim'
        },
        'Jennifer': {
            name: 'Jennifer',
            surname: 'Nicker',
            age: '21',
            jobTitle: 'Artist'
        }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (victimsByName.hasOwnProperty(name)) {
                resolve(victimsByName[name]);
            } else {
                reject('unknown victim');
            }
        }, 1000);
    });
}

const crimeDataSource = surname => {
    return new Promise((resolve, reject) => {
        let crimeBySurname = {
            'Doe': {
                title: 'dank memes',
                place: '9gag'
            },
            'Nicker': {
                title: 'robbery',
                place: 'NYC'
            }
        };

        setTimeout(() => {
            if (crimeBySurname.hasOwnProperty(surname)) {
                resolve(crimeBySurname[surname]);
            } else {
                reject('unknown surname');
            }
        }, 500);
    });
}

const loadVictimData = name => {
    return new Promise((resolve, reject) => {
        victimDataSource(name)
            .then(victim => {
                crimeDataSource(victim.surname)
                    .then(crime => {
                        resolve(`${victim.name} ${victim.surname}(${victim.
                            jobTitle}, ${victim.age}) suffered from ${crime.title} in ${crime.place}.`);
                    })
            })
            .catch(error => reject(`Unhandled Promise rejection: ${error}`));
    })
};

loadVictimData('John').then(msg => console.log(msg));
loadVictimData('Jennifer').then(msg => console.log(msg));
loadVictimData('Jss').then(msg => console.log(msg));