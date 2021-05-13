const express = require("express");
const router = express.Router();

// Import the modal
const Transaction = require("../../models/Transaction");

/*
 *@route : GET api/transactions
 *@desc : Get all transactions
 *access : public
 */

router.get("/", (req, res) => {
  Transaction.find()
    .sort({ date: -1 })
    .then((transactions) => res.json(transactions));
});

/*
 *@route : POST api/transactions
 *@desc : Create a transaction
 *access : public
 */

router.post("/", (req, res) => {
  const newTxn = new Transaction({
    name: req.body.name,
    amount: req.body.amount,
  });
  newTxn.save().then((transaction) => res.json(transaction));
});

/*
 *@route : Delete api/transactions
 *@desc : Delete a transaction
 *access : public
 */

router.delete("/:id", (req, res) => {
  Transaction.findById(req.params.id)
    .then((transaction) =>
      transaction.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
