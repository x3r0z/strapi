/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ListHeader from 'components/ListHeader';

import styles from './styles.scss';

function List(props) {
  return (
    <div className={cn('container-fluid', styles.listWrapper)}>
      <div className="row">
        <ul className={styles.ulList}>
          <ListHeader />
        </ul>
      </div>
    </div>
  );
}

List.defaultProps = {};

List.propTypes = {};

export default List;
