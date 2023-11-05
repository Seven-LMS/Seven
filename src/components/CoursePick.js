import React, { useEffect, useState } from "react";
import axios from "axios";

function CoursePick() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3005/')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    })

    return (
        <div className="content"> {/* Use className for defining CSS classes in JSX */}
        <h2>Ini Course Pick</h2>
        <table>
            <thead>
                <tr>
                    <th>cid</th>
                    <th>course name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}> {/*It's a good practice to add a unique 'key' prop when mapping */}
                        <td>{d.cid}</td>
                        <td>{d.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default CoursePick;