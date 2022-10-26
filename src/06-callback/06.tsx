import React from "react";

export function User() {

    const deleteUser = () => {
        alert("deleted user");
    };

    const saveUser = () => {
        alert("saved user");
    };

    return (
      <div>
          User
          <button onClick={deleteUser}>delete</button>
          <button onClick={saveUser}>save</button>
      </div>
    );
}