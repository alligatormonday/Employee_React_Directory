import React from "react";

function TableContent(props) {
    return
    <tr className="table-active">
        <th scope="row">{props.name}</th>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td><img alt={props.name} src={props.picture}></img></td>
    </tr>
}

export default TableContent;