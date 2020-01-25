import React from 'react';
import Month from './Month';

export default class Customer extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="customer">
        <table className="customer-table">
          <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td colSpan="2" className="month-table-container">
            <table className="month-table">
              <thead>
              <tr>
                <th>Month</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody>
              { data.months.map(aMonth =>
                <Month
                  month = { aMonth }
                  />
              ) }
              </tbody>
            </table>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="customer-total">
                Customer Point Total {data.total}
              </div>    
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}