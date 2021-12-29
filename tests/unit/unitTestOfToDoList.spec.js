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
describe('The Todo.vue component with "buy some milk" in to do list',() => {
    test('should see "buy some milk" in to do list',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'buy some milk',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        expect(wrapper.find('#task-0').exists()).toBeTruthy()
    })
})
describe('The Todo.vue component Adding second task in list',() => {
    test('should "enjoy the assignment" be inserted to do list',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'buy some milk',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        await wrapper.find('#input-area').setValue('enjoy the assignment')
        await wrapper.find('#add-button').trigger('click')

        expect(wrapper.find('#task-1').exists()).toBeTruthy()
    })
})
describe('The Todo.vue component click status button and change task status',() => {
    test('should "buy some milk" be marked as',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'buy some milk',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        await wrapper.find('#status-button-0').trigger('click')

        expect(wrapper.find('#task-0').classes()).toContain('line-through')
    })
})
describe('The Todo.vue component click status button and change marked task status',() => {
    test('should "buy some milk" be not marked as',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'buy some milk',
                            status:'Done'
                        }
                    ]
                }
            }
        })
        await wrapper.find('#status-button-0').trigger('click')

        expect(wrapper.find('#task-0').classes()).toEqual(['w-full','text-grey-darkest'])
    })
})
describe('The Todo.vue component click remove button',() => {
    test('should "rest for a while" be deleted',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'rest for a while',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        await wrapper.find('#remove-button-0').trigger('click')

        expect(wrapper.find('#task-0').exists()).toBeFalsy()
    })
})
describe('The Todo.vue component Click remove button',() => {
    test('should "rest for a while" be deleted',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'rest for a while',
                            status:'Todo'
                        },
                        {
                            name:'drink water',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        expect(wrapper.find('#task-0').exists()).toBeTruthy()
        expect(wrapper.find('#task-0').text()).toEqual('rest for a while')
        expect(wrapper.find('#task-1').exists()).toBeTruthy()
        expect(wrapper.find('#task-1').text()).toEqual('drink water')

        await wrapper.find('#remove-button-0').trigger('click')

        expect(wrapper.find('#task-0').text()).toEqual('drink water')
        expect(wrapper.find('#task-1').exists()).toBeFalsy()
    })
})
describe('The Todo.vue component',() => {
    test('should task and status button exist',() => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'Go to Gym',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        expect(wrapper.find('#task-0').exists()).toBeTruthy()
        expect(wrapper.find('#task-0').text()).toEqual('Go to Gym')
        expect(wrapper.find('#task-0').classes()).toEqual(['w-full','text-grey-darkest'])

        expect(wrapper.find('#status-button-0').exists()).toBeTruthy()
        expect(wrapper.find('#status-button-0').text()).toEqual('Todo')
        expect(wrapper.find('#status-button-0').classes()).toContain('bg-yellow-500')
        expect(wrapper.find('#status-button-0').classes()).toEqual(['flex-no-shrink','p-2','ml-4',
            'mr-2','border-2','rounded','bg-yellow-500','border-yellow-500','text-white'])
    })
})
describe('The Todo.vue component methods', () => {
    test('should add button run',async () => {
        const wrapper = mount(ToDo,{
            data() {
                return {
                    task : 'Do your Homework'
                }
            }
        })
        await wrapper.find('#add-button').trigger('click')
        expect(wrapper.find('#task-0').exists()).toBeTruthy()

        expect(wrapper.find('#status-button-0').exists()).toBeTruthy()
        expect(wrapper.find('#status-button-0').text()).toEqual('Todo')

        expect(wrapper.find('#edit-button-0').exists()).toBeTruthy()

        expect(wrapper.find('#remove-button-0').exists()).toBeTruthy()
    })
    test('should remove button run',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'Do your Homework',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        expect(wrapper.find('#task-0').exists()).toBeTruthy()
        expect(wrapper.find('#remove-button-0').exists()).toBeTruthy()
        await wrapper.find('#remove-button-0').trigger('click')
        expect(wrapper.find('#task-0').exists()).toBeFalsy()
    })
    test('should status button run',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'Do your Homework',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        expect(wrapper.find('#task-0').exists()).toBeTruthy()
        expect(wrapper.find('#status-button-0').exists()).toBeTruthy()

        await wrapper.find('#status-button-0').trigger('click')

        expect(wrapper.find('#status-button-0').text()).toEqual('Done')
        expect(wrapper.find('#status-button-0').classes()).toContain('bg-green-500')
        expect(wrapper.find('#task-0').classes()).toContain('line-through')
    })
    test('should edit button run',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'Do your Homework',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        expect(wrapper.find('#task-0').exists()).toBeTruthy()
        expect(wrapper.find('#edit-button-0').exists()).toBeTruthy()

        await wrapper.find('#edit-button-0').trigger('click')
        await wrapper.find('#input-area').setValue('Go to Gym')
        await wrapper.find('#add-button').trigger('click')

        expect(wrapper.find('#task-0').exists()).toBeTruthy()
        expect(wrapper.find('#task-0').text()).toEqual('Go to Gym')
    })
})
describe('The Todo.vue component button style', () => {
    test('should change color when mouseover button',async () => {
        const wrapper = mount(ToDo,{
            data(){
                return {
                    tasks: [
                        {
                            name:'Do your Homework',
                            status:'Todo'
                        }
                    ]
                }
            }
        })
        expect(wrapper.find('#add-button').classes()).toContain('text-green-400')
        expect(wrapper.find('#add-button').classes()).toContain('border-green-400')
        await wrapper.find('#add-button').trigger('mouseover')
        expect(wrapper.find('#add-button').classes()).toContain('hover:bg-green-400')
        expect(wrapper.find('#add-button').classes()).toContain('hover:text-white')

        expect(wrapper.find('#remove-button-0').classes()).toContain('text-red-500')
        expect(wrapper.find('#remove-button-0').classes()).toContain('border-red-500')
        await wrapper.find('#remove-button-0').trigger('mouseover')
        expect(wrapper.find('#remove-button-0').classes()).toContain('hover:bg-red-500')
        expect(wrapper.find('#remove-button-0').classes()).toContain('hover:text-white')

        expect(wrapper.find('#edit-button-0').classes()).toContain('text-blue-500')
        expect(wrapper.find('#edit-button-0').classes()).toContain('border-blue-500')
        await wrapper.find('#edit-button-0').trigger('mouseover')
        expect(wrapper.find('#edit-button-0').classes()).toContain('hover:bg-blue-500')
        expect(wrapper.find('#edit-button-0').classes()).toContain('hover:text-white')


    })
})
