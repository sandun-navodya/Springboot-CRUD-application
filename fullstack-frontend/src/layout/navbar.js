import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
  event.preventDefault();
  const stdId = event.target.search.value.trim();
  if (stdId) {
    navigate(`/viewuserbystd/${encodeURIComponent(stdId)}`); // <-- encode here
  } else {
    alert("Please enter a valid Student ID.");
  }
};

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CRUD Application</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto d-flex align-items-start" style={{ position: "absolute",right: "30px" }}>
              <form className="d-flex me-2" onSubmit={handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  name="search"
                  placeholder="Enter Student ID"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
              <Link className="btn btn-outline-light ms-2" to="/adduser">Add User</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}