'use client';
import React, { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import Hero from '@/components/Hero';
import SidebarFilters from '@/components/SidebarFilters';

export default function Home() {
	const [filters, setFilters] = useState<{ order: string }>({
		order: 'newest',
	});
	const [showFilters, setShowFilters] = useState(false);

	return (
		<div className='flex flex-col'>
			<Hero />
			{/* Botón para mostrar filtros solo en móvil */}
			<div className='block lg:hidden mb-2 px-2'>
				<button
					onClick={() => setShowFilters((v) => !v)}
					className='bg-[#181c24] text-[#ffb300] font-semibold px-4 py-2 rounded-lg shadow transition hover:bg-[#23283a] w-full'
				>
					{showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
				</button>
			</div>
			<div className='flex flex-col lg:flex-row gap-4 w-full'>
				{/* Filtros: ocultos en móvil si showFilters es false, siempre visibles en escritorio */}
				<div
					className={`w-full lg:w-auto ${showFilters ? '' : 'hidden'} lg:block`}
				>
					<SidebarFilters onFilterChange={setFilters} />
				</div>
				<div className='flex-1'>
					<Dashboard filters={filters} />
				</div>
			</div>
		</div>
	);
}
