module.exports = {
	gridUrl: 'http://localhost:4444/wd/hub',
	sets: {
		'platform-name': {
			files: 'tests/'
		}
	},
	browsers: {
		chrome: {
			desiredCapabilities: {
				browserName: 'chrome'
			}
		}
	}
};