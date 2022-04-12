import { Link } from 'react-router-dom';
import { UserType } from '../../../types/User';

type UserManagerProps = {
  users: UserType[];
  onRemove: (_id: number) => void
}
const userLocal = JSON.parse(localStorage.getItem("user") as string);
const UserManager = (props: UserManagerProps) => {
  return (
    <><div className="col-lg-12 stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">List User</h4>
          <button type="button" className="ml-0 btn btn-inverse-success btn-fw">
            <Link to={`/admin/user/${userLocal.user._id}`}>Add User</Link>
          </button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> # </th>
                <th> Name</th>
                <th> Email </th>
                <th> Edit </th>
              </tr>
            </thead>
            <tbody>
              {props.users.map((u, index) => {
                return <tr>
                  <td>{index + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <button type="button" className="btn btn-inverse-dark btn-fw">
                      <Link to={`/admin/users/${u._id}/edit`}>Edit</Link>
                    </button>
                    <span>                                                </span>
                    <button type="button" className="btn btn-inverse-danger btn-fw" onClick={() => props.onRemove(u._id)}>Remove</button>
                  </td>
                </tr>;
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div></>

  )
}

export default UserManager