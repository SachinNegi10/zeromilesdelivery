const express = require('express');
const router = express.Router();
const { insertParcel, getAllParcels, getParcelById } = require('./parcelService');

router.post('/', (req, res) => {
    insertParcel(req.body, (err) => {
        if (err) return res.status(500).send(err.message);
        console.log("Parcel Created:", req.body);
        res.status(201).send('Parcel created');
    });
});

router.get('/', (req, res) => {
    getAllParcels((err, rows) => {
        if (err) return res.status(500).send(err.message);
        console.log("All Parcels:", rows);
        res.status(200).json(rows);
    });
});

router.get('/:id', (req, res) => {
    getParcelById(req.params.id, (err, row) => {
        if (err) return res.status(500).send(err.message);
        console.log(req.params.id);
        if (!row) return res.status(404).send('Parcel not found');
        res.status(200).json(row);
    });
});

module.exports = router;
