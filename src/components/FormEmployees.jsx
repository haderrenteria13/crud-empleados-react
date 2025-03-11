import React, { useState } from "react";

export default function FormEmployees() {
    const [document, setDocument] = useState ('')
    const [name, setName] = useState ('')
    const [address, setAddress] = useState ('')
    const [phone, setPhone] = useState ('')
    const [status, setStatus] = useState (true)

    const addData = (e) => {
        e.preventDefault()
        sendData ({document, name, address, phone, status})
        setDocument('')
        setName('')
        setAddress('')
        setPhone('')
    }

    return (
        <form  onSubmit={addData}>
            <div>
                <label htmlFor="document">Documento:</label>
                <input type="number" name="document" onChange={(e) => setDocument(e.target.value)} value={document} />
            </div>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label htmlFor="address">Dirección:</label>
                <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} value={address}/>
            </div>
            <div>
                <label htmlFor="phone">Telefono:</label>
                <input type="number" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone}/>
            </div>
            <div>
                <label htmlFor="status">Estado:</label>
                <select name="status" onChange={(e) => setStatus(e.target.value)} value={status} >
                    <option value="active">Activo</option>
                    <option value="inactive">Inactivo</option>
                </select>
            </div>
            <button type="submit">Guardar</button>
        </form>
    )
}