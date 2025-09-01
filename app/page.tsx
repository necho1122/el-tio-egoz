'use client';
import React, { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import Hero from '@/components/Hero';
import SidebarFilters from '@/components/SidebarFilters';

export default function Home() {
	const [filters, setFilters] = useState<{ order: string }>({
		order: 'newest',
	});

	return (
		<div className='flex flex-col'>
			<Hero />
			<div className='flex flex-row'>
				<SidebarFilters onFilterChange={setFilters} />
				<Dashboard filters={filters} />
			</div>
		</div>
	);
}
