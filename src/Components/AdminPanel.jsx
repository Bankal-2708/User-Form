import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminPanel({ users, setUsers }) {

    const deleteUser = (email) => {
        const updateUser = users.filter((user) => user.email !== email);
        setUsers(updateUser);
        localStorage.setItem("users", JSON.stringify(updateUser));
    }

    const navigate = useNavigate();

    return (
        <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-6 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Admin Panel
            </h2>

            {users.length === 0 ? (
                <p className="text-center text-gray-500">No Users Found</p>
            ) : (
                users.map((user, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-white p-4 rounded-lg mb-3 shadow-sm border"
                    >
                        <div>
                            <p className="font-semibold text-gray-800">
                                {user.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {user.email}
                            </p>
                        </div>

                        <button
                            onClick={() => deleteUser(user.email)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                        >
                            Delete
                        </button>

                    </div>
                ))
            )}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-600"
                >
                    Back
                </button>
            </div>
        </div>
    )
}

export default AdminPanel