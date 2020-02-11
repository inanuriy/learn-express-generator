// let users = require("../../models/users");

// module.exports = {
//     getAll: (req, res) => {
//         res.status(200).send({
//             message: "Welcome to users data route",
//             data: users
//         });
//     },

//     getByEmail: (req, res) => {
//         const { email } = req.params;

//         const filterByEmail = users.filter(item => {
//             if (item.email === email) {
//                 return item;
//             }
//         });

//         res.status(200).send({
//             message: `Data user with email ${email}`,
//             data: filterByEmail[0]
//         });
//     },

//     updateByEmail: (req, res) => {
//         const { email } = req.params;

//         // let updateByEmail = users.filter(item => {
//         //     if (item.email === email) {
//         //         return item;
//         //     }
//         // });

//         const index = users.map(item => {
//             if (item.email === email) {
//                 return users.indexOf(item);
//             }
//         });

//         let indexOne = 0;
//         for (let i = 0; i < index.length; i++) {
//             if (i !== undefined) {
//                 indexOne = index[i];
//             }
//         }

//         users.splice(indexOne, 1, req.body);

//         res.status(200).send({ message: "Test update By Email", data: users });
//     },

//     deleteByEmail: (req, res) => {
//         const { email } = req.params;

//         // const deleteByEmail = users.filter(item => {
//         //     console.log('itemmmmmmmmmmmmm', item)
//         //     if (item.email === email) {
//         //         users.splice(item, 1);
//         //     }
//         // });
//         const deleteEmail = users.filter(item => {
//             if (item.email !== email) {
//                 return item;
//             }
//         });
//         users = deleteEmail;
//         console.log("DELETE", deleteEmail);

//         console.log("user", users);
//         res.status(200).send({ message: "Test delete By Email", data: users });
//     },

//     postData: (req, res) => {
//         try {
//             const data = req.body;
//             const file = req.file;

//             users.push({ ...data, avatar: file.path });

//             console.log(file);

//             res.status(200).send({
//                 message: "New data is successfully added",
//                 data: users
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }
// };

// MONGOOSE

const { Users } = require("../../models");
const { hashPassword, comparedPassword } = require("../../helpers");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Users.find({});

            res.status(200).send({ message: "Show datas users", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getById: (req, res) => {
        const { id } = req.params;

        const filterById = users.filter(item => {
            if (item.id === parseInt(id)) {
                return item;
            }
        });

        res.status(200).send({
            message: `Data user with id ${id}`,
            data: filterById[0]
        });
    },

    postData: async (req, res) => {
        try {
            const data = req.body;
            const file = req.file;
            const hash = await hashPassword(req.body.password);

            const result = await Users.create({
                ...data,
                avatar: file === undefined ? null : file.path,
                password: hash
            });

            res.status(200).send({
                message: "New data user is successfully added",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },

    login: async (req, res) => {
        try {
            const result = await Users.findOne({ email: req.body.email });

            const compared = await comparedPassword(
                req.body.password,
                result.password
            );
            if (compared === true) {
                res.status(200).send({
                    message: "You are succesfully logged in"
                });
            } else {
                res.status(403).send({
                    message: "You are not a user, please register first"
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
};
