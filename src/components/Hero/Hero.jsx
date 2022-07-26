import React from 'react';
import { Header } from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import NumberCounter from 'number-counter';
function Hero() {
	const transition = { type: 'spring', duration: 3 };
	const mobile = window.innerWidth <= 768 ? true : false;
	return (
		<div className='hero' id='hero'>
			<div className='blur hero-blur'></div>
			<div className='left-h'>
				<Header />

				<div className='the-best-ad'>
					<motion.div
						initial={{ left: mobile ? '178px' : '238px' }}
						whileInView={{ left: '8px' }}
						transition={{ ...transition, type: 'tween' }}></motion.div>
					<span>the best fitness club in the town</span>
				</div>

				<div className='hero-text'>
					<div>
						<span className='stroke'>Shape </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal Body</span>
					</div>

					<div>
						<span>
							here we will help you to shape and build your ideal body and live
							up your life to fullest
						</span>
					</div>
				</div>

				<div className='figures'>
					<div>
						<span>
							<NumberCounter start={100} end={140} delay='4' preFix='+' />
						</span>
						<span>expert coaches</span>
					</div>
					<div>
						<span>
							<NumberCounter start={925} end={978} delay='4' preFix='+' />
						</span>
						<span>members joined</span>
					</div>
					<div>
						<span>
							<NumberCounter start={10} end={46} delay='4' preFix='+' />
						</span>
						<span>fitness programs</span>
					</div>
				</div>

				<div className='hero-buttons'>
					<button className='btn'>Get Started</button>
					<button className='btn'>Learn More</button>
				</div>
			</div>

			<div className='right-h'>
				<button className='btn'>
					{' '}
					<Link to='join-us' spy={true} smooth={true}>
						Join Now
					</Link>
				</button>

				<motion.div
					initial={{ right: '-1rem' }}
					whileInView={{ right: '4rem' }}
					transition={transition}
					className='heart-rate'>
					<img src={Heart} alt='' />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</motion.div>

				<img src={hero_image} alt='' className='hero-image' />
				<motion.img
					initial={{ right: '11rem' }}
					whileInView={{ right: '20rem' }}
					transition={transition}
					src={hero_image_back}
					alt=''
					className='hero-image-back'
				/>

				<motion.div
					initial={{ right: '37rem' }}
					whileInView={{ right: '28rem' }}
					transition={transition}
					className='calories'>
					<img src={Calories} alt='' />
					<div>
						<span>Calories burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
