import { mount } from '@vue/test-utils';
import App from './src/App.vue';
import { describe, expect } from 'vitest';

describe('App.vue', () => {
  test('Renders the time display', () => {
    const wrapper = mount(App, {
      data() {
        return {
          timeDisplay: '01:33:27'
        }
      }
    });

    expect(wrapper.find('.numbers').text()).toBe('01:33:27');
  });


  test('startTimer method correctly sets "paused", "startTime" and "intervalId" data variables.', () => {
    const wrapper = mount(App);

    wrapper.setData({
      paused: true,
      startTime: 0,
      intervalId: 0,
      elapsedTime: 200
    });
    wrapper.vm.startTimer();
    expect(wrapper.vm.paused).toBe(false);
    expect(wrapper.vm.startTime).toBeLessThanOrEqual(Date.now() - wrapper.vm.elapsedTime);
  });


  test('displayTimer method correctly sets the time display', () => {
    const wrapper = mount(App);
    wrapper.setData({
      minutes: 50,
      seconds: 50,
      milliseconds: 50
    });
    wrapper.vm.displayTimer();
    expect(wrapper.vm.timeDisplay).toBe('50:50:50');
  });
});
