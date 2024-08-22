import React from 'react';



function Popup({ isOpen, onClose, formData, handleChange, handleSubmit, editingId }) {
  if (!isOpen) return null;

  return (
    <div className='popup-overlay' onClick={onClose}>
      <div className='container' onClick={(e) => e.stopPropagation()}>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              className="value" 
              placeholder="Item Name" 
              value={formData.name}
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="category"
              className="category" 
              placeholder="Category" 
              value={formData.category}
              onChange={handleChange} 
            />
            <input 
              type="number" 
              name="quantity"
              placeholder="Quantity" 
              value={formData.quantity}
              onChange={handleChange}
              min="1" 
            />

            <input 
              type="text" 
              name="name"
              className="value" 
              placeholder="Adititional" 
              value={formData.name}
              onChange={handleChange} 
            />

            <button type="submit" className="sav">
              {editingId ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;