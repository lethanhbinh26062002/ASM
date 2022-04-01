import { Link } from 'react-router-dom';
import { UserType } from '../../../types/User';

type UserManagerProps = {
  users: UserType[];
  onRemove: (_id: number) => void
}

const UserManager = (props: UserManagerProps) => {
  return (
    <><div className="col-lg-12 stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">List User</h4>
          <button type="button" className="ml-0 btn btn-inverse-success btn-fw">
            <Link to={`/admin/user/add`}>Add User</Link>
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
              {props.users.map((item, index) => {
                return <tr className="table-info">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email} </td>
                  <td>
                    <button type="button" className="btn btn-inverse-dark btn-fw">
                      <Link to={`/admin/user/${item._id}/edit`}>Edit</Link>
                    </button>
                    <span>                                                </span>
                    <button type="button" className="btn btn-inverse-danger btn-fw" onClick={() => props.onRemove(item._id)}>Remove</button>
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