'use client';

import { useEffect, useState } from 'react';

export default function AgeModal() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const isAdult = localStorage.getItem('isAdult');
		if (!isAdult) setOpen(true);
	}, []);

	const handleYes = () => {
		localStorage.setItem('isAdult', 'true');
		setOpen(false);
	};

	const handleNo = () => {
		window.location.href = 'https://www.google.com/';
	};

	if (!open) return null;

	return (
		<div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm'>
			<div className='bg-card rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-gray-200 dark:border-gray-700 text-center'>
				<h2 className='text-2xl font-bold text-heading mb-2'>Advertencia</h2>
				<p className='text-text-secondary mb-6'>
					Este sitio está dirigido únicamente a mayores de edad. ¿Eres mayor de
					18 años?
				</p>
				<div className='flex gap-4 justify-center'>
					<button
						onClick={handleYes}
						className='bg-btn hover:bg-btn-hover text-footer-text font-semibold px-6 py-2 rounded-lg transition-colors'
					>
						Sí, soy mayor de edad
					</button>
					<button
						onClick={handleNo}
						className='bg-link hover:bg-link-hover text-white font-semibold px-6 py-2 rounded-lg transition-colors'
					>
						No
					</button>
				</div>
			</div>
		</div>
	);
}
