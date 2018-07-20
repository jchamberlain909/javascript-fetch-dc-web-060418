const app = "I don't do much.";

const token = '9c8e2dbfabc78ef065e9ac5be4b43206965cb6cb'
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));