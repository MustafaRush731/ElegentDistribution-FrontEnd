// import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ images }) => {
    return (
        <div className="flex flex-col items-center w-3/5">
            <img src={images[0]} alt="Product" className="w-full rounded-lg" />
            <div className="flex mt-4 space-x-4">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-1/5 rounded-md" />
                ))}
            </div>
        </div>
    );
};

ProductImage.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ProductImage;
