import './table.css';
function EmpTable({data, addData}) {
    
    // };
    return (
        <div>
            <h1>Employee Details</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Empid}</td>
                            <td>{item.Empname}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
         <p></p>
         <p></p>
            <button onClick={addData}>Add Employee</button>
        </div>
    );
}

export default EmpTable;