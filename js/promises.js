let wait = num => {
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve();



    },num)})};

wait(1000).then(() => console.log("Should see this after 1 second")).catch((error) => console.log(error));
wait(2000).then(() => console.log("Should see this after 2 seconds")).catch((error) => console.log(error));



fetch("https://api.github.com/repos/Hunter-Houts/codeup-web-exercises/commits?path=js", {headers: {'Authorization': 'token ae14accc8611a775dceb9c748c0a97aedb184b1d'}})
    .then(response => console.log(response.json())).then();

