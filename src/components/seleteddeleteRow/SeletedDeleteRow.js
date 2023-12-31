import React from 'react'
import "./SeletedDeleteRow.css"

const SeletedDeleteRow = ({ handleDeleteseleted, selectedRows }) => {
    return (
      <button
        onClick={handleDeleteseleted}
        disabled={selectedRows.length === 0}
        className="delete-selected-button"
      >
        Delete Selected
      </button>
    );
  };

export default SeletedDeleteRow