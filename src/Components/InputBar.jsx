import React, { useEffect, useState } from 'react'

function InputBar() {

    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem("users");
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

        const userExists = users.some((user) => user.email === email); // chek if email alredy saves

        if (userExists) {
            alert("User already exists with this email!");
            return;
        }

        const newUser = {
            name: name,
            email: email,
            password: password
        };

        setUsers((prev) => [...prev, newUser]);


        setName("");// these will clear input fileds after clicking on submit btn or press enter
        setEmail("");
        setPassword("");

    };

    const submitEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-87.5">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Enter Your Detail
                </h1>

                <div className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={submitEnter}
                        className="border rounded-lg px-4 py-2"
                    />

                    <input
                        type="email"
                        placeholder="Enter Your Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={submitEnter}
                        className="border rounded-lg px-4 py-2"
                    />

                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={submitEnter}
                        className="border rounded-lg px-4 py-2"
                    />

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>

                {/* <ul className="mt-6">
                    {users.map((user, index) => (
                        <li key={index} className="border p-2 mt-2 rounded">
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Email:</b> {user.email}</p>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default InputBar