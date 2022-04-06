import React,{memo} from 'react';

const Navbar = ({totalCount}) => {
    return (
        <div className="navbar">
            <i className="navbar-logo fas fa-leaf"></i>
            <span>Habit Tracker</span>
            <span className="navbar-count">{totalCount}</span>
        </div>
    );
};

export default memo(Navbar);