import React from "react";
import { Styles } from "./styles";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { GrPinterest } from "react-icons/gr";

function Footer() {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.FirstDiv>
          <h1>Landkit.</h1>
          <p>A Better way to build</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <AiFillInstagram />
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <GrPinterest />
          </div>
        </Styles.FirstDiv>
        <Styles.SecondDiv>
          <h2>Products</h2>
          <p>Page Builder</p>
          <p>Ui kit</p>
          <p>Styleguide</p>
          <p>Documentaion</p>
          <p>Changelogs</p>
        </Styles.SecondDiv>
        <Styles.SecondDiv>
          <h2>SERVICES</h2>
          <p>Documentaion</p>
          <p>Changelogs</p>
          <p>Page Builder</p>
          <p>Ui kit</p>
        </Styles.SecondDiv>
        <Styles.SecondDiv>
          <h2>CONNECT</h2>
          <p>Page Builder</p>
          <p>Ui kit</p>
          <p>Styleguide</p>
          <p>Documentaion</p>
          <p>Changelogs</p>
          <p>Documentaion</p>
          <p>Changelogs</p>
        </Styles.SecondDiv>
        <Styles.SecondDiv>
          <h2>LEGAL</h2>
          <p>Documentaion</p>
          <p>Changelogs</p>
          <p>Page Builder</p>
        </Styles.SecondDiv>
      </Styles.Container>
    </Styles.Wrapper>
  );
}

export default Footer;
