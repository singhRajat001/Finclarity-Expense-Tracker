import React from "react";
import { Card, Row } from "antd";
import "./style.css";
import Button from "../Button";

function Cards({ showExpense, showIncome, income, expense, currentBalance, handleDeleteAll }) {
  return (
    <div>
      <Row className="my-row">
        <Card bordered={true} className="my-card">
          <h2>Current Balance</h2>
          <p>Rs. {currentBalance}</p>

          <Button text="Reset Balance" blue={true} onClick={handleDeleteAll} />
        </Card>
        <Card bordered={true} className="my-card">
          <h2>Total Income</h2>
          <p>Rs. {income}</p>
          <Button text="Add Income" blue={true} onClick={showIncome} />
        </Card>
        <Card className="my-card">
          <h2>Total Expenditure</h2>
          <p>Rs. {expense}</p>
          <Button bordered={true} text="Add Expense" blue={true} onClick={showExpense} />
        </Card>
      </Row>
    </div>
  );
}

export default Cards;
