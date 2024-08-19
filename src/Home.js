import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, addListing } from './store/features/listing/listingSlice';
import { nanoid } from '@reduxjs/toolkit';


function Home() {
    const dispatch = useDispatch();
    const myListing = useSelector((state) => state.listing);

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);

    const handleAddListing = (e) => {
        e.preventDefault();
        const form = e.target;
        const newListing = {
            id: nanoid(),
            name: form.elements[0].value,
            category: form.elements[1].value,
            quantity: form.elements[2].value,
        };
        dispatch(addListing(newListing));
        form.reset();
    };

    return (
        <div className="App">
            <h1>Shop</h1>

            {myListing.map((listing) => (
                <div key={listing.id} className="listing-item">
                    <h2>{listing.name}</h2>
                    <p>Category: {listing.category}</p>
                    <p>Quantity: {listing.quantity}</p>
                </div>
            ))}

            <div className='container'>
                <div className="card">
                    <form onSubmit={handleAddListing}>
                        <input type="text" className="value" placeholder="Item Name" />
                        <input type="text" className="category" placeholder="Category" />
                        <input type="number" placeholder="Quantity" />
                        <button type="submit" className="sav">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;