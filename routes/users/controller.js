let users = require("../../models/users");

module.exports = {
    getAll: (req, res) => {
        res.status(200).send({
            message: "Welcome to users data route",
            data: users
        });
    },

    getByEmail: (req, res) => {
        const { email } = req.params;

        const filterByEmail = users.filter(item => {
            if (item.email === email) {
                return item;
            }
        });

        res.status(200).send({
            message: `Data user with email ${email}`,
            data: filterByEmail[0]
        });
    },

    updateByEmail: (req, res) => {
        const { email } = req.params;

        // let updateByEmail = users.filter(item => {
        //     if (item.email === email) {
        //         return item;
        //     }
        // });

        const index = users.map(item => {
            if (item.email === email) {
                return users.indexOf(item);
            }
        });

        let indexOne = 0;
        for (let i = 0; i < index.length; i++) {
            if (i !== undefined) {
                indexOne = index[i];
            }
        }

        users.splice(indexOne, 1, req.body);

        res.status(200).send({ message: "Test update By Email", data: users });
    },

    deleteByEmail: (req, res) => {
        const { email } = req.params;

        // const deleteByEmail = users.filter(item => {
        //     console.log('itemmmmmmmmmmmmm', item)
        //     if (item.email === email) {
        //         users.splice(item, 1);
        //     }
        // });
        const deleteEmail = users.filter(item => {
            if (item.email !== email) {
                return item;
            }
        });
        users = deleteEmail;
        console.log("DELETE", deleteEmail);

        console.log("user", users);
        res.status(200).send({ message: "Test delete By Email", data: users });
    },

    postData: (req, res) => {
        try {
            const data = req.body;
            const file = req.file;

            users.push({ ...data, avatar: file.path });

            console.log(file);

            res.status(200).send({
                message: "New data is successfully added",
                data: users
            });
        } catch (error) {
            console.log(error);
        }
    }
};
