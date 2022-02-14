import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

import { Alert, Box, Container } from "@mui/material";

import { BASE_URL } from "../../config";
import Header from "./Header";
import Dashboard from "../contents/Dashboard";
import Category from "../contents/Category";
import CategoryAdmin from "../contents/admin/CategoryAdmin";
import Word from "../contents/Word";
import User from "../contents/User";
import { setUserAuthDetails, freshState } from "../../actions/userAuthActions";

const MainContent = (props) => {
    const { cookies } = props;
    //  Retrieve data from storage
    const userAuth = cookies.get("userAuth");

    useEffect(() => {
        /*
            Check the userAuth data or stored userAuth cookie data is not empty, if empty then redirect back 
            to login.
       */
        if (props.userAuth.length === 0 && userAuth === "") {
            // Remove the userAuth cookie
            props.cookies.remove("userAuth");

            window.location.replace(BASE_URL);
        }

        if (typeof window !== "undefined") {
            // Set the userAuth with the cookies values
            props.setUserAuthDetails(userAuth);
            // Re-intialize the state of sign in page
            props.freshState();
        }
    }, []);

    return (
        <React.Fragment>
            {props.userAuth.length !== 0 ? (
                <React.Fragment>
                    <Header></Header>

                    <main>
                        <Box sx={{ bgcolor: "Background.paper", pt: 8, pb: 6 }}>
                            <Container maxWidth="lg">
                                <Routes>
                                    {props.userAuth.is_admin === 0 ? (
                                        <Route
                                            path="/dashboard"
                                            element={<Dashboard />}
                                        ></Route>
                                    ) : null}
                                    <Route
                                        path="/categories"
                                        element={
                                            props.userAuth.is_admin === 1 ? (
                                                <CategoryAdmin />
                                            ) : (
                                                <Category />
                                            )
                                        }
                                    ></Route>
                                    <Route
                                        path="/words"
                                        element={<Word />}
                                    ></Route>
                                    <Route
                                        path="/users"
                                        element={<User />}
                                    ></Route>
                                </Routes>
                            </Container>
                        </Box>
                    </main>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    );
};

const mapToStateProps = (state, ownProps) => {
    return {
        userAuth: state.auth.userAuth,
        cookies: ownProps.cookies,
    };
};

export default withCookies(
    connect(mapToStateProps, { setUserAuthDetails, freshState })(MainContent)
);
