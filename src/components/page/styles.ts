import styled from "styled-components";

export const MenuComponent: React.FC = styled.aside`
  width: 15em;
  /* background-color: #38e314; */
  background-color: #39446e;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  overflow-x: unset;
  left: 0;
  z-index: 2;
  display: block;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 568px) {
    top: 0;
    width: 100%;
  }

  a {
    text-decoration: none;
    padding: 1em 1em;
    display: block;
    color: #000;
    display: flex;
    justify-content: flex-start;
    justify-items: center;
    align-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    margin-left: -15em;

    svg {
      margin-right: 15px;
    }

    :hover {
      background-color: #e3e3;
    }
  }

  .active {
    background-color: #1a243d;

    a {
      cursor: default;
    }
  }

  ul,
  li {
    padding: 0;
    margin: 0;

    .visible {
      display: block;
    }

    ul {
      display: none;
      padding: 0 0 0 1em;
    }
  }

  * {
    list-style: none;
  }
`;

export const NavbarComponent = styled.nav`
  position: fixed;
  width: 100%;
  height: 2.6em;
  top: 0;
  background-color: #39446e;
  display: flex;
  align-content: center;
  align-items: center;

  img {
    width: 60px;
    margin-left: 40px;
    margin-top: 10px;
  }
`;

export const BodyComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.6em;

  div {
    margin-left: 15em;
    padding: 5px;
  }
`;
