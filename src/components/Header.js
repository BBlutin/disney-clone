import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function Header() {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
      
    }, [isActive]);

    return (
        <Nav>
            <Link to="/">
                <Logo src="/images/logo.svg" />
            </Link>
            <NavMenu>
                <Link to="/" >
                    <img src="/images/home-icon.svg" />
                    <span>ACCUEIL</span>
                </Link>
                <Link href="#" >
                    <img src="/images/search-icon.svg" />
                    <span>RECHERCHE</span>
                </Link>
                <Link href="#" >
                    <img src="/images/watchlist-icon.svg" />
                    <span>MA LISTE</span>
                </Link>
                <Link href="#" >
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </Link>
                <Link href="#" >
                    <img src="/images/movie-icon.svg" />
                    <span>FILMS</span>
                </Link>
                <Link href="#" >
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </Link>
            </NavMenu>
            <MobileMenu>
                <Link to="/" className="icon">
                    <img src="/images/home-icon.svg" />
                </Link>
                <Link className="icon">
                    <img src="/images/search-icon.svg" />
                </Link>
                <Link className="icon">
                    <img src="/images/watchlist-icon.svg" />
                </Link>
                <button onClick={onClick}>
                    <img src="/images/more-icon.svg" />
                </button>
                <Dropdown ref={dropdownRef} className={isActive ? 'active' : "inactive"}>
                    <Link href="#" >
                        <img src="/images/original-icon.svg" />
                        <span>ORIGINALS</span>
                    </Link>
                    <Link href="#" >
                        <img src="/images/movie-icon.svg" />
                        <span>FILMS</span>
                    </Link>
                    <Link href="#" >
                        <img src="/images/series-icon.svg" />
                        <span>SERIES</span>
                    </Link>
                </Dropdown>
            </MobileMenu>
            <UserImg src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D212D63B41B89DAFB26B6137E5911388B5D53DD33F8B5229DD9998D71C30A86E/scale?width=96&format=png" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    /* background: #090b13; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
    z-index: 1;
`

const NavMenu = styled.div`

    display: none;

    @media only screen and (min-width: 1026px) {
        display: flex;
        flex: 1;
        margin-left: 15px;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            padding: 0 20px;
            cursor: pointer;
            text-decoration: none;
            color: white;

            img {
                height: 20px;
            }

            span {
                white-space: nowrap;
                margin-left: 5px;
                font-size: 13px;
                letter-spacing: 1.42px;
                position: relative;

                &:after {
                    content: "";
                    height: 2px;
                    background: white;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -6px;
                    opacity: 0;
                    transform-origin: left center;
                    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                    transform: scaleX(0);
                }

            }

            &:hover {
                span:after {
                    transform: scaleX(1);
                    opacity: 1;
                }
            }
        }
    }
`

const Dropdown = styled.div`
    background: rgb(19, 19, 19);
    border: 1px solid #3D3D3D;
    border-radius: 8px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    position: relative;
    top: 90px;
    left: -16px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    z-index: 10;

    &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    a {
        display: flex;
        align-items: center;
        margin: 15px 20px 15px 10px;
        cursor: pointer;
        text-decoration: none;
        color: white;

        img {
            padding-right: 10px;
        }

        span {
                white-space: nowrap;
                font-size: 13px;
                letter-spacing: 1.42px;
                position: relative;

                &:after {
                    content: "";
                    height: 2px;
                    background: white;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -6px;
                    opacity: 0;
                    transform-origin: left center;
                    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                    transform: scaleX(0);
                }

            }

            &:hover {
                span:after {
                    transform: scaleX(1);
                    opacity: 1;
                }
            }
    }

`;

const MobileMenu = styled.div`

    display: flex;
    flex: 1;
    margin-left: 15px;
    align-items: center;
    position: relative;

    button {
        cursor: pointer;
        margin-left: 15px;
        display: flex;
        align-items: center;
        background: transparent;
        border: none;

        img {
            height: 17px;
        }
    }

    a {
        display: flex;
        align-items: center;
        padding: 0 15px;
        cursor: pointer;
        position: relative;

        img {
            height: 25px;

        }
        
        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 15px;
            right: 15px;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

    .icon {
        &:hover {
            &:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    @media only screen and (min-width: 1026px) {
        display: none;
    }
`;

const UserImg = styled.img`
    justify-self: end;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;
`