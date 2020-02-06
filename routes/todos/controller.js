const todos = require("../../models/todos");

module.exports = {
    getAll: (req, res) => {
        res.status(200).send({
            message: "Welcome to todos route",
            data: todos
        });
    },

    getById: (req, res) => {
        const { id } = req.params;

        const filterById = todos.filter(item => {
            if (item.id === parseInt(id)) {
                return item;
            }
        })
        res.status(200).send({ message: "Test todos route", data: filterById });
    },

    getByUserName: (req, res) => {
        res.status(200).send({ message: "Test todos route by UserName" });
    }
};
