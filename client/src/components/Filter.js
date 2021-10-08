import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterPizzas } from '../action/pizzaActions';

const Filter = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('');
  const [category, setCategory] = useState('all');
  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Pizzas"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
        </div>
        <div className=" col-md-3 mt-2">
          <select
            className="w-100 p-2"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="veg">veg</option>
            <option value="nonveg">nonveg</option>
          </select>
        </div>
        <div className="col-md-3 mt-2">
          <button
            className="btn"
            onClick={() => {
              dispatch(filterPizzas(searchKey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
