import React from 'react'
import './DisplayTable.css'
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const DisplayTable = ({ users,
    selectedRows,
    handleseletedRows,
    handleseletAllRows,
    handleDelete,
    handleEdit,
  }) => {
    // const currentpages=users.slice(0,10)
    return (
      <>
        {users.length > 0 ? (
          <table  className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" 
                  checked={selectedRows.length ===users.length} 
                  onChange={handleseletAllRows}
                  className="checkbox-input"
                  />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((getUserdata, index) => (
                <tr key={index}
                className={
                  selectedRows.includes(getUserdata.id) ? "selected" : ""
                }
                >
                  <td>
                    <input type="checkbox" 
                    checked={selectedRows.includes(getUserdata.id)}
                    onChange={(e)=>handleseletedRows(e,getUserdata.id)}
                    />
                  </td>
                  <td>{getUserdata.id}</td>
                  <td>{getUserdata.name}</td>
                  <td>{getUserdata.email}</td>
                  <td>{getUserdata.role}</td>
                  <td className="btn-container">
                    <BiSolidEdit
                     className="button" onClick={() => handleEdit(getUserdata.id)}
                    />
                    <AiOutlineDelete
                     className="button delete" onClick={()=>handleDelete(getUserdata.id)}
                    />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="NoData">No Data avaliable</div>
        )}
      </>
    );
  };

export default DisplayTable