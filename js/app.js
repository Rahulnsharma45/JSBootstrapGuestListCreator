 // Guest class

 class Guest {
    constructor(serialNumber, firstName, lastName, phoneNumber, important) {
        this.serialNumber = serialNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.important = important;
    }
 }
 
 // UI class

 class UI {
     static displayGuests() {
         const StoredGuests = [
             {
                 serialNumber: 1,
                 firstName: 'Rahul',
                 lastName: 'Sharma',
                 phoneNumber: '8894250220',
                 important: false
             },
             {
                 serialNumber: 2,
                 firstName: 'Akash',
                 lastName: 'Verma',
                 phoneNumber: '8698634609',
                 important: true
             }
         ];

         const guests = StoredGuests;
         
         guests.forEach((guest) => UI.addGuestToList(guest));
     }

     static addGuestToList(guest) {
        const list = document.querySelector('#guest-list-body');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${guest.serialNumber}</td>
            <td>${guest.firstName}</td>
            <td>${guest.lastName}</td>
            <td>${guest.phoneNumber}</td>
            <td>${guest.important}</td>
            <td><a href='#' class="btn btn-danger btn-sm delete">Delete</a></td>
        `;

         list.appendChild(row);
     }

     static clearFields() {
        document.querySelector('#first-name').value = '';
        document.querySelector('#last-name').value = '';
        document.querySelector('#number').value = '';
        document.querySelector('#important').checked = false;
     }

     static deleteGuest(el) {
         if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
         }
     }
 }

 // Event: display guests

 document.addEventListener('DOMContentLoaded', UI.displayGuests); 

 // Event: add a new guests

 document.querySelector('#guest-form').addEventListener('submit', (e) => {

     e.preventDefault();
     let serialNumber = document.querySelector('#guest-table').rows.length;
     const firstName = document.querySelector('#first-name').value;
     const lastName = document.querySelector('#last-name').value;
     const phoneNumber = document.querySelector('#number').value;
     const important = document.querySelector('#important').value;

     const guest = new Guest(serialNumber, firstName, lastName, phoneNumber, important);

     UI.addGuestToList(guest);

     UI.clearFields();

 });

 // Event: Remove a guest

 document.querySelector('#guest-list-body').addEventListener('click', (e) => {
     UI.deleteGuest(e.target)
 });

 