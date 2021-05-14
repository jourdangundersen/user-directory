import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

function EmployeeNavbar(props) {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={props.handleHome} href="#">Home</Nav.Link>
                    <NavDropdown title="Sort by" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={props.handleFirstName} href="#">First name</NavDropdown.Item>
                        <NavDropdown.Item onClick={props.handleLastName} href="#">Last name</NavDropdown.Item>
                        <NavDropdown.Item onClick={props.handleEmail} href="#">Email</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <Form.Label>Search by first or last name&nbsp;</Form.Label>
                    <FormControl controlId="Search"type="text" placeholder="Search" className="mr-sm-2" value={props.search} onChange={props.handleChange}/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default EmployeeNavbar;

