import React from 'react';
import Customer from './Customer';
import serviceData from './data/transactions.json';

export default class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: {
        rows: [],
        total: ""
      }
    };
  }

  componentDidMount() {
    this.setState(
      {...this.state, datas: this.getServiceData()
      }
    );
  }

  /* 
    This would usually be a call out to an API to fetch pre-formatted data, or at the very least in a reducer.
    To satisfy the challenge conditions, I will provide mock 'transaction' data, sort/format the data,
    then return it for display.
  */
  getServiceData() {
    let report = { "rows": [] };
    let transactionDate;
    let reward;
    let customerRow;
    let customerMonth;
    let total = 0;
    serviceData.forEach(transaction => {
      reward = this.calculateReward(transaction.amount);
      total += reward;
      transactionDate = transaction.date.substring(0,7);
      customerRow = report.rows.find(row => row.id === transaction.customerId)
       || { "id": transaction.customerId, "name": transaction.customerName, "months": [], "total": 0 };
      customerRow.total += reward;
      customerMonth = customerRow.months.find(month => month.name === transactionDate)
       || { "name": transactionDate, "total": 0 };
      customerMonth.total += reward;
      this.findAndReplaceMonth(customerRow.months, transactionDate, customerMonth)
      this.findAndReplaceCustomer(report.rows, transaction.customerId, customerRow);
    });
    report.total = total;
    return report;
  }

  findAndReplaceCustomer(array, key, value) {
    let foundSw = false;
    array.map(customer => {
      if (customer.id === key) {
        foundSw = true;
        customer = value;
      }
      return customer;
    });
    if (!foundSw) {
      array.push(value);
    }
  }
  findAndReplaceMonth(array, key, value) {
    let foundSw = false;
    array.map(month => {
      if (month.name === key) {
        foundSw = true;
        month = value;
      }
      return month;
    });
    if (!foundSw) {
      array.push(value);
    }
  }

  calculateReward(amount) {
    let reward = 0;
    if (amount > 50) {
      if (amount >= 100) {
        reward += 50 + Math.floor(amount - 100)*2;
      } else { 
        reward += Math.floor((amount - 50));
      }
    }
    return reward;
  }

  render() {
    const { datas } = this.state;
    return (
      <div className="report">
        <table className="report-table">
          { datas.rows.map(customer =>
            <tr className="report-row">
              <td>
              <Customer
                data = { customer }
                />
                </td>
            </tr>
          ) }
          </table>
        <div className="report-total">
          Report Point Total { datas.total }
        </div>
      </div>
    );
  }
}