// storing db connection into let variable and creating connection to IndexedDB database
let db;
let budgetVersion;
const request = indexedDB.open('budget_tracker', 1);

