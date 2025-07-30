'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Toggle menu visibility on small screens
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Close menu when clicking outside of it
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className='w-full bg-card'>
			<nav className='flex flex-row justify-between items-center px-4 py-2'>
				<div className=''>
					<Link
						href='/'
						className='flex items-center gap-2 text-white'
					>
						<Image
							src='/images/logo.webp'
							alt='logo el tio egoz'
							width={40} // tamaño base reducido
							height={40}
							className='rounded-full sm:w-10 sm:h-10 w-8 h-8'
						/>
						<span className='sm:text-2xl text-lg font-semibold'>
							<span className='sm:inline hidden text-nowrap'>El Tío Egoz</span>
							<span className='inline sm:hidden text-nowrap'>Tío Egoz</span>
						</span>
					</Link>
				</div>

				{/* Search bar */}
				<div className='flex items-center justify-center flex-1 mx-2'>
					<input
						type='text'
						placeholder='Buscar juegos...'
						className='px-2 py-1 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 text-xs w-32 sm:w-64 sm:px-4 sm:py-2 sm:text-sm'
					/>
					<button
						type='submit'
						className='bg-btn hover:cursor-pointer hover:bg-btn-hover text-foreground px-3 py-[6px] sm:px-5 sm:py-[10px] rounded-r-md focus:outline-none text-xs sm:text-sm'
					>
						Buscar
					</button>
				</div>

				{/* Menú horizontal en desktop */}
				<ul className='hidden lg:flex flex-row gap-6 items-center text-white ml-4'>
					<li>
						<Link
							href='/'
							className='hover:underline'
						>
							Inicio
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='hover:underline'
						>
							Nosotros
						</Link>
					</li>
					<li>
						<a
							href='https://directorio-de-enlaces-nuevo-v3.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline'
						>
							Redes
						</a>
					</li>
					<li>
						<Link
							href='#'
							className='hover:underline'
						>
							Contáctanos
						</Link>
					</li>
				</ul>

				{/* Toggle menu button for mobile */}
				<button
					className='lg:hidden text-white p-2'
					onClick={toggleMenu}
					aria-label='Abrir menú'
				>
					<span className='block w-6 h-0.5 bg-white mb-2'></span>
					<span className='block w-6 h-0.5 bg-white mb-2'></span>
					<span className='block w-6 h-0.5 bg-white'></span>
				</button>
			</nav>

			{/* Sidebar Menu for Mobile */}
			{/* Overlay */}
			<div
				className={`fixed inset-0 z-50 transition-all duration-300 ${
					isMenuOpen ? 'block' : 'hidden'
				}`}
				style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
			>
				{/* Fondo oscuro */}
				<div
					className='absolute inset-0 transition-opacity duration-300'
					style={{ background: 'rgba(0,0,0,0.5)' }}
					onClick={closeMenu}
				/>
				{/* Sidebar */}
				<aside
					className={`fixed left-0 top-0 w-64 h-full bg-card text-white p-4 z-50 transform transition-transform duration-300 ${
						isMenuOpen ? 'translate-x-0' : '-translate-x-full'
					}`}
					style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.2)' }}
				>
					{/* Botón de cerrar */}
					<button
						className='absolute top-4 right-4 text-white text-2xl'
						onClick={closeMenu}
						aria-label='Cerrar menú'
					>
						&times;
					</button>
					<ul className='space-y-4 mt-10'>
						<li>
							<Link
								href='/'
								className='hover:underline'
							>
								Inicio
							</Link>
						</li>
						<li>
							<Link
								href='#'
								className='hover:underline'
							>
								Nosotros
							</Link>
						</li>
						<li>
							<a
								href='https://directorio-de-enlaces-nuevo-v3.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'
							>
								Redes
							</a>
						</li>
						<li>
							<Link
								href='#'
								className='hover:underline'
							>
								Contáctanos
							</Link>
						</li>
					</ul>
				</aside>
			</div>
		</div>
	);
}

export default Navbar;
