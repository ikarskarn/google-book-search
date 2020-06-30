import React from 'react';
import './FilterBar.css';

export default function FilterBar(props) {
    return(
        <div className='filterBar'>
            <form>
                <label htmlFor="printType">Print Type:</label>
                <select
                    name="printType"
                    id="printType"
                    onChange={(e) => props.changePrintType(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>

                <label htmlFor="bookType">Book Type:</label>
                <select
                    name="bookType"
                    id="bookType"
                    onChange={(e) => props.changeBookType(e.target.value)}
                >
                    <option value="ebooks">E-Books</option>
                    <option value="free-ebooks">Free E-Books</option>
                    <option value="full">Full</option>
                    <option value="paid-ebooks">Paid E-Books</option>
                    <option value="partial">Partial</option>
                </select>
            </form>            
        </div>
    );
}