import React from "react";
import ReactGA from "react-ga";
import { connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import { Normalize, GlobalStyle } from "../../GlobalStyle";
import { Main, Container } from "./Root.styles";
import Home from "../Home";
import Post from "../Post";
import Page from "../Page";
import Archive from "../Archive";
import Proyecto from "../Proyecto";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Error from "../../components/Error";

function Root ({ state, actions }) {
    ReactGA.initialize("UA-167480853-1");
    ReactGA.pageview(state.router.link);
    const data = state.source.get(state.router.link);
    const font_face = "https://fonts.googleapis.com/css2?family=Poppins:wght@800;900&family=Source+Sans+Pro:wght@200;300;400&display=swap";

    return (
        <>
            <Head>
                <html lang="es" />
                <link rel="canonical" href={state.router.link} />
                <link rel="stylesheet" href={font_face} />
            </Head>
            <Header />
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <Home when={data.isHome} />
                    <Archive when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                    <Proyecto when={data.isProyecto} />
                    <Error when={data.isError} />
                </Switch>
            </Main>
            <Footer />
            <Normalize />
            <GlobalStyle />
        </>
    )
}

export default connect(Root);