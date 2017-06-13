/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Select from 'react-select';

import s from './Layout.css';
import Header from '../Header';

import Table from '../Table';
import DraggableList from '../DraggableList';
import ToggleIconButton from '../ToggleIconButton';

import CommentBox from '../CommentBox';

const headers = ['Name', 'Email', 'Position'];
const rows = [{ name: 'Garrett Wong', email: 'Garrett.Wong@wdc.com', position: 'Chef' }, { name: 'Bryan Lim', email: 'limlam8@gmail.com', position: 'Fantasy Analyst' }];
const listData = ['hi', 'no', 'bye'];
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

function logChange(val) {
  console.log(`Selected ${val}`);
}


function Layout() {
  return (
    <div>
      <Header />

      <div className="margin-container">
        <CommentBox pollInterval="5" />

        <Select
          name="form-field-name"
          value="one"
          options={options}
          onChange={logChange}
        />

        <ul className="componentList">
          <li>
            <Table headers={headers}
              rows={rows}
            />
          </li>

          <li>
            <DraggableList rows={listData} />
          </li>

          <li>
            <ToggleIconButton />
          </li>
        </ul>
      </div>


    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(Layout);
