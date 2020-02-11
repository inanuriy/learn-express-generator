const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        ref: "data"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: false
    }
});

const DataUser = mongoose.model("dataUser", dataSchema);

module.exports = DataUser;