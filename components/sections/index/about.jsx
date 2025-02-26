// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I like to make new things. I'm a graduate student with interests in space technology and innovative mechanisms. 
								I thrive in R&D, programming, manufacturing, and project management. Call me Aggy :)"
				/>
				<section className={about.content}>
					<div className={about.image}>

						<Image className="mb-2" src="/img/headshot.jpg" width={450} height={400}/>
						
						<div className={about.unit}>
							<BadgesBlock 
								title="Programming Languages" 
								containerClass={about.container}
								list={languages} 
								fullContainer="fullContainer"
								block="methods" 
								icon="code"
								copy=""
								//invertedColor="invertedColor"
								headerIcon={`${about.icon}`}
							/>
						</div>
					</div>
					<div className={about.copy} >
						<div className={about.eduBlock}>
							<div className={about.wrapBlock}>
								<Image style={{ borderRadius: '0px' }} src="/img/eduLogos/purdue.png" width={60} height={40}/>
								<div className="eduText">
									<h3>Purdue University</h3>
									<p>BSME | Manufacturing Minor | Class of 2024</p>
								</div>
							</div>
							<div className={about.wrapBlock}>
								<Image style={{ borderRadius: '0px' }} src="/img/eduLogos/ucla2.png" width={60} height={20}/>
								<div className="eduText">
									<h3>University of California, Los Angeles</h3>
									<p>MSME/MSAE | Class of 2025</p>
								</div>
							</div>
						</div>
						<BadgesBlock 
							title="Engineering Skills" 
							containerClass={about.container}
							list={engineeringskills} 
							fullContainer="fullContainer"
							block="methods" 
							icon="hammer"
							copy=""
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
						<BadgesBlock 
							title="CAD Software" 
							containerClass={about.container}
							list={cad} 
							fullContainer="fullContainer"
							block="methods" 
							icon="laptop-code"
							copy=""
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const languages	= [
	{ key: 'calculator', 			name: 'MATLAB', 	type: 'fad' },
	{ key: 'snake', 			name: 'Python', 	type: 'fad' },
	{ key: 'terminal', 			name: 'C', 	type: 'fad' },
	{ key: 'mug-hot', 		name: 'Java', 		type: 'fad' },
	{ key: 'coffee-beans', 				name: 'Javascript', type: 'fad' },
	{ key: 'database', 			name: 'SQL', 	type: 'fad' },
	{ key: 'table', 			name: 'Excel / VBA', 	type: 'fad' },
	{ key: 'browser', 		name: 'HTML / CSS', 		type: 'fad' },
	{ key: 'rectangle-vertical-history', 		name: 'AngularJS', 		type: 'fad' }
]

const cad	= [
	{ key: 'cube', 	    	name: 'SolidWorks',     type: 'fad' },
	{ key: 'cloud', 				name: 'CATIA V5/6', type: 'fad' },
	{ key: 'gear', 		name: 'NX', 		type: 'fad' },
	{ key: 'square-i', 			name: 'Inventor', 	type: 'fad' },
	{ key: 'square-f', 		name: 'Fusion 360', 		type: 'fad' },
	{ key: 'shapes', 		name: 'CREO', 		type: 'fad' }
]

const engineeringskills = [
	{ key: 'location-crosshairs', 	name: 'GD&T', 	type: 'fad' },	
	{ key: 'gears', 					name: 'CAD / CAM', 	type: 'fad' },
	{ key: 'flask', 					name: 'R&D', 	type: 'fad' },
	{ key: 'file-chart-column', 					name: 'FEA', 	type: 'fad' },
	{ key: 'print', 					name: '3D Printing', 	type: 'fad' },
	{ key: 'axe', 					name: 'Manufacturing', 	type: 'fad' }
]