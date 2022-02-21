import React from "react";
import { Image, Nav, Dropdown } from "react-bootstrap";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <Image roundedCircle src="https://via.placeholder.com/25x25" />{" "}
          Hüseyin ALTINOK
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="bi bi-info-square">
            {" "}
            Bilgilerim
          </Dropdown.Item>
          <Dropdown.Item className="bi bi-box-arrow-right" onClick={signOut}>
            {" "}
            Çıkış Yap
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
