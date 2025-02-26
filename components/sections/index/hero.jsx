import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Section from '../../structure/section';
import Container from '../../structure/container';
import space from '../../utils/spacing.util';
import Icon from '../../utils/icon.util'
import HeroBg from '../../blocks/hero.bg/bg-color-1';
import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';
import content from '../../../content/index/hero.json'
export default function Hero() {

	const [typingStatus, setTypingStatus] = useState('Initializing');

	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<TypeAnimation className={`${hero.preHeader}`}
					sequence={[
						content.intro.deleteDelay,
						() => { setTypingStatus('typing') },
						content.intro.start,
						() => {	setTypingStatus('typed') },
						content.intro.deleteDelay,
						() => {	setTypingStatus('deleting') },
						content.intro.middle1,
						() => {	setTypingStatus('deleted') },
						content.intro.deleteDelay,
						() => {	setTypingStatus('typing') },
						content.intro.middle2,
						() => {	setTypingStatus('typed') },
						content.intro.deleteDelay,
						() => {	setTypingStatus('deleting') },
						content.intro.end,
						() => {	setTypingStatus('deleted') },
						content.intro.restartDelay,
					]}
					speed={content.intro.speed}
					deletionSpeed={content.intro.deletionSpeed}
					wrapper={content.intro.wrapper}
					repeat={Infinity}
				/>
				<section>
					<h1 className={hero.header}>
						{content.header.name}
						</h1>
					<h1 className={`${hero.subheader} ${hero.primaryDim}`}>
						{content.header.usp}
					</h1>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
						{ content.paragraph }
					</p>					
				</section>
				<section>
					<button	className={`button ${button.primary}`}
							onClick={ () => window.location = 'mailto:agathiyat02@gmail.com' } >
						{content.buttons.primary.title}
					</button>
					<button className={`button ${button.secondary} leaveSite`}
							onClick={ ()=> window.open("https://www.linkedin.com/in/agathiyatharun/", "_blank") } >
						{content.buttons.secondary.title}
					</button>
					<button className={`button ${button.secondary} leaveSite`}
							onClick={ ()=> window.open("https://github.com/AggyT/Portfolio", "_blank") } >
						{content.buttons.tertiary.title}
					</button>
					<button className={`button ${button.secondary} leaveSite`}
							onClick={ ()=> window.open("https://www.youtube.com/playlist?list=PLH54Dc3hac5rhs0GLU7HcuiwlPyB42sQ-", "_blank") } >
						{content.buttons.quaternary.title}
					</button>
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	)
}