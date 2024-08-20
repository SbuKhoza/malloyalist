import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, addListing, updateListing } from './store/features/listing/listingSlice';
import { nanoid } from '@reduxjs/toolkit';
import './Home.css';
// import Popup from './components/Popup';


function Home() {
    const dispatch = useDispatch();
    const myListing = useSelector((state) => state.listing);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        quantity: ''
    });

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);

    const handleAddListing = (e) => {
        e.preventDefault();
        const form = e.target;
        const newListing = {
            id: nanoid(),
            name: formData.name,
            category: formData.category,
            quantity: formData.quantity,
        };
        dispatch(addListing(newListing));
        setFormData({ name: '', category: '', quantity: '' });
    };

    const handleEditClick = (listing) => {
        setEditingId(listing.id);
        setFormData({
            name: listing.name,
            category: listing.category,
            quantity: listing.quantity
        });
    };

    const handleUpdateListing = (e) => {
        e.preventDefault();
        const updatedListing = {
            id: editingId,
            ...formData,
        };
        dispatch(updateListing(updatedListing));
        setEditingId(null);
        setFormData({ name: '', category: '', quantity: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'quantity') {
            if (value >= 0) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    return (
        <div className="App">
            <h1>Shop</h1>

            {myListing.map((listing) => (
                <div key={listing.id} className="listing-item">
                    <h2>{listing.name}</h2>
                    <p>Category: {listing.category}</p>
                    <p>Quantity: {listing.quantity}</p>
                    <button onClick={() => handleEditClick(listing)}>Edit</button>
                    <button onClick={() => dispatch(deleteListing(listing.id))}>Delete</button>
                </div>
            ))}


            <h2>Add New Item</h2>

            <button className="Additem">Add</button>

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
    );
}

export default Home;