import Image from 'next/image'
import { useState } from 'react'

import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

import { RenderGLTF } from './rendergltf'

import { v4 as uuidv4 } from 'uuid'

// import { MyModel } from './rendergltf'

export default function FeaturedProject({ content }, index) {

	const { project, url, repo, descriptionTitle, description, stack, imageOptions, images, videoEmbedUrl, gltfPath, cameraSpecs, zoom } = content

	const controls = useAnimation();
	const { ref, inView } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect(() => {
		if (inView) { controls.start("visible") }
		if (!inView) { controls.start("hidden") }
	}, [controls, inView])


	const [isDesktop, setDesktop] = useState(false);

	useEffect(() => {
		console.log(window.innerWidth)
		if (window.innerWidth > 500) {
			setDesktop(true);
		} else {
			setDesktop(false);
		}

		const updateMedia = () => {
			if (window.innerWidth > 500) {
				setDesktop(true);
			} else {
				setDesktop(false);
			}
		};
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);


	// content container

	function Content() {
		if (videoEmbedUrl === "" && gltfPath === "") {
			<span className={`${css.imageAnimationContainer}`}>
				{images.map(({ key, url, hover, h, w }, index) => {
					hover = (hover === 'left') ? hoverLeft : hoverRight

					return (
						<m.div key={`${index}-${key}`} variants={item}>
							<m.div variants={hover}>
								<Image src={url} alt="x" height={h} width={w} />
							</m.div>
						</m.div>
					)
				}
				)}
			</span>
		} else if (videoEmbedUrl !== "" && gltfPath === "") {
			return (
				<div className={css.videoContainer}>
                    <iframe src={videoEmbedUrl} title="title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
			)
		} else if (videoEmbedUrl === "" && gltfPath !== "") {
			return (
				<RenderGLTF key={uuidv4()} gltfPath={gltfPath} cameraSpecs={cameraSpecs} zoom={zoom}/>
			)
		}
	}

	return (
		<m.section
			key={index}
			className={css.project}
			//framer-motion
			ref={ref}
			variants={container}
			initial={["rest", "hidden"]}
			whileHover="hover"
			animate={controls} >


			<div className={css.details}>
				<div className={css.projectHeader}>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>
					</div>

					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description}</p>
					</div>
					<div className={css.stackContainer}>
						<Badges list={stack} block="stack" fullContainer={false} color={false} />
					</div>
					<a href={url} target="_blank" rel="noopener noreferrer">

						<m.div variants={''} className={css.viewProject}>
							<p>Project Files</p>
							<Icon icon={['fad', 'arrow-right-to-bracket']} />
						</m.div></a>
				</div>
			</div>

			<div className={css.imageContainer}>
				{isDesktop ? (
					<Content />
				) : (
					<p></p>
				)}

			</div>
		</m.section>
	)
}

const container = {
	hidden: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: {
		y: 75,
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35,
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5,
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		opacity: 0.3,
		x: -40,
		y: -40
	}
}

const hoverRight = {
	rest: {
		opacity: 0.3,
		x: 0
	},
	hover: {
		opacity: 1,
		x: 40,
		y: 40
	}
}

