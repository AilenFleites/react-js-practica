import React from 'react';


export const AddUsersForm = ({handleAddUser}) => {
    const handleSubmit=(event) =>{
        event.preventDefault();
        const {id, name, age, image, height } = event.target
        const newUser = {
            id: id.value,
            name: name.value,
            age: age.value,
            image: image.value,
            height: height.value,
        }
        handleAddUser(newUser);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="id" placeholder="id" type="text"></input>
            <input name="name" placeholder="name"type="text"></input>
            <input name="age" placeholder="age" type="text"></input>
            <input name="image" placeholder="image" type="text"></input>
            <input name="height" placeholder="height" type="text"></input>
            <button type='submit'> Agregar</button>
        </form>
    )
}