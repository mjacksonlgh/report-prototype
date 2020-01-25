import React from 'react';

export default class Month extends React.Component {
  render() {
    const { month } = this.props;
    return (
          <tr>
            <td>
              {month.name}
            </td>
            <td>
              {month.total}
            </td>
          </tr>
    );
  }
}