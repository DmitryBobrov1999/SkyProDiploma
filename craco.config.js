const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@pages': path.resolve(__dirname, './src/pages'),
			'@public': path.resolve(__dirname, '../../../public'),
		},
	},
};
