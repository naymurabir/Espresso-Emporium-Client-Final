import swal from "sweetalert";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const quantity = form.get('quantity')
        const price = form.get('price')
        const description = form.get('description')
        const category = form.get('category')
        const photo = form.get('photo')
        const newCoffee = { name, quantity, price, description, category, photo }
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "A new Coffee is added successfully.",
                        icon: "success",
                        button: "Close!"
                    });
                }
                e.target.reset()
            })
    }

    return (
        <div>
            <div className="md:w-3/4 lg:w-2/4 mx-auto text-center bg-gray-200 px-5 py-4 my-10 rounded">
                <div className="my-5">
                    <h2 className="text-2xl mb-3 text-black">Add New Coffee</h2>
                    <p className="text-sm text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <div>
                    <form onSubmit={handleAddCoffee}>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Coffee name..." className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Available Quantity </span>
                                </label>
                                <input type="text" name="quantity" placeholder="Quantity..." className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price..." className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description..." className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Category..." className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo url..." className="input input-bordered w-full max-w-xs" />
                            </div>

                        </div>

                        <button className="text-black bg-[#D2B48C] px-3 py-1 rounded w-full mt-3">Add Coffee</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddCoffee;