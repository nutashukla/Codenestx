
export default function Setheader() {
    const user = JSON.parse(localStorage.getItem('user'))

    // if (user && user.accessToken) {
    //     console.log("before postheader in if part")
    //     return { Authorization: 'Bearer ' + user.accessToken }
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    }
    else {
        console.log("before postheader in else part")
        return {}
    }
}