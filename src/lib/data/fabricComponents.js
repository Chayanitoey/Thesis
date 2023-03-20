export default {
	nodes: [
		{ id: 'Cotton' },
		{ id: 'Linen' },
		{ id: 'Wool' },
		{ id: 'Silk' },
		{ id: 'Rayon' },
		{ id: 'Polyester' },
		{ id: 'Nylon' },
		{ id: 'Spandex' },
		{ id: 'Blends' },
		{ id: 'Wash_Hot' },
		{ id: 'Wash_Medium' },
		{ id: 'Wash_Cold' },
        { id: 'Wash_Hand' },
        { id: 'Dry_High' },
        { id: 'Dry_Medium' },
        { id: 'Dry_Cold' },
        { id: 'Dry_Air' },
        { id: 'Dry_Clean' }
	],
	links: [
		{ source: 'Cotton', target: 'B1', value: 2 },
		{ source: 'A1', target: 'B2', value: 2 },
		{ source: 'A2', target: 'B2', value: 2 },
		{ source: 'A2', target: 'B3', value: 2 },
		{ source: 'A3', target: 'B2', value: 2 },
		{ source: 'A3', target: 'B4', value: 2 },
		{ source: 'B1', target: 'C1', value: 2 },
		{ source: 'B1', target: 'C2', value: 2 },
		{ source: 'B4', target: 'C2', value: 2 },
		{ source: 'B4', target: 'C3', value: 2 },
		{ source: 'B1', target: 'D1', value: 2 },
		{ source: 'C3', target: 'D1', value: 2 },
		{ source: 'C3', target: 'D2', value: 2 }
	]
};

