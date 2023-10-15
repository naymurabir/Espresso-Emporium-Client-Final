import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {

    const productsDetails = useLoaderData()

    const { photo, name, price, category, description } = productsDetails

    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <div>
            <div className="flex flex-col-md:flex-row md:gap-5 gap-10 my-5 lg:my-10">
                <div className="w-50%">
                    <img className="w-[500px] h-[400px] " src={photo} alt="" />
                </div>
                <div className="w-50%">
                    <h2 className="text-3xl">{name}</h2>
                    <p> {description} </p>
                    <h3 className="text-2xl "> Price: {price} </h3>
                    <h3 className="text-2xl">{category}</h3>

                    <div className="pt-4">
                        <button onClick={handleGoHome} className='text-white font-semibold bg-[#372727] px-4 py-1 rounded'>Go Home</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ProductDetails;