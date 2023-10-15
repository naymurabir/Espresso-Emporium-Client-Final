import PropTypes from 'prop-types';
import { FaRegEye, FaEdit, } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = ({ product, handleDeleteCoffee }) => {

    const { _id, name, price, quantity, photo } = product

    return (
        <div>
            <div className="card card-compact shadow-md p-2">
                <img className='w-full h-[200px] md:h-[250px]' src={photo} alt="Coffee" />
                <div className="">
                    <h2 className='text-2xl font-bold mt-2'> {name} </h2>

                    <div className='flex justify-around mt-2'>
                        <h3 className='text-xl'>Price:  {price} </h3>
                        <h3 className='text-xl'> Available: {quantity} </h3>
                    </div>

                    <div className='flex justify-around my-3'>
                        <FaRegEye className='text-3xl text-[#df9b42]'></FaRegEye>

                        <Link to={`/updateCoffee/${_id}`}>
                            <FaEdit className='text-3xl text-black'></FaEdit>
                        </Link>

                        <AiOutlineDelete onClick={() => handleDeleteCoffee(_id)} className='text-3xl text-red-500'></AiOutlineDelete>
                    </div>

                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleDeleteCoffee: PropTypes.func.isRequired
}

export default Product;