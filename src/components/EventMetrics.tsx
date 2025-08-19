import React from 'react';

const metrics = [
	{
		icon: null,
		value: '2+',
		label: ['Pembicara', 'Nasional'],
	},
	{
		icon: null,
		value: '3000+',
		label: ['Potensial', 'Peserta'],
	},
	{
		icon: '∞',
		value: null,
		label: ['Tak Terhingga', 'Potensi Kebaikan'],
	},
];

const EventMetrics = () => (
	<section className="w-full bg-[#0a0a0a] py-12 px-4 flex justify-center">
		<div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch justify-center divide-y md:divide-y-0 md:divide-x divide-[#cea15c]/40">
			{metrics.map((m, i) => (
				<div
					key={i}
					className="flex-1 flex flex-col items-center justify-center py-8 md:py-0 md:px-8 text-center"
				>
					{m.icon ? (
						<span className="text-6xl md:text-7xl text-white mb-2 block font-light">
							{m.icon}
						</span>
					) : (
						<span className="text-5xl md:text-6xl text-white mb-2 block font-light">
							{m.value}
						</span>
					)}
					<span className="text-[#cea15c] text-lg md:text-xl font-normal leading-tight">
						{m.label.map((line, idx) => (
							<span key={idx} className="block">
								{line}
							</span>
						))}
					</span>
				</div>
			))}
		</div>
	</section>
);

export default EventMetrics;
