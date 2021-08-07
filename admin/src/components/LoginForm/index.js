import React, { useState } from "react";

export const LoginForm = () => {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault()
      
    }
    console.log(user, pass)
    return (
        <form>
            <div className="form-group">
            <label>Usuario</label>
            <input type="text" name="user" value={user} className="form-control" onChange={(e)=> setUser(e.target.value)}></input>
            </div>

            <div>
                <label>Contraseña</label>
                <input type="password" name="pass" value={pass} className="form-control" onChange={(e) =>setPass(e.target.value)}></input>
            </div>
            <button type="submit" onSubmit={handleSubmit}>Iniciar sesión</button>
        </form>

    )
};