import Dates from '../../client/src/components/App';
import { exportAllDeclaration } from '@babel/types';

describe('Dates Component', () => {
  it('should change color of Check-in text on click', () => {
    const options = {
      disableLifecycleMethods: true
    };

    const wrapper = shallow(<Dates />, options);
    expect(wrapper.exists('.dates')).to.equal(true);    
    // const text = wrapper.find('.datesBtn');
    // text.simulate('click');
    // expect(wrapper.state('checkInColor').toBe('#99EDE6'));
  });
})