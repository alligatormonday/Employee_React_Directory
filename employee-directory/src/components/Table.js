

import React from "react";

function Table({ children }) {
    return
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Picture</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
}

export default Table;