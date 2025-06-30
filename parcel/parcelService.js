const db = require('./parcelModel');

const insertParcel = (parcel, callback) => {
    const { trackingId, customerName, deliveryAddress, contactNumber, parcelWeight, parcelSize } = parcel;
    const query = 'INSERT INTO parcels VALUES (?, ?, ?, ?, ?, ?)';
    db.run(query, [trackingId, customerName, deliveryAddress, contactNumber, parcelWeight, parcelSize], callback);
};

const getAllParcels = (callback) => {
    db.all('SELECT * FROM parcels', [], callback);
};

const getParcelById = (id, callback) => {
    db.get('SELECT * FROM parcels WHERE trackingId = ?', [id], callback);
};

module.exports = { insertParcel, getAllParcels, getParcelById };