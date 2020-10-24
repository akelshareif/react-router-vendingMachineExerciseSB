import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div>
            <h1>Vending Machine</h1>
            <ul>
                <li>
                    <Link to="/soda">Soda</Link>
                </li>
                <li>
                    <Link to="/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/candy">Candy</Link>
                </li>
            </ul>
        </div>
    );
};

export default VendingMachine;
