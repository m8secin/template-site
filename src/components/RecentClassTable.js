import React from "react";

const rows = [
    { tutor: "User_1", number: 460, subject: "Math", status: "Ongoing" },
    { tutor: "User_34", number: 459, subject: "Physics", status: "Finished" },
    { tutor: "User_3", number: 458, subject: "Science", status: "Finished" },
    { tutor: "User_5", number: 457, subject: "Chemistry", status: "Finished" },
];

function RecentClassTable() {
    return (
        <div className="card recent-class">
            <div className="card-header">Recent Class</div>

            <table className="class-table">
                <thead>
                    <tr>
                        <th>Tutor Name</th>
                        <th>Class Number</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.number}>
                            <td>{row.tutor}</td>
                            <td>{row.number}</td>
                            <td>{row.subject}</td>
                            <td
                                className={
                                    row.status === "Ongoing" ? "status ongoing" : "status finished"
                                }
                            >
                                {row.status}
                            </td>
                            <td className="detail-link">Detail</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentClassTable;
