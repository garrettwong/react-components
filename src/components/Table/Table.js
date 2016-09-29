import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Table.css';
import Header from './Header';

class Table extends Component {

    static propTypes = {
        headers: PropTypes.array,
        rows: PropTypes.array,

        onClick: PropTypes.func,
    };

    render() {
        return (
            <div>
                <table>
                    <Header headers={this.props.headers} />

                    <tbody>
                        {this.props.rows.map(function(item) {
                            return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(s)(Table);
