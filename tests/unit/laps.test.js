import { mount } from '@vue/test-utils';
import Laps from './src/components/Laps.vue';
import { expect } from 'vitest';

const wrapper = mount(Laps, {
  props: {
    id: 1,
    displayLap: true,
    lapTimes: []
  }
});

it('Lap component prop id contains a number', async () => {
  expect(wrapper.props().id).toEqual(1);
})