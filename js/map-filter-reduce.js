const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users.filter(user => { return user.languages.length >= 3}));
console.log(users.map(user => {return user.email}));
console.log(users.reduce((years, currentNumber) => {return years + currentNumber.yearsOfExperience/ users.length;},0));
console.log(users.reduce((total, user) =>{if (user.email.length > total){total = user.email.length;} return total},0));
console.log(users.reduce((total, user) => {total +=  user.name + " "; return total},"Your instructors are: "));
let languages = [];
users.reduce((total, user) => {languages.push(user.name + ": " + user.languages.toString())})
console.log(languages);