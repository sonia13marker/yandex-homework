export const prepareData = (items) => {
	// у него acc[cinema.id]
	return {
		entities: items.reduce((acc, books) => {
			acc[books.id] = books;
		}, {}),
		ids: items.map(({id}) => id),
	}
} 