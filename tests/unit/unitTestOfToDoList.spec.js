import {mount} from '@vue/test-utils'
import ToDo from "@/components/ToDo";

describe('The Todo.vue component', () => {
    test('should be mounted', () => {
        const wrapper = mount(ToDo)
        expect(wrapper.exists()).toBeTruthy()
    })
    test('should Add button mounted', () => {
        const wrapper = mount(ToDo)
        expect(wrapper.find('#add-button').exists()).toBeTruthy()
    })
    test('should Edit button mounted', () => {
        const wrapper = mount(ToDo)
        expect(wrapper.find('#edit-button').exists()).toBeFalsy()
    })
    test('should Status button mounted', () => {
        const wrapper = mount(ToDo)
        expect(wrapper.find('#status-button').exists()).toBeFalsy()
    })
    test('should Remove button mounted', () => {
        const wrapper = mount(ToDo)
        expect(wrapper.find('#remove-button').exists()).toBeFalsy()
    })
    test('should input area mounted', () => {
        const wrapper = mount(ToDo)
        expect(wrapper.find('#input-area').exists()).toBeTruthy()
    })
})
