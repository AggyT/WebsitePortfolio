import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'

export default function Footer() {
		
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li><h4>Resources</h4></li>
						{
						content.outboundLinks.map( ({ header, link, note }, index) => {
							return (
								<li key={index}>
									<a href={link} rel="noreferrer" target="_blank">{header} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p>{note}</p>
								</li>
							)
						})
						}
					</ul>
					<ul className={css.links}>
						<li><h4>Links</h4></li>
						{
						content.links.map( ({ person, link, note }, index) => {
							return (
								<li key={index}>
									<a href={link} rel="noreferrer" target="_blank">{person} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p>{note}</p>
								</li>
							)
						})
						}
					</ul>
					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }, index) => {
								return (
									<a  key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={[ 'fab', icon ]} /></a>
								)
							})
							}
						</li>
                        <p style={{ fontSize: '0.6rem', color: '#888', marginTop: '5.5rem' }}>
                            © {new Date().getFullYear()} Agathiya Tharun. All rights reserved.
						</p>
                    </ul>
				</section>
				
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
