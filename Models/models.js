const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    //FIRST NAME
    firstName: {
      type: String,
      minlength: [2, "First name must be at least 2 characters long"],
      maxlength: [30, "First name must be less than 30 characters"],
      required: true,
    },

    //LAST NAME
    lastName: {
      type: String,
      minlength: [2, "Last name must be at least 2 characters long"],
      maxlength: [30, "Last name must be less than 30 characters"],
      required: true,
    },

    //EMAIL ADDRESS
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
      lowercase: true,
      trim: true,
    },

    // PHONE NUMBER
    phoneNumber: {
      type: String,
      required: true,
      minlength: [11, "Phone number must be at least 11 characters long"],
      maxlength: [11, "Phone number must be less than 11 characters"],
    },

    //USER ROLE
    role: {
      type: String,
      required: true,
      enum: [
        "Software Enginner",
        "Product designer",
        "Social Manager",
        "Content Creator",
        "Business Development Analyst",
        "Data Scientist",
        "Product Manager",
        "Cleaner",
      ],
    },

    //DATE OF resumption
    date_of_resumption: {
      type: Date,
    },

    // GENDER
    gender: {
      type: String,
    },

    //ADDRESS
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const Employees = mongoose.model("Employees", employeeSchema);

// Export MOdel
module.exports = Employees;
