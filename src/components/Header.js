import React, { useState, useEffect, useRef } from "react"
import { auth, provider } from "../firebase"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut,
} from "../features/user/userSlice"
import { useSelector, useDispatch } from "react-redux"

function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
            } else {
                history.push("/login");
            }
        })
    }, [dispatch, history])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
            history.push("/");
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            history.push("/login");
        })
    }

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
            { !userName ? (
                <LoginWrap>
                    <Login onClick={signIn}>S'IDENTIFIER</Login>
                </LoginWrap>
            ) : 
                <>
                    <Link to="/">
                        <Logo src="/images/logo.svg" />
                    </Link>
                    <NavMenu>
                        <Link to="/" >
                            <img src="/images/home-icon.svg" alt="" />
                            <span>ACCUEIL</span>
                        </Link>
                        <Link href="#" >
                            <img src="/images/search-icon.svg" alt="" />
                            <span>RECHERCHE</span>
                        </Link>
                        <Link href="#" >
                            <img src="/images/watchlist-icon.svg" alt="" />
                            <span>MA LISTE</span>
                        </Link>
                        <Link href="#" >
                            <img src="/images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </Link>
                        <Link href="#" >
                            <img src="/images/movie-icon.svg" alt="" />
                            <span>FILMS</span>
                        </Link>
                        <Link href="#" >
                            <img src="/images/series-icon.svg" alt="" />
                            <span>SERIES</span>
                        </Link>
                    </NavMenu>
                    <MobileMenu>
                        <Link to="/" className="icon">
                            <img src="/images/home-icon.svg" alt="" />
                        </Link>
                        <Link className="icon">
                            <img src="/images/search-icon.svg" alt="" />
                        </Link>
                        <Link className="icon">
                            <img src="/images/watchlist-icon.svg" alt="" />
                        </Link>
                        <button onClick={onClick}>
                            <img src="/images/more-icon.svg" alt="" />
                        </button>
                        <Dropdown ref={dropdownRef} className={isActive ? 'active' : "inactive"}>
                            <Link href="#" >
                                <img src="/images/original-icon.svg" alt="" />
                                <span>ORIGINALS</span>
                            </Link>
                            <Link href="#" >
                                <img src="/images/movie-icon.svg" alt="" />
                                <span>FILMS</span>
                            </Link>
                            <Link href="#" >
                                <img src="/images/series-icon.svg" alt="" />
                                <span>SERIES</span>
                            </Link>
                        </Dropdown>
                    </MobileMenu>
                    <UserImg onClick={signOut} src={userPhoto} />
                </>
            }
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
const LoginWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    background-color: rgba(0, 0, 0, 0.6);

    cursor: pointer;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;