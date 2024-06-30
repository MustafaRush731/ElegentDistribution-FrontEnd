// import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({ price }) => {

    return (
        <div className="flex items-baseline text-left space-x-4 mt-8">
            <span className="text-base md:text-2xl lg:text-4xl font-semibold text-orange-500">${price}</span>
        </div>
    );
};

ProductPrice.propTypes = {
    price: PropTypes.number.isRequired,
};



export default ProductPrice;
