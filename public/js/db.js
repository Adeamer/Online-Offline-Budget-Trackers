// storing db connection into let variable and creating connection to IndexedDB database
let db;
const request = indexedDB.open('budget_tracker', 1);

// this will happen if the database version changes
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_transaction', { autoIncrement: true });
};
