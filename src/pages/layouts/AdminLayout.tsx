import React from 'react'
import { Outlet, Link } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div className="container-scroller">
            {/* partial */}
            <div className="container-fluid page-body-wrapper">
                {/* partial:../../partials/_sidebar.html */}
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item nav-profile">
                            <a href="#" className="nav-link">
                                <div className="nav-profile-image">

                                    <span className="login-status online" />
                                    {/*change to offline or busy as needed*/}
                                </div>
                                <div className="nav-profile-text d-flex flex-column">
                                    <span className="font-weight-bold mb-2">Binhltph16803</span>
                                    <span className="text-secondary text-small">Project Manager</span>
                                </div>
                                <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                            </a>
                        </li>
                        <li className="nav-item ">
                            <Link to={`dashboard`}>
                                <span className="nav-link menu-title">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`product`}>
                                <span className="nav-link menu-title">Products</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`user`}>
                                <span className="nav-link menu-title">Users</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span className="menu-title">Forms</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../../pages/charts/chartjs.html">
                                <span className="menu-title">Charts</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span className="menu-title">Tables</span>
                                <i className="mdi mdi-table-large menu-icon" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                                <span className="menu-title">Sample Pages</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* partial */}
                <div className="main-panel">

                    <Outlet />
                    <div className="content-wrapper">
                    </div>

                    {/* content-wrapper ends */}
                    {/* partial:../../partials/_footer.html */}
                    <footer className="footer">
                    </footer>
                    {/* partial */}
                </div>
                {/* main-panel ends */}
            </div>
            {/* page-body-wrapper ends */}
        </div>

    )
}

export default AdminLayout