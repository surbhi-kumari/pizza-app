import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPizza } from '../action/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

import { getAllPizzasById } from '../action/pizzaActions';

const Editpizza = ({ match }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [smallprice, setSmallprice] = useState();
  const [mediumprice, setMediumprice] = useState();
  const [largeprice, setLargeprice] = useState();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getpizzabyidstate;
  const editPizzastate = useSelector((state) => state.editPizzaReducer);
  const { editloading, editsuccess } = editPizzastate;
  useEffect(() => {
    if (pizza) {
      if (pizza._id == match.params.pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmallprice(pizza.prices[0]['small']);
        setMediumprice(pizza.prices[0]['medium']);
        setLargeprice(pizza.prices[0]['large']);
        setImage(pizza.image);
      } else {
        dispatch(getAllPizzasById(match.params.pizzaid));
      }
    } else {
      dispatch(getAllPizzasById(match.params.pizzaid));
    }
  }, [pizza, dispatch]);
  function formHandler(e) {
    e.preventDefault();
    const editedpizza = {
      _id: match.params.pizzaid,
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
    dispatch(editPizza(editedpizza));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Pizza</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (
          <Success success="Pizza details edited Successfully " />
        )}
        {editloading && <Loading />}
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
            placeholder="Image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editpizza;
