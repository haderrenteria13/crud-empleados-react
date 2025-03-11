import React from "react";

export default function ListEmployees({ saveData }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {saveData.map((user, index) => (
                    <tr key={index}>
                        <td>{user.document}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                        <td>{user.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}