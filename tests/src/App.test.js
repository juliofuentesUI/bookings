import App from '../../client/src/components/App';

describe('App Component', () => {
  it('should display a "Book" button', () => {
    const options = {
      disableLifecycleMethods: true
    };

    const wrapper = shallow(<App />, options);
    const text = wrapper.find('.bookBtn');
    expect(text.text()).toBe('Book');
  });
})