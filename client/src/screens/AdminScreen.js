import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Addpizzas from './Addpizzas';
import Editpizza from './Editpizza';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Userslist from './Userslist';

const AdminScreen = () => {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/';
    }
  }, []);
  return (
    <div>
      <div className="row text-center justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
          <ul className="adminfunctions">
            <li>
              <Link to="/admin/userslist">Users List</Link>
            </li>
            <li>
              <Link to="/admin/pizzaslist">Pizzas List</Link>
            </li>
            <li>
              <Link to="/admin/addpizzas">Add New Pizza</Link>
            </li>
            <li>
              <Link to="/admin/orderslist">Orders List</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
            <Route path="/admin/addpizzas" component={Addpizzas} exact />
            <Route
              path="/admin/editpizza/:pizzaid"
              component={Editpizza}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
