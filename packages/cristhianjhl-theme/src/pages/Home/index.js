import React from 'react';
import { connect, Head } from 'frontity';
import Image from "@frontity/components/image";
import { GitHubIcon } from "../../components/UI/Icons";
import { Hero, ImageContainer, HeroContent, HeroTitle, HeroDescription, HeroCTA, HeroHelper } from "./Home.styles";
import Loop from '../../components/Loop';

function Home({ state, actions, libraries }) {
    React.useEffect(() => {
        actions.source.fetch("/proyecto/");
    }, [])

    const data = state.source.get(state.router.link);
    const home = state.source[data.type][data.id];
    const blog = state.source.get(state.source.postsPage);
    const proyectos = state.source.get("/proyecto/");

    const { encabezado_hero, contenido_hero, presentacion, big_message, description, avatar } = home.acf;
    const { og_title, og_description } = home.yoast_head_json;

    return (
        <>
            <Head>
                <title>{og_title}</title>
                <meta name="description" content={og_description} />
            </Head>
            <Hero>
                <HeroContent>
                    <HeroTitle>Desarrollador <span>Frontend</span> con <span>ReactJS</span></HeroTitle>
                    <HeroDescription>Trabajando conmigo. Te garantizo calidad, aplicaciones que cumplan con los estandar de la actualidad, velocidad de carga optimas, execelente usabilidad y gran aporte al equipo.</HeroDescription>
                    <HeroCTA href="https://github.com/cristhianjhlweb/" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                        <span>/cristhianjhlweb</span>
                    </HeroCTA>
                    <HeroHelper>Te invito a revisar mi repositorio en GitHub</HeroHelper>
                </HeroContent>
                {/* <ImageContainer>
                    <Image src="http://wp.cristhianjhl.com/wp-content/uploads/2021/07/cristhianjhl_dev.svg" alt="Cristhian Hernández, desarrollador frontend en Lima, Perú." />
                </ImageContainer> */}
            </Hero>
            {
                proyectos 
                ? <Loop libraries={libraries} state={state} data={proyectos} />
                : <p>Cargando...</p>
            }
        </>
    )
}

export default connect(Home);
