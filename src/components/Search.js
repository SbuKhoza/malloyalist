import React from "react";
import './Search.css';

function Search({ searchResults, onClose }) {
    return (
        <div className="search-popup">
            <div className="search-popup-content">
                <h2>Search Results</h2>
                {searchResults.length > 0 ? (
                    searchResults.map(result => (
                        <div key={result.id} className="listing-item">
                            <h2>{result.name}</h2>
                            <p>Category: {result.category}</p>
                            <p>Quantity: {result.quantity}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Search;