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


  test('displayTimer method correctly sets the time display to a string with minutes, seconds and milliseconds', () => {
    const wrapper = mount(App);
    wrapper.setData({
      minutes: 50,
      seconds: 50,
      milliseconds: 50
    });

    wrapper.vm.displayTimer();
    expect(wrapper.vm.timeDisplay).toBe('50:50:50');
  });


  test('pauseTimer method clears the intervalId and sets paused variable to true', () => {
    const wrapper = mount(App);
    wrapper.setData({
      intervalId: 1
    });

    wrapper.vm.pauseTimer();
    expect(wrapper.vm.intervalId).toBe(1);
    expect(wrapper.vm.paused).toBe(true);
  });


  test('resetTimer method sets all data variables to default values', () => {
    const wrapper = mount(App);
    wrapper.setData({
      intervalId: 1,
      paused: false,
      elapsedTime: 38921,
      minutes: 4,
      seconds: 34,
      milliseconds: 25,
      timeDisplay: '04:34:25',
      lapCounter: 3,
      uniqueId: 4,
      lapTimes: [
        { label: 'Lap 1', time: '01:13:76' },
        { label: 'Lap 2', time: '03:46:43' },
        { label: 'Lap 3', time: '04:13:89' }
      ]
    });

    wrapper.vm.resetTimer();
    expect(wrapper.vm.intervalId).toStrictEqual(1);
    expect(wrapper.vm.paused).toStrictEqual(true);
    expect(wrapper.vm.elapsedTime).toStrictEqual(0);
    expect(wrapper.vm.minutes).toStrictEqual(0);
    expect(wrapper.vm.seconds).toStrictEqual(0);
    expect(wrapper.vm.milliseconds).toStrictEqual(0);
    expect(wrapper.vm.timeDisplay).toStrictEqual('00:00:00');
    expect(wrapper.vm.lapCounter).toStrictEqual(0);
    expect(wrapper.vm.uniqueId).toStrictEqual(0);
    expect(wrapper.vm.lapTimes).toStrictEqual([]);
  });


  test('logLap method increments lapCounter and uniqueId', () => {
    const wrapper = mount(App);
    wrapper.setData({
      uniqueId: 4,
      lapCounter: 5
    });

    wrapper.vm.logLap();
    expect(wrapper.vm.uniqueId).toStrictEqual(5);
    expect(wrapper.vm.lapCounter).toStrictEqual(6);
  });


  test('logLap method pushes valid lap time object to lapTimes array', () => {
    const wrapper = mount(App);
    wrapper.setData({
      uniqueId: 3,
      lapCounter: 2,
      timeDisplay: '01:23:55',
      lapTimes: []
    });

    wrapper.vm.logLap();
    expect(wrapper.vm.lapTimes).toStrictEqual([
      { id: 4, label: 'Lap 3', time: '01:23:55' }
    ]);
  });


  test('displayLaps method correctly sets viewLapBtnText and lapDisplayed variables when lapDisplayed is false', () => {
    const wrapper = mount(App);
    wrapper.setData({
      lapDisplayed: false,
      viewLapBtnText: 'View Laps'
    });

    wrapper.vm.displayLaps();
    expect(wrapper.vm.viewLapBtnText).toStrictEqual('Close laps');
    expect(wrapper.vm.lapDisplayed).toBe(true);
  });


  test('displayLaps method correctly sets viewLapBtnText and lapDisplayed variables when lapDisplayed is true', () => {
    const wrapper = mount(App);
    wrapper.setData({
      lapDisplayed: true,
      viewLapBtnText: 'Close laps'
    });

    wrapper.vm.displayLaps();
    expect(wrapper.vm.viewLapBtnText).toStrictEqual('View Laps');
    expect(wrapper.vm.lapDisplayed).toBe(false);
  });
});
