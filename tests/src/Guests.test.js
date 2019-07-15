import Guests from '../../client/src/components/Guests';

describe('Guests Component', () => {
  it('should display a button to add Adult guests', () => {
    const options = {
      disableLifecycleMethods: true
    };

    const wrapper = shallow(<Guests />, options);
    const text = wrapper.find('.addAdultsCountBtn');
    expect(text).toExist;
  });

  it('should update showPanel on state to true when Guests field is clicked', () => {
    const options = {
      disableLifecycleMethods: true
    };

    const wrapper = shallow(<Guests />, options);
    const text = wrapper.find('.fieldBox');
    text.simulate('click');
    expect(wrapper.state('showPanel')).toBe(true);
  });

  it('should add 1 child guest on click', () => {
    const options = {
      disableLifecycleMethods: true
    };

    const wrapper = shallow(<Guests />, options);
    const field = wrapper.find('.fieldBox');
    field.simulate('click');
    const text = wrapper.find('.addChildrenCountBtn');
    expect(text).toExist;
  });
})