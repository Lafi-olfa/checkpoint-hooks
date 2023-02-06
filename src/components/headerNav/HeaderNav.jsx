import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Filter from "../filter/Filter";

const HeaderNav = ({ search, handelsearch,fil,handelrating}) => {
  return (
    <div>
      {/* input + component filter */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Navbar.Brand id="logo" href="#home">j.movies</Navbar.Brand>
            <div id="text">
              <input type="text" value={search} onChange={handelsearch} />
              <p style={{ color: "red" }}>
                {" "}
                <Filter rating={fil} handelrating={handelrating} />{" "}
              </p>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
