import React from 'react'
import Home from './Home'

function Popup() {
  return (
    <div>

        <div className='container'>
                <div className="card">
                    <form onSubmit={editingId ? handleUpdateListing : handleAddListing}>
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
                            min="0" 
                        />
                        <button type="submit" className="sav">
                            {editingId ? "Update" : "Save"}
                        </button>
                    </form>
                </div>
            </div>
      
        </div>
  )
}

export default Popup




        

        