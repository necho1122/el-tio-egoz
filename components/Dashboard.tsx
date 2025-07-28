'use client';

import { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

type Item = {
	id: string;
	title: string;
	description: string;
	images: string[];
	createdAt: number;
	likes: number;
	basicInfomation?: string[];
	details?: string[];
	platforms?: string[];
	downloadLink?: string[];
};

export default function ItemsList() {
	const [data, setData] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchItems() {
			try {
				const res = await fetch('/api/game/get');
				const items = await res.json();
				setData(items);
			} catch (err) {
				console.error('Error al obtener los items:', err);
			} finally {
				setLoading(false);
			}
		}
		fetchItems();
	}, []);

	if (loading) return <p className='mx-auto text-center'>Cargando...</p>;

	return (
		<div className='max-w-7xl mx-auto px-1 sm:px-4 py-3 sm:py-6'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8'>
				{data.map((item) => (
					<div
						key={item.id}
						className='bg-card rounded-lg flex flex-col justify-between shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-[1.03] 
							mb-3 sm:mb-6 p-2 sm:p-4 lg:p-6'
					>
						<ImageSlider images={item.images} />
						<h2 className='text-base text-heading font-semibold mb-1 px-0 sm:px-2'>
							{item.title}
						</h2>
						<p className='text-text-secondary px-0 sm:px-2 mt-1 sm:mt-2 line-clamp-3 text-xs sm:text-base'>
							{item.description}
						</p>
						<div className='flex flex-row justify-between gap-1 sm:gap-2 mt-1 sm:mt-4 px-0 sm:px-2'>
							<p className='text-xs sm:text-sm text-gray-500'>
								Likes: {item.likes}
							</p>
							<p className='text-xs sm:text-sm text-gray-500'>
								Fecha: {new Date(item.createdAt).toLocaleDateString()}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function ImageSlider({ images }: { images: string[] }) {
	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		mode: 'snap',
		slides: {
			perView: 1,
			spacing: 8,
		},
	});

	return (
		<div
			ref={sliderRef}
			className='keen-slider rounded overflow-hidden mb-1 sm:mb-4'
		>
			{images.map((url, idx) => (
				<div
					className='keen-slider__slide'
					key={idx}
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={url}
						alt={`Imagen ${idx + 1}`}
						className='w-full h-32 sm:h-56 md:h-64 lg:h-72 object-cover'
					/>
				</div>
			))}
		</div>
	);
}
