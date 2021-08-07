import React from 'react';

export const Main = ({ children, showSettings }) => {
    return (
        <main className="main bg-light">

            {showSettings && <div className="settings">
                <button className="btn">+</button>
                <button className="btn">-</button>
                </div>}

            {children}
        </main>
    );

};

Main.defaultProps = {
    showSettings : false
}