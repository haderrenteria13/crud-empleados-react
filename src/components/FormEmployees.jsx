import React from "react";

export default function FormEmployees() {
    return (
        <form>
            <div>
                <label htmlFor="documento">Documento:</label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="address">Dirección:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="phone">Telefono:</label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="status">Estado:</label>
                <select name="status" id="status-select">
                    <option value="active">Activo</option>
                    <option value="inactive">Inactivo</option>
                </select>
            </div>
        </form>
    )
}