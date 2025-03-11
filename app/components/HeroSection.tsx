'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
					<h1 className="inline-block text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 leading-relaxed max-w-fit tracking-wide pl-4">
    Rajeevan Ramakumar
</h1>


						<h2 className="text-2xl md:text-4xl font-bold text-white">Full Stack Developer</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							I&apos;m a passionate computer science student at IIT, building innovative projects and expanding my skills in full-stack development.
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							I am a computer science undergraduate at IIT.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
