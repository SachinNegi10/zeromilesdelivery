const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/parcel.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS parcels (
        trackingId TEXT PRIMARY KEY,
        customerName TEXT,
        deliveryAddress TEXT,
        contactNumber TEXT,
        parcelWeight REAL,
        parcelSize TEXT
    )`);
});

module.exports = db;