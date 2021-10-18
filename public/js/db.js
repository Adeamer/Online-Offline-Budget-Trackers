// storing db connection into let variable and creating connection to IndexedDB database
let db;
let budgetVersion;
const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');

    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;

    console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);

    db = e.target.result;

    if (db.objectStoreNames.length === 0) {
        db.createObjectStore('BudgetStore', { autoIncrement: true });
    }
};

request.onerror = function (e) {
    console.log(`Woops! ${e.target.errorCode}`);
};

// Will store the data in the cache when offline.
function saveRecord(record) {
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    const budgetObjectStore = transaction.objectStore('new_transaction');
  
    budgetObjectStore.add(record);
};
