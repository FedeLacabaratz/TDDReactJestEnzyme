import React from 'react';

function Dashboard({ valor }) {
    return (
        <div className="column is-half">
            <div className="box">
                <p>Total</p>
                <strong>{valor}</strong>
            </div>
        </div>
    );
}

export default Dashboard;