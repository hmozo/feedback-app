
import React from 'react';
import PropTypes from 'prop-types'

const Header = ({ title, bgColor, color }) => {

    const headerStyle= {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <header style={headerStyle}>
            <div className='container'>
                <h2>{title}</h2>
            </div>
        </header>
    );
}

Header.defaultProps= {
    title: 'Feedback app'
}

Header.propTypes={
    title: PropTypes.string
}

export default Header;
