const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema of the modal
const TransactionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("transaction", TransactionSchema);
module.exports = Transaction;
