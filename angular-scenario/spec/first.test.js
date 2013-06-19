describe("kol", function() {

  it('title', function() {
    //browser().navigateTo("http://localhost:8080");
    browser().navigateTo("/index2.html");
    expect(element('title').text()).toBe("angular_rocks");
    expect(element('h1').text()).toBe("Hello world");
    //console.log("test");
  });

  it('should contain "first" in h1', function() {
    browser().navigateTo("/index2.html#/first");
    expect(element('h1').text()).toBe("first");
  });

  it('should contain "second" in h1', function() {
    browser().navigateTo("/index2.html#/second");
    expect(element('h1').text()).toBe("second");
  });

  it('first clicks button and go to second', function() {
    browser().navigateTo("/index2.html#/first");
    element('input').click();
    expect(element('h1').text()).toBe("second");
    expect(browser().location().path()).toBe('/second');
  });
});