describe('Главная', function() {
    it('При клике блок должен появляться', function() {
    	return this.browser
    		.url('http://localhost:8080')
    		.click('.test__button')
    		.waitForVisible('.test__text');
    });
});