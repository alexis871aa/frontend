export const getLastPageFromLinks = (links) =>
	Number(links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/).at(1));
