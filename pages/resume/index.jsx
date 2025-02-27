"use client";

// Section structure
import Section from "/components/structure/section"
import Container from '/components/structure/container';
import SectionTitle from '/components//blocks/section.title.block'
import dynamic from 'next/dynamic';
import css from '/styles/sections/projects/featured.module.scss'
// import { Document, Page, pdfjs } from "react-pdf";
// import Resume from "../../components/resume/resume";

// const ResumeBlock = dynamic(() => import('../../components/resume/resume'), {
//     ssr: false,
// });
import { useEffect, useRef } from 'react';

export default function Resume() {

    return (
        <Section classProp={css.hasBg}>
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="My Resume"
                    preTitle="Websites, Applications, and more."
                    subTitle="Inspired by curiosity, driven by passion."
                />

                {/* <ResumeBlock /> */}

                {/* <div className="MyComponent">
                    <div className="webviewer" ref={viewer} ></div>
                </div> */}
                {/* <iframe src="/Agathiya_Tharun_Resume.pdf" width="100%" height="800px"></iframe> */}
                <iframe src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/AggyT/Portfolio/main/Agathiya_Tharun_Resume.pdf" width="100%" height="800px"></iframe>
                {/*<iframe src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/AggyT/Portfolio/main/Agathiya_Tharun_Resume.pdf&embedded=true" width="100%" height="800px"></iframe> */} 
            </Container>
            <div className={css.bgContainer}>
                <span className={css.orbitalBg}>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
                </span>
                <span className={css.afterGlowBg}></span>
            </div>

        </Section>
    )
}