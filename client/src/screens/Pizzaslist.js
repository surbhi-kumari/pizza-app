import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPizzas, deletePizza } from '../action/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <h2>Pizzas List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went Wrong" />}
      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => {
              return (
                <tr>
                  <td>{pizza.name}</td>
                  <td>
                    Small:{pizza.prices[0]['small']}
                    <br />
                    Medium: {pizza.prices[0]['medium']}
                    <br />
                    Large: {pizza.prices[0]['large']}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <i
                      className="fa fa-trash m-1"
                      onClick={() => {
                        dispatch(deletePizza(pizza._id));
                      }}
                    ></i>
                    <Link to={`/admin/editpizza/${pizza._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Pizzaslist;
