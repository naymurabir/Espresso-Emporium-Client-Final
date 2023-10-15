import { useEffect, useState } from "react";
import Product from "./Product/Product";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Products = () => {

    const navigate = useNavigate()
    const handleAddCoffee = () => {
        navigate("/addCoffee")
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleDeleteCoffee = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/coffee/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.deletedCount > 0) {
                                const remaining = products.filter(product => product._id !== id)
                                setProducts(remaining)

                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            }

                            swal("Poof! The coffee has been deleted!", {
                                icon: "success",
                            });
                        })
                } else {
                    swal("Your file is safe!");
                }
            });


    }

    return (
        <div>
            <h2 className="text-3xl font-semibold mt-5">Our Popular Products</h2>
            <button onClick={handleAddCoffee} className="bg-[#E3B577] text-white px-3 py-1 border border-black mt-2 rounded">Add Coffee</button>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-10">
                {
                    products.map(product => <Product key={product._id} product={product} handleDeleteCoffee={handleDeleteCoffee}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;