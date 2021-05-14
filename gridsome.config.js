
module.exports = {
	port: 6161,
	siteName: 'Sample Site',
	siteUrl: 'www.google.com',

	templates: {
	},

	plugins: [
	],

	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [],
		},
	},
};