import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';
import css from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    dispatch(setFilter(e.target.value))
  }
  return (
    <div>
      <label>
        <input
          type="text"
          name="filter"
          placeholder="Enter search name"
          onChange={handleChange}
          value={filterValue}
          className={css.filterLabel}
        />
        <button type="reset">Search</button>
      </label>
    </div>
  )
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

