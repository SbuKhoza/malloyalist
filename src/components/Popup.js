import React from 'react';

function Popup({ isOpen, onClose, formData, handleChange, handleSubmit, editingId, handleShare }) {
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
              name="additionalNotes"
              className="additional" 
              placeholder="Additional Notes" 
              value={formData.additionalNotes}
              onChange={handleChange} 
            />

            <button type="submit" className="sav">
              {editingId ? "Update" : "Save"}
            </button>
            <button type="button" className="share" onClick={handleShare}>
              Share Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
