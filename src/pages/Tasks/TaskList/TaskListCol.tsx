import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const handleValidDate = (date:any) => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
};


const OrdersId = (cell:any) => {
    return (
        <React.Fragment>
            <Link to="/apps-tasks-details" className="fw-medium link-primary">{cell.value}</Link>
        </React.Fragment>
    );
};

const Project = (cell:any) => {
    return (
        <React.Fragment>
            <Link to="/apps-projects-overview" className="fw-medium link-primary">{cell.value}</Link>
        </React.Fragment>
    );
};

const Tasks = (cell:any, onEditIconClick:any, onDeleteIconClick:any) => {
    return (
        <React.Fragment>
            <div className="d-flex">
                <div className="flex-grow-1 tasks_name">{cell.value}</div>
                <div className="flex-shrink-0 ms-4">
                    <ul className="list-inline tasks-list-menu mb-0">
                        <li className="list-inline-item">
                            <Link to="/apps-tasks-details">
                                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" onClick={onEditIconClick}>
                                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" className="remove-item-btn" onClick={onDeleteIconClick}>
                                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

const CreateBy = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const AssignedTo = (cell:any) => {
    return (
        <React.Fragment>
            <div className="avatar-group">
                {(cell.value || []).map((item:any, index:any) => (
                    <Link key={index} to="#" className="avatar-group-item">
                        <img src={item.img} alt="" className="rounded-circle avatar-xxs" />
                    </Link>
                ))}
            </div>
        </React.Fragment>
    );
};

const DueDate = (cell:any) => {
    return (
        <React.Fragment>
            {handleValidDate(cell.value)}
        </React.Fragment>
    );
};

const Status = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value ==1 ?
                <span className="badge bg-secondary-subtle text-secondary text-uppercase">Pending</span>
                :
                cell.value ==2 ?
                    <span className="badge bg-info-subtle text-info text-uppercase">In-progress</span>
                    : cell.value ==3 ?
                        <span className="badge bg-success-subtle text-success text-uppercase">Completed</span>
                            : null
            }
        </React.Fragment>
    );
};

const Priority = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value ==1 ?
                <span className="badge  bg-danger  text-uppercase">High</span>
                :
                cell.value === 2?
                    <span className="badge bg-warning text-uppercase">Medium</span>
                    : cell.value === 3?
                        <span className="badge bg-success text-uppercase">Low</span>
                        : null
            }
        </React.Fragment>
    );
};


export { OrdersId, Project, Tasks, CreateBy, AssignedTo, DueDate, Status, Priority };