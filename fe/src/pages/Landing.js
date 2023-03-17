import main from "../assets/images/main.svg";
import styled from "styled-components";
import { Logo } from "../components";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>stracking</span> app
          </h1>
          <p>
            I'm baby schlitz chicharrones lomo af post-ironic jianbing kinfolk
            squid health goth ramps godard sartorial pabst. VHS gochujang raw
            denim live-edge. Cornhole flexitarian franzen locavore snackwave
            asymmetrical tbh schlitz. Cornhole master cleanse scenester
            church-key authentic, before they sold out austin squid dreamcatcher
            live-edge food truck. Mustache fam jean shorts, small batch salvia
            yes plz sus humblebrag jianbing next level. Pour-over keffiyeh
            austin cronut, ugh occupy synth irony.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
