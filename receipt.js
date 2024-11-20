const ticketData = {
    contacts: {
        Nairobi: "0722177464",
        Nakuru: "0721600678",
        Eldoret: "0722502378",
        Kitale: "0722257014",
        Kabarnet: "0727048145"
    }
};

function submitForm(event) {
    event.preventDefault();
    
    const dept = document.querySelector('.departure-town').value;
    const dest = document.querySelector('.destination-town').value;
    const busFare = document.querySelector('.fare');
    const departureContact = document.querySelector('.deptContact');
    departureContact.innerHTML = `Contact person for ${dept}:  ${ticketData.contacts[dept]}`;
    const destinationContact = document.querySelector('.destContact');
    destinationContact.innerHTML = `Contact person for ${dest}: ${ticketData.contacts[dest]}`;
    
    let ticketNo = document.querySelector('.ticketNo');
    ticketNo.value = ticketNo.value ? parseInt(ticketNo.value) + 1 : 400;

    let seatNo = document.querySelector('.seat');
    seatNo.value = seatNo.value ? parseInt(seat.value) + 1 : 1;
    if (dept === dest) {
        alert("depature and destination cannot be the same");
        busFare.value = 0;
    
    
    }

    
    const receiptDiv = document.querySelector('.receipt');
    const user = document.querySelector('.user').value;
    const date = document.querySelector('.date').value;
    const vehicle = document.querySelector('.vehicle').value;
    // const seat = document.querySelector('.seat').value;
    const passName = document.querySelector('.passName').value;
    const phone = document.querySelector('.phone').value;

    // Populate receipt with form details
    receiptDiv.innerHTML = `
        <h3>Receipt</h3>
        <p><strong>Served by:</strong> ${user}</p>
        <p><strong>Departure:</strong> ${dept}</p>
        <p><strong>Destination:</strong> ${dest}</p>
        <p><strong>Departure Contact:</strong> ${ticketData.contacts[dept]}</p>
        <p><strong>Destination Contact:</strong> ${ticketData.contacts[dest]}</p>
        <hr><p><strong>Ticket No:</strong>MT${ticketNo.value}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Vehicle:</strong> KDP 827K</p>
        <p><strong>Seat No:</strong> ${seatNo.value}</p>
        <p><strong>Fare:</strong> ${busFare.value}</p>
        <p><strong>Passenger Name:</strong> ${passName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p>caution</p>
        <p>1.Incase of an accident money will not be refunded</p>
        <p>2.A ticket once issued cannot be cancelled</p>
    `;
}
