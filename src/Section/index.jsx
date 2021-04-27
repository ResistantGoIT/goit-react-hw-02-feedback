import React from 'react';
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
    return (
        <div>
            {title}
            {children}
        </div>
    );
};
Section.propTypes = {
    title: PropTypes.object
}

export default Section;