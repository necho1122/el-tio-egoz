export type Item = {
	id: string;
	title: string;
	description: string;
	images: string[];
	createdAt: number;
	likes: number;
	basicInformation?: string[];
	details?: string[];
	platforms?: string[];
	linkAndroid?: string;
	linkMac?: string;
	linkWindows?: string;
	linkIos?: string;
};
