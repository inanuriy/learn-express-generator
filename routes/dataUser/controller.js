const { DataUser } = require("../../models");

// Database Mongo
module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await DataUser.find({}).populate("dataUser");

            res.status(200).send({ message: "Show dataUser", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const result = await DataUser.findOne({ job: req.body.job });

            res.status(200).send({ message: "Show one dataUser", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    postData: async (req, res) => {
        try {
            const result = await DataUser.create(req.body);

            res.status(200).send({ message: "Add new dataUser", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getById: async (req, res) => {
        try {
            const result = await DataUser.find({ id });
            res.status(200).send({
                message: "find dataUser route by id",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            const result = await DataUser.find({ id });
            DataUser.splice({id}, 1);
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
            await DataUser.find({}).populate("dataUser");

            res.status(200).send({
                message: "All dataUser has been deleted",
                data: []
            });
        } catch (error) {
            console.log(error);
        }
    },
    updateOne: async (req, res) => {
        try {
            const result = await DataUser.find({ id });

            DataUser.splice({id}, 1, req.body );
            res.status(200).send({
                message: "One dataUser has been updated",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
};
