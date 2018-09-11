let wait = num => {
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve();



    },num)})};

wait(1000).then(() => console.log("Should see this after 1 second")).catch((error) => console.log(error));
wait(2000).then(() => console.log("Should see this after 2 seconds")).catch((error) => console.log(error));



let lastUserCommit = () => {
return fetch("https://api.github.com/users/Hunter-Houts/events",{headers: {'Authorization': 'token  818f8ca3a16b43d5972f86146a4dda711d1b3e4e'}})
    .then(response => response.json())
    .then(e => e[0].created_at)
    .catch(error => console.log(error))};

lastUserCommit().then(data => data).then(date => console.log(date));

