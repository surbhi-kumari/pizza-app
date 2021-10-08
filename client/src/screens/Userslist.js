import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, deleteUser } from '../action/userAction';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Userslist = () => {
  const dispatch = useDispatch();
  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { error, loading, users } = usersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      <h1>Users List</h1>
      {loading && <Loading />}
      {error && <Error error="Something went Wrong" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Userslist;
