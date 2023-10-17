import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';
import swal from "sweetalert";

const Users = () => {

    const loadedUsers = useLoaderData()

    const [users, setUsers] = useState(loadedUsers)

    const handleDeleteUser = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://espresso-emporium-server-e5fc1hl1h-naymur-rahman-abirs-projects.vercel.app/users/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            const remaining = users.filter(user => user._id !== id)
                            setUsers(remaining)
                            if (data.deletedCount > 0) {
                                swal("User has been deleted!", {
                                    icon: "success",
                                });
                            }

                        })
                } else {
                    swal("Your file is safe!");
                }
            });

    }


    return (
        <div>
            <h2 className="text-2xl text-[#352525] font-semibold text-center mt-5">Users Information Table</h2>
            <div className="overflow-x-auto w-full md:w-10/12 lg:w-10/12 mx-auto my-5 md:my-5">
                <table className="table bg-[#352525] text-white">
                    <thead>
                        <tr className="text-white">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Crated At</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th> {index + 1} </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.loggedInAt}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)}>  <AiOutlineDelete className="text-red-500 text-2xl "></AiOutlineDelete> </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
