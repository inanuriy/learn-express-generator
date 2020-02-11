const { DataUser } = require("../../models");
const ObjectId = require("mongodb").ObjectId;

// Database Mongo
module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await DataUser.find({});
            res.status(200).send({ message: "Show all dataUser", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const result = await DataUser.find({ job: req.params.job });

            res.status(200).send({ message: "Show one dataUser", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getById: async (req, res) => {
        try {
            const result = await DataUser.find({ "_id": ObjectId(req.params.id) });
            res.status(200).send({
                message: "find dataUser route by id",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    postData: async (req, res) => {
        try {
            const newData = req.body;
            const result = await DataUser.create({...newData});

            res.status(200).send({ message: "Add new dataUser", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            const result = await DataUser.findOneAndRemove({'_id': ObjectId(req.params.id)});
            res.status(200).send({
                message: "One dataUser has been deleted",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteAll: async (req, res) => {
        try {
            const result = await DataUser.remove({});

            res.status(200).send({
                message: "All dataUser has been deleted",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    updateOne: async (req, res) => {
        try {
            const result = await DataUser.findByIdAndUpdate({ '_id': ObjectId(req.params.id)}, req.body);
            res.status(200).send({
                message: "One dataUser has been updated",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
};
