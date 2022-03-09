//Record Class: Represents a Record

class Record {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

//UI Class: Handle UI Tasks

class UI {
    static displayRecords() {
        const storedRecords = [];

        const records = storedRecords;

        records.forEach((record) => UI.addRecordToList(record));
    }

    static addRecordToList(record) {
        const list = document.querySelector('#record-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${record.title}</td>
        <td>${record.artist}</td>
        <td><a href="#">X</a></td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#artist').value = '';
    }
}

//Store Class: Handles Storage

//Event: Display Records

document.addEventListener('DOMContentLoaded', UI.displayRecords);

//Event: Add a Record

document.querySelector('#vinyl-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const artist = document.querySelector('#artist').value;

    const record = new Record(title, artist);

    UI.addRecordToList(record);

    UI.clearFields()
});



//Event: Remove a Record
