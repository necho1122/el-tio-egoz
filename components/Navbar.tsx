import Image from 'next/image';

function Navbar() {
	return (
		<div>
			<nav>
				<div className='navbar-left'>
					<a
						href='index.html'
						className='logo-container'
					>
						<Image
							src='/image/logo.webp'
							alt='logo el tio egoz'
						/>
						<span className='site-name'>El Tio Egoz</span>
					</a>
				</div>

				<div className='search-bar'>
					<input
						type='text'
						placeholder='Buscar juegos...'
						className='search-input'
					/>
					<button
						type='submit'
						className='search-button'
					>
						Buscar
					</button>
				</div>

				<div className='navbar-right'>
					<ul>
						<li>
							<a href='../../index.html'>Inicio</a>
						</li>
						<li>
							<a href='#'>Nosotros</a>
						</li>
						<li>
							<a
								href='https://directorio-de-enlaces-nuevo-v3.netlify.app/'
								target='_blank'
							>
								Redes
							</a>
						</li>
						<li>
							<a href='#'>Contáctanos</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
