import { mount } from '@vue/test-utils';
import App from './src/App.vue';
import { expect } from 'vitest';

const wrapper = mount(App);

test('startTimer method exists', () => {
  expect(wrapper.startTimer()).toBeDefined();
})