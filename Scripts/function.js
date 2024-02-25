function ticketPress(){
    const ticket = document.getElementById('main-section');
    ticket.classList.remove('hidden')
}

// if you select a seat and this seat is bg green

function ticketSelected(elementId){
    const getTicket = document.getElementById(elementId);
    getTicket.classList.remove('bg-[#F7F8F8]');
    getTicket.classList.add('bg-green');
    getTicket.style.backgroundColor = 'green';
}
    



