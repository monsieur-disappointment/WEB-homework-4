describe('New Arrivals Component Test', function() {

  let component;

  before(async () => {
    component = await browser.mountVueComponent('/src/components/new-arrivals/NewArrivals.vue', {
      plugins: {
        store: '/src/lib/store.js',
        router: '/src/lib/router.js'
      },

      mocks: {
        '/data/new-arrivals.json': {
          type: 'fetch',
          body: {
            books: [
              {
                "title": "Умереть снова",
                "author": "Тесс Герритсен",
                "image": "https://readly.ru/public/media/covers/a/1/a15c7b5aa0211bfbf42a9edfe4eba82d_160x0.jpg",
                "price": 320,
                "currency": "руб.",
                "category": "Детективы и триллеры > Полицейские детективы",
                "isbn13": 9785389090798,
                "description": "Детектив Джейн Риццоли и судмедэксперт Маура Айлз снова вместе, и им придется углубиться в дикую природу, чтобы найти..."
              }
            ]
          }
        }
      }
    })
  });

  it('tests the component', function(browser) {
    // const newArrivalsValue = await component.getProperty('newArrivals');
    // console.log('newArrivals', newArrivalsValue)

    expect(component).to.be.visible;
    expect(component).to.have.property('newArrivals');

    expect(component).text.toContain('The Memory Police')

    expect(component.findAll('div.col-md-6')).length(1);

    expect(component.property('newArrivals')).to.be.an('array').with.length(1);
  });

  it('logs the innerHTML property', async function(browser) {
    const innerHTML = await browser.getElementProperty(component, 'innerHTML');
    browser.assert.textContains(component, 'The Memory Police');
  });
});
