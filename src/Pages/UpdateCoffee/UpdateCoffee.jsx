import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateCoffee = () => {

    const loadedProduct = useLoaderData()
    const { _id, name, price, quantity, photo, category, description } = loadedProduct


    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const quantity = form.get('quantity')
        const price = form.get('price')
        const description = form.get('description')
        const category = form.get('category')
        const photo = form.get('photo')
        const updatedCoffee = { name, quantity, price, description, category, photo }
        console.log(updatedCoffee);

        fetch(`https://espresso-emporium-server-e5fc1hl1h-naymur-rahman-abirs-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal({
                        title: "Good job!",
                        text: "A Coffee is updated successfully.",
                        icon: "success",
                        button: "Close!"
                    });
                }
            })
    }

    return (

        <div>
            <div className="md:w-3/4 lg:w-2/4 mx-auto text-center bg-gray-200 px-5 py-4 my-10 rounded">
                <div className="my-5">
                    <h2 className="text-2xl mb-3 text-black">Update Coffee</h2>
                    <p className="text-sm text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <div>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Coffee name..." className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Available Quantity </span>
                                </label>
                                <input type="text" name="quantity"
                                    defaultValue={quantity} placeholder="Quantity..." className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Price..." className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" defaultValue={description} placeholder="Description..." className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={category} placeholder="Category..." className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo url..." className="input input-bordered w-full max-w-xs" />
                            </div>

                        </div>

                        <button className="text-black bg-[#D2B48C] px-3 py-1 rounded w-full mt-3">Update Coffee</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;