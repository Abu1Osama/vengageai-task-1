const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String, required: true, unique: true },
  address: { type: String },
});

const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = { ContactModel };
