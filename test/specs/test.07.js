describe('Google Search Test', () => {

    it('07', (done) => {
      browser.url('https://google.com/ncr')
      search_box_element = $('[name=\'q\']')
      search_box_element.setValue("BrowserStack\n")

      expect(browser).toHaveTitleContaining('Google');
    })

})
