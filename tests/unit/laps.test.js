import { mount } from '@vue/test-utils';
import Laps from './src/components/Laps.vue';
import { describe, expect, test } from 'vitest';

describe('Laps.vue', () => {
  test('Renders a lap label and time display for a recorded lap', () => {
    const lapTimes = [ 
      { 
        label: 'Lap 1', time: '05:37:87' 
      } 
    ];

    const wrapper = mount(Laps, {
      props: { 
        lapTimes: lapTimes,
        id: 1,
        displayLap: true
      },
    });
    expect(wrapper.find('.lap').text()).toBe('Lap 1');
    expect(wrapper.find('.time').text()).toBe('05:37:87');
  });
});
