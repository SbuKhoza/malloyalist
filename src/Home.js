import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, addListing, updateListing, deleteListing } from './store/features/listing/listingSlice';
import { nanoid } from '@reduxjs/toolkit';
import Popup from './components/Popup';  // Import the Popup component
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const myListing = useSelector((state) => state.listing);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
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
        const newListing = {
            id: nanoid(),
            name: formData.name,
            category: formData.category,
            quantity: formData.quantity,
        };
        dispatch(addListing(newListing));
        setFormData({ name: '', category: '', quantity: '' });
        setIsPopupOpen(false);  // Close the popup after saving
    };

    const handleEditClick = (listing) => {
        setEditingId(listing.id);
        setFormData({
            name: listing.name,
            category: listing.category,
            quantity: listing.quantity
        });
        setIsPopupOpen(true);  // Open the popup for editing
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
        setIsPopupOpen(false);  // Close the popup after updating
    };

    const handleDeleteClick = (id) => {
        dispatch(deleteListing(id));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddClick = () => {
        setEditingId(null);
        setFormData({ name: '', category: '', quantity: '' });
        setIsPopupOpen(true);  // Open the popup for adding new item
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);  // Close the popup
    };

    return (
        <div className="App">
            <h1>Shop</h1>

            <div className="main-container">
                {myListing.map((listing) => (
                    <div key={listing.id} className="listing-item">
                        <h2>{listing.name}</h2>
                        <p>Category: {listing.category}</p>
                        <p>Quantity: {listing.quantity}</p>
                        <button onClick={() => handleEditClick(listing)}>Edit</button>
                        <button onClick={() => handleDeleteClick(listing.id)}>Delete</button>
                    </div>
                ))}

                <h2>Add New Item</h2>
                <button className="Additem" onClick={handleAddClick}>Add</button>
            </div>

            <Popup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={editingId ? handleUpdateListing : handleAddListing}
                editingId={editingId}
            />
        </div>
    );
}

export default Home;