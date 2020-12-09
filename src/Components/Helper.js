const monthName = (num) => {
    if (num === 0) {
        return 'Jan';
    } else if (num === 1) {
        return 'Feb';
    } else if (num === 2) {
        return 'Mar';
    } else if (num === 3) {
        return 'April';
    } else if (num === 4) {
        return 'May';
    } else if (num === 5) {
        return 'June';
    } else if (num === 6) {
        return 'July';
    } else if (num === 7) {
        return 'Aug';
    } else if (num === 8) {
        return 'Sep';
    } else if (num === 9) {
        return 'Oct';
    } else if (num === 10) {
        return 'Nov';
    } else if (num === 11) {
        return 'Dec';
    }
}


const getDate = (seconds) => {
    console.log(seconds)
    let milliseconds = seconds * 1000;
    return `${new Date(milliseconds).getDate()} ${monthName(new Date(milliseconds).getMonth())}, ${new Date(milliseconds).getFullYear()}`
}


export default getDate;