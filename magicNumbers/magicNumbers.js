const moment = require('moment'); // require

function isMoreThanADayWithMoment (start, end) {
    const startDate = moment(start);
    const endDate = moment(end);
    return endDate.diff(startDate, 'hours') >= 24
}

function isMoreThanADay  (start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return endDate.getTime() - startDate.getTime() >= 86400000
}

module.exports = {
    isMoreThanADay,
    isMoreThanADayWithMoment
}