import Hero 		from '../components/sections/index/hero'
import About 		from '../components/sections/index/about'
import FeaturedProjects	from '../components/sections/projects/featured'
import { Analytics } from '@vercel/analytics/react';
import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<div id="aboutme"/>
			<About />
			<div id="projects"/>
			<FeaturedProjects />
			<Analytics />
			{/* <div id="technical"/>
			<Technical /> */}
		</>
	);
}