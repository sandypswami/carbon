/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import InlineCheckbox from '../InlineCheckbox';
import cx from 'classnames';
import { usePrefix } from '../../internal/usePrefix';

interface TableSelectAllProps {
  /**
   * Specify the aria label for the underlying input control
   */
  ariaLabel: string;

  /**
   * Specify whether all items are selected, or not
   */
  checked: boolean;

  /**
   * The CSS class names of the cell that wraps the underlying input control
   */
  className?: string;

  /**
   * Specify whether the checkbox input should be disabled
   */
  disabled?: boolean;

  /**
   * Provide an `id` for the underlying input control
   */
  id: string;

  /**
   * Specify whether the selection only has a subset of all items
   */
  indeterminate?: boolean;

  /**
   * Provide a `name` for the underlying input control
   */
  name: string;

  /**
   * Provide a handler to listen to when a user initiates a selection request
   */
  onSelect: React.MouseEventHandler<HTMLInputElement>;
}

const TableSelectAll = ({
  ariaLabel,
  checked,
  id,
  indeterminate,
  name,
  onSelect,
  disabled,
  className,
}: TableSelectAllProps) => {
  const prefix = usePrefix();
  return (
    <th
      aria-live="off"
      scope="col"
      className={cx(`${prefix}--table-column-checkbox`, className)}>
      <InlineCheckbox
        aria-label={ariaLabel}
        checked={checked}
        id={id}
        indeterminate={indeterminate}
        name={name}
        onClick={onSelect}
        disabled={disabled}
      />
    </th>
  );
};

TableSelectAll.propTypes = {
  /**
   * Specify the aria label for the underlying input control
   */
  ariaLabel: PropTypes.string.isRequired,

  /**
   * Specify whether all items are selected, or not
   */
  checked: PropTypes.bool.isRequired,

  /**
   * The CSS class names of the cell that wraps the underlying input control
   */
  className: PropTypes.string,

  /**
   * Specify whether the checkbox input should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide an `id` for the underlying input control
   */
  id: PropTypes.string.isRequired,

  /**
   * Specify whether the selection only has a subset of all items
   */
  indeterminate: PropTypes.bool,

  /**
   * Provide a `name` for the underlying input control
   */
  name: PropTypes.string.isRequired,

  /**
   * Provide a handler to listen to when a user initiates a selection request
   */
  onSelect: PropTypes.func.isRequired,
};

TableSelectAll.defaultProps = {
  ariaLabel: 'Select all rows in the table',
};

export default TableSelectAll;
