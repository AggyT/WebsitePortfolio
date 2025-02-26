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

    const viewer = useRef(null);
    const isInitialized = useRef(false); // Prevent multiple initializations


    useEffect(() => {
        if (!isInitialized.current && viewer.current) {

            import('@pdftron/webviewer').then(() => {
                WebViewer(
                    {
                        disabledElements: [
                            "toolbarGroup-Shapes",
                            "toolbarGroup-Edit",
                            "toolbarGroup-Insert",
                            "toolbarGroup-Annotate",
                            "toolbarGroup-Forms",
                            "notesPanel",
                            "viewControlsButton",
                            "selectToolButton",
                            "toggleNotesButton",
                            "searchButton",
                            "freeTextToolGroupButton",
                            "crossStampToolButton",
                            "checkStampToolButton",
                            "dotStampToolButton",
                            "rubberStampToolGroupButton",
                            "dateFreeTextToolButton",
                            "eraserToolButton",
                            "panToolButton",
                            "signatureToolGroupButton",
                            "viewControlsOverlay",
                            "toolbarGroup-View",
                            "SignatureFormFieldCreateTool",
                            "toolbarGroup-FillAndSign",
                            // "groupedLeftHeaderButtons",
                            "annotationEditToolButton",
                            "tools-header"
                        ],
                        isReadOnly: true,
                        path: '/lib',
                        // licenseKey: 'demo:1739258616932:6161484503000000006d9c4f31c8b8964ed280c4dc5368c4f92c4d88af', // sign up to get a key at https://dev.apryse.com
                        // initialDoc: '/NewResume.pdf',
                        initialDoc: '/NewResume.pdf'
                    },
                    viewer.current,
                ).then((instance) => {
                    const { docViewer } = instance;

                    instance.UI.disableTools();

                    // const iframeDoc = instance.UI.iframeWindow.document
                    // const dropdownButtons = iframeDoc.querySelectorAll('[data-element="dropdown-item-toolbarGroup-Redact"]')[0]
                    // dropdownButtons.disabled = true;

                    // you can now call WebViewer APIs here...
                    // docViewer.enableReadOnlyMode();
                });
            })
        }
    }, []);


    return (
        <Section classProp={css.hasBg}>
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="My Resume"
                    preTitle="Websites, Applications, and more."
                    subTitle="Inspired by curiosity, driven by passion."
                />

                {/* <ResumeBlock /> */}

                <div className="MyComponent">
                    {/* <div className="header">React sample</div> */}
                    <div className="webviewer" ref={viewer} ></div>
                </div>

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