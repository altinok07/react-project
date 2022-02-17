import React from "react";
import { Nav, Button } from "react-bootstrap";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Nav.Link>
        <Button id="signUp" variant="primary">
          Kayıt Ol
        </Button>
        <Button variant="primary" onClick={signIn}>
          Giriş Yap
        </Button>
      </Nav.Link>
    </div>
  );
}
