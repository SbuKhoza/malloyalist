import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, addListing, updateListing, deleteListing } from './store/features/listing/listingSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';  
import Popup from './components/Popup';
import './Home.css';

function Home({ user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();  
    const myListing = useSelector((state) => state.listing);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        quantity: ''
    });
    const [sortOrder, setSortOrder] = useState('A-Z');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);

    useEffect(() => {
        if (searchTerm) {
            const results = myListing.filter(listing =>
                listing.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, myListing]);

    const handleAddListing = (e) => {
        e.preventDefault();
        const existingListing = myListing.find(
            listing => listing.name === formData.name && listing.category === formData.category
        );

        if (existingListing) {
            const updatedListing = {
                ...existingListing,
                quantity: formData.quantity,
            };
            dispatch(updateListing(updatedListing));
        } else {
            const newListing = {
                id: nanoid(),
                name: formData.name,
                category: formData.category,
                quantity: formData.quantity,
            };
            dispatch(addListing(newListing));
        }

        setFormData({ name: '', category: '', quantity: '' });
        setIsPopupOpen(false);
    };

    const handleEditClick = (listing) => {
        setEditingId(listing.id);
        setFormData({
            name: listing.name,
            category: listing.category,
            quantity: listing.quantity
        });
        setIsPopupOpen(true);
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
        setIsPopupOpen(false);
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
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSortChange = () => {
        const newSortOrder = sortOrder === 'A-Z' ? 'Z-A' : 'A-Z';
        setSortOrder(newSortOrder);
    };

    const sortedListings = myListing
        .filter(listing => categoryFilter === 'All' || listing.category === categoryFilter)
        .sort((a, b) => {
            if (sortOrder === 'A-Z') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryFilterChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    return (
        <div className="App">
            <div className="full">
                <div className="dash">
                    <div className="profile"></div>
                    <div className="username">
                        {user?.username}
                    </div>
                    <div className="social"></div>
                    <div className="logout">
                        <button onClick={() => navigate('/Login')}>Logout</button>
                    </div>
                </div>
                <div className="container">
                    <h1>Shop</h1>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="cont">
                        <h2>Add New Item</h2>
                        <button className="Additem" onClick={handleAddClick}>Add</button>
                        <button className="sort" onClick={handleSortChange}>
                            Sort {sortOrder === 'A-Z' ? '(Z-A)' : '(A-Z)'}
                        </button>
                        <select value={categoryFilter} onChange={handleCategoryFilterChange}>
                            <option value="All">All Categories</option>
                            {[...new Set(myListing.map(listing => listing.category))].map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="main-container">
                        {sortedListings.map((listing) => (
                            <div key={listing.id} className="listing-item">
                                <h2>{listing.name}</h2>
                                <p>Category: {listing.category}</p>
                                <p>Quantity: {listing.quantity}</p>
                                <button onClick={() => handleEditClick(listing)}>Edit</button>
                                <button onClick={() => handleDeleteClick(listing.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <
                    <Popup
                        isOpen={isPopupOpen}
                        onClose={handleClosePopup}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={editingId ? handleUpdateListing : handleAddListing}
                        editingId={editingId}
                    />
                    {searchResults.length > 0 && (
                        <Popup
                            isOpen={!!searchTerm}
                            onClose={() => setSearchTerm('')}
                        >
                            <h2>Search Results</h2>
                            {searchResults.map(result => (
                                <div key={result.id} className="listing-item">
                                    <h2>{result.name}</h2>
                                    <p>Category: {result.category}</p>
                                    <p>Quantity: {result.quantity}</p>
                                </div>
                            ))}
                        </Popup>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;