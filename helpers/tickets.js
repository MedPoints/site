const moment = require('moment');

exports.prepareTicketsData = function(tickets) {
    if (!tickets || (tickets && tickets.length === 0)) {
        return [];
    }

    tickets = tickets.map(ticket => {
        const dateCreated = formatDate(ticket.dateCreated);
        return {
            ...ticket,
            dateCreated
        }
    });

    return tickets;
} 

function formatDate(date) {
    let newDate = new Date(date);

    if (newDate) {
        return moment(newDate).format('YYYY-MM-DD hh:mm:ss');
    }

    return '';
}