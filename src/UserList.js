import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  // State to store the list of users
  const [listOfUser, setListOfUser] = useState([]);

  // useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Save the data to state
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {/* Map over the listOfUser state to display the users */}
        {listOfUser.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
