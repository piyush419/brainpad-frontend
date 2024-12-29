import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginatedComponent = ({ count, page, onPageChange, size = 'medium', color = 'primary' }) => {
   
    

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Pagination
        count={count}           // Total pages
        page={page}             // Current page
        onChange={onPageChange} // Function to call on page change
        size={size}             // Pagination size
        color={color}           // Pagination color
        shape="rounded"         // Optional: Rounded edges for pagination
      />
    </div>
  );
};

export default PaginatedComponent;
