import { shallow } from 'enzyme';
import React from 'react';
import HeadlineTitle from './headline-title';

test('title displays text with headline1 class', () => {
    const title = shallow(<HeadlineTitle text="Some Text" cssClass="headline1" />);
    expect(title.find('div.headline1').text()).toEqual('Some Text');
});

test('title displays text with headline4 class', () => {
    const title = shallow(<HeadlineTitle text="Some Text" cssClass="headline4" />);
    expect(title.find('div.headline4').text()).toEqual('Some Text');
});
