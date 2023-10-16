import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData([])

    return (
        <div>

            <div className="overflow-x-auto w-2/4 mx-auto my-10">
                <table className="table bg-[#352525] text-white">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Crated At</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            loadedUsers.map((user, index) => <tr key={user._id}>
                                <th> {index + 1} </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;