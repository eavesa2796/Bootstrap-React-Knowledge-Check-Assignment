import Badge from "react-bootstrap/Badge";

const sampleUsers = [
  {
    id: 1,
    first: "Jane",
    last: "Doe",
    email: "jane.doe@example.com",
    status: "Active",
  },
  {
    id: 2,
    first: "John",
    last: "Smith",
    email: "john.smith@example.com",
    status: "Pending",
  },
  {
    id: 3,
    first: "Aisha",
    last: "Rahman",
    email: "aisha.rahman@example.com",
    status: "Inactive",
  },
];

function statusVariant(status) {
  if (status === "Active") return "success";
  if (status === "Pending") return "warning";
  return "secondary";
}

function UsersTable() {
  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="h4 mb-3">Submitted Users (Sample Data)</h2>

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleUsers.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.first}</td>
                  <td>{u.last}</td>
                  <td>{u.email}</td>
                  <td>
                    <Badge bg={statusVariant(u.status)}>{u.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
