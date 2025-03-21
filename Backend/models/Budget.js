import mongoose from "mongoose";
 
const expenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
});
 
const budgetSchema = new mongoose.Schema({
    user: String,
    name: String,
    totalAmount: Number,
    expenses: [expenseSchema],
});
 
const Budget = mongoose.model('Budget', budgetSchema);
export default Budget;