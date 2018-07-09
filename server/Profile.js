var mongoose = require("mongoose");
// This allows new schema objects to be created
var Schema = mongoose.Schema;
// this creates the database
var profileSchema = new Schema({
  firstName: String,
  lastName: Date,
  phoneNumber: Number,
  age: Number,
  address: {
    street: String,
    city: String,
    state: {
        type: String,
        uppercase: true,
        required: true
//        enum: statesArray
    },
    zip: Number
},
    propertyValue: Number,
    loanAmount: Number,

});
// this allows interaction with the database
var Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;