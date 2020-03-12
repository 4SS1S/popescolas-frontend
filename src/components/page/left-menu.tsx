import React, { useState } from "react";

import { MenuComponent } from "./styles";
import { Input, Button, ButtonSuccess, ButtonError } from "../html-components";
import { Gestor } from "./menu";

const Navbar: React.FC = () => {
  const pathName = window.location.pathname;

  const [isSeaching, setIsSearching] = useState<boolean>(false);
  const [searchText, setSerchText] = useState<string>();

  function validSubmit() {
    searchText !== undefined || "" || null
      ? (window.location.href = `/search?s=${searchText}`)
      : setSerchText("");
  }

  return (
    <MenuComponent>
      <div>
        {Gestor.map((i, j) => {
          if ("options" in i) {
            return (
              <li key={j}>
                <a
                  href="?"
                  onClick={e => {
                    e.preventDefault();

                    const menu = document.querySelector(`#menu-${j}`);

                    if (menu?.classList.contains("visible")) {
                      menu.classList.remove("visible");
                    } else {
                      menu?.classList.add("visible");
                    }
                  }}
                >
                  {i.icon && <i.icon />}
                  {i.name}
                </a>

                <ul id={`menu-${j}`}>
                  {i.options !== undefined ? (
                    i.options.map((k, l) => {
                      return (
                        <li
                          key={l}
                          className={k.link === pathName ? "active" : ""}
                        >
                          <a href={k.link}>
                            {k.icon && <k.icon />}
                            {k.name}
                          </a>
                        </li>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={j} className={i.link === pathName ? "active" : ""}>
                {i.link !== "/search" ? (
                  <a href={i.link}>
                    {i.icon && <i.icon />} {i.name}
                  </a>
                ) : (
                  <>
                    {isSeaching ? (
                      <a style={{ display: "block" }}>
                        <Input
                          type="text"
                          placeholder="Buscar..."
                          autoFocus={true}
                          value={searchText}
                          onChange={e => setSerchText(e.target.value)}
                          onKeyUp={e => {
                            if (e.key === "Enter") {
                              validSubmit();
                            }
                          }}
                        />
                        <Button inputType={ButtonSuccess} onClick={validSubmit}>
                          Buscar
                        </Button>
                        <Button
                          inputType={ButtonError}
                          onClick={e => {
                            e.preventDefault();

                            setIsSearching(!isSeaching);
                          }}
                        >
                          Cancelar
                        </Button>
                      </a>
                    ) : (
                      <a
                        href={i.link}
                        onClick={e => {
                          e.preventDefault();

                          setIsSearching(!isSeaching);
                        }}
                      >
                        {i.icon && <i.icon />} {i.name}
                      </a>
                    )}
                  </>
                )}
              </li>
            );
          }
        })}
      </div>
    </MenuComponent>
  );
};

export default Navbar;
