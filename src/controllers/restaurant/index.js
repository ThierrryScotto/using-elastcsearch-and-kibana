'use strict';

// elastcsearch
const elastic = require('../../service/elastcsearch');

const registerRestaurant = async (req, res) => {
    elastic.index({
        index: "restaurant",
        type:  "type_restaurant",
        body:   req.body
    }, (error) => {
        if (error) {
            console.log('Register error', error);
            return res.status(400).json(error);
        }

        return res.status(200).json(req.body);
    });
};

const editRestaurant = async (req, res) => {
    const body = req.body;

    const response = await client.update({
        index: "restaurant",
        type:  "type_restaurant",
        id: req.params.id,
        body: {
          doc: {
            name:              body.name,
            stars:             body.stars,
            Address:           body.Address,
            openingHours:      body.openingHours,
            numberOfEmployees: body.numberOfEmployees
          }
        }
      });

    if (response) {
        return res.status(404).json({ message: "Document not updated" });
    }

    return res.status(200).json(response);
};

const getAllRestaurant = async (req, res) => {
    const response = await client.get({
        index: "restaurant",
        type:  "type_restaurant",
      });

    if (response) {
        return res.status(404).json({ message: "there is not document" });
    }

    return res.status(200).json(response);
};

const getByIdRestaurant = async (req, res) => {
    const response = await client.get({
        index: "restaurant",
        type:  "type_restaurant",
        id: req.params.id
      });

    if (response) {
        return res.status(404).json({ message: "document not found" });
    }

    return res.status(200).json(response);
};

const deletedRestaurant = async (req, res) => {
    try {
        await client.delete({
            index: "restaurant",
            type:  "type_restaurant",
            id: req.params.id
          });

        return res.status(204).json({ message: "Documento deleted" })
    } catch (err) {
        console.log('Error the delete', err);
        return res.status(404).json({ message: "document not found" });
    }
};

module.exports = {
    registerRestaurant,
    editRestaurant,
    getAllRestaurant,
    getByIdRestaurant,
    deletedRestaurant
};