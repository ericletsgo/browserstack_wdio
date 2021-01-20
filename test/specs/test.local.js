describe('Local Testing', () => {

    it('should access my localhost', (done) => {
      browser.url('http://localhost:8000')

      expect(browser).toHaveTitle('Local Server');
    })

})
