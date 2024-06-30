import {useRef} from 'react';
import SearchBar from './SearchBar';
import household from '../assets/candy-pic.jpg';
import car from '../assets/car-pic.jpg';
import candy from '../assets/household-pic.jpg';
import medicine from '../assets/medicine-pic.jpg';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductPrice from './ProductPrice';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';


const productData = {
    name: "Great Lake Charcoal",
    description: "Charcoal 6/3.9 LB 6CT GREAT LAKE",
    brand: "Great Lake",
    category: "Cooking",
    price: 29.99,
    item: 1234407,
    images: [
        household,
        car,
        candy
        ,medicine
    ]
};

const AddToCartButton = () => {
    const [quantity, setQuantity] = useState(0);
  
    const handleAddToCart = () => {
      setQuantity(1);
    };
  
    const incrementQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(0);
      }
    };

    const resetCart = () => {
        setQuantity(0);
    };
};


    


const ProductPage = () => {
    const detailsRef = useRef(null);
    const specsRef = useRef(null);
    const shippingRef = useRef(null);

    // how are they diff??
    const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    return (
        <main className="flex flex-col p-4">
            {/* search bar and tabs that will stay across all pages */}
            <SearchBar />

            {/* the images and cart stuff */}
            <div className="flex space-x-4 mt-8">
                <ProductImage images={productData.images} />
                <div className="flex-1 shadow-lg px-4">
                    <ProductDetails name={productData.name} description={productData.description} itemNum={productData.item}/>
                    <ProductPrice price={productData.price}/>
                    <div className="flex items-center mt-8 space-x-4 justify-center">
                        <button className="bg-orange-500 text-white py-5 rounded-xl w-full">Add to cart</button>
                    </div>
                </div>
            </div>

            {/* using w-full but how to get tabes to cover entire width of screen */}
            {/* tabs that lead to more info further down the page */}
            <div className={"sticky top-0 z-10 w-full flex justify-center mt-8 bg-white shadow"}>
                <div className="flex">
                    <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => scrollToRef(detailsRef)}> Product Details</button>
                    <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => scrollToRef(specsRef)}>Specifications</button>
                    <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => scrollToRef(shippingRef)}>Shipping Info</button> 
                </div>
            </div>

{/* to do: make the sections be close but the content within each be padded also add fine gray line to ditsiguish sections */}
            {/* whats ref and what mt 8 and auto */}
            {/* the details info */}
            <div className="w-full max-w-6xl flex flex-col items-start mt-8 bg-white">
                <div className="flex w-full border-gray-200">
                    <section ref={detailsRef} className="py-4 bg-white text-left">
                        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
                        <p>{productData.description}</p>
                    </section>
                </div>

                {/* the specs info */}
                <div className="flex w-full border-t border-gray-200">
                    <section ref={specsRef} className="py-4 bg-white">
                        <h2 className="text-2xl font-bold mb-4 text-left">Specifications</h2>
                        <table className="w-full text-left">
                            <tbody>
                                <tr className="odd:bg-gray-100 even:bg-gray-200">
                                    <td className="py-2 px-40">Brand</td>
                                    <td className="py-2 px-40">{productData.brand}</td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-gray-200">
                                    <td className="py-2 px-40">Category</td>
                                    <td className="py-2 px-40">{productData.category}</td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-gray-200">
                                    <td className="py-2 px-40">Name</td>
                                    <td className="py-2 px-40">{productData.name}</td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-gray-200">
                                    <td className="py-2 px-40">Price</td>
                                    <td className="py-2 px-40">{productData.price}</td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-gray-200">
                                    <td className="py-2 px-40">Misc</td>
                                    <td className="py-2 px-40">{productData.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>

                {/* shipping info */}
                <div className="flex w-full border-t border-b border-gray-200">
                    <section ref={shippingRef} className="py-4 bg-white">
                        <h2 className="text-2xl font-bold mb-4 text-left">Shipping Information</h2>
                        <p className="text-left leading-loose">
                        All prices listed are delivered prices from _. <br />
                        Product availability and pricing are subject to change without notice. Price changes, if any, will be reflected on your order confirmation.<br />
                        For additional questions regarding delivery, please contact _ or call _.<br />
                        </p>
                    </section>
                </div>
             </div>
             {/* similiar items */}
             <section className="min-h-96 py-4 bg-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Similiar Products</h2>
             </section>

             {/* will leave space for bottom links and maybe similiar items */}
             <section className="min-h-96 py-4 bg-gray-400">
                    <h2 className="text-2xl font-bold mb-4">Bottom Links</h2>
             </section>
        </main>
    );
};

export default ProductPage;
