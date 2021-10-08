import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addpizza } from '../action/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

const Addpizzas = () => {
  const [name, setName] = useState('');
  const [smallprice, setSmallprice] = useState();
  const [mediumprice, setMediumprice] = useState();
  const [largeprice, setLargeprice] = useState();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;

  function formHandler(e) {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };
    console.log(pizza);
    dispatch(addpizza(pizza));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Add Pizza</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Pizza Added Suceesfully" />}
        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small Varient Price"
            value={smallprice}
            onChange={(e) => {
              setSmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium Varient Price"
            value={mediumprice}
            onChange={(e) => {
              setMediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large Varient Price"
            value={largeprice}
            onChange={(e) => {
              setLargeprice(e.target.value);
            }}
          />

          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Add Pizza
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addpizzas;
