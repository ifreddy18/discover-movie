export interface MovieDb {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
	release_date: Date;
}

export interface TelevisionDb {
	id: number;
	name: string;
	poster_path: string;
	vote_average: number;
}
