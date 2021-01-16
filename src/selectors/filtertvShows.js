const filteredtvShows = (tvShows, filter) => (filter !== 'All' ? tvShows.filter(show => show.show.genres.includes(filter)) : tvShows);

export default filteredtvShows;
