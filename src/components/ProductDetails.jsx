// import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ name, description, itemNum }) => {
    return (
        <div className="mb-4 mt-8">
            <h2 className="text-xs md:text-sm lg:text-sm text-left">Item {itemNum}</h2>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-left">{name}</h2>
            <h2 className="text-sm md:text-base lg:text-2xl font-bold text-left">{description}</h2>
        </div>
    );
};

ProductDetails.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    itemNum: PropTypes.number.isRequired,
};

export default ProductDetails;
