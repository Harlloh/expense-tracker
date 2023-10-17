import React from "react";
import "./addtransaction.css";
import { FaArrowLeft, FaTheRedYeti } from "react-icons/fa";
import { useState } from "react";
import { useAddTransactions } from "../../hooks/useAddTransaction";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import TopBar from "../../components/TopBar";

export default function AddTransaction() {
  const { addTransaction } = useAddTransactions();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: "",
    transactionType: "expense",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    try {
      addTransaction(formData);
      toast.success("Transaction added succefully", {
        autoClose: 2000,
      });
      setFormData({
        description: "",
        amount: "",
        transactionType: "expense",
      });
    } catch (error) {
      toast.error(error, {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="addTransactionDiv">
      <TopBar p="Add transaction" />
      <form onSubmit={handlSubmit}>
        <div className="form">
          <div className="inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Transaction name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Transaction description"
              required
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              required
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="expense-radio">
              <label htmlFor="expense">Expense</label>
              <input
                type="radio"
                value="expense"
                name="transactionType"
                checked={formData.transactionType === "expense"}
                onChange={handleChange}
              />
            </div>
            <div className="income-radio">
              <label htmlFor="income">Income</label>
              <input
                type="radio"
                name="transactionType"
                value="income"
                checked={formData.transactionType === "income"}
                onChange={handleChange}
              />
            </div>
          </span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
