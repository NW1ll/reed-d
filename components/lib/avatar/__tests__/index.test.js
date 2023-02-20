import { mount } from "@vue/test-utils";
import { h } from 'vue'
import rdAvatar from '../src/main.vue';
describe('test rd-avatar component', () => {
  it('renders props when passed',() => {
    const wrapper = mount(rdAvatar,
     {
        props: {
            size:'small', padding:15, shade:true,
            shape: 'square', imgSrc:'http://8.142.19.67:3000/images/cat2.jpg',
            bg: 'blue'
        },
    })
    expect(wrapper.props().size).toBe("small")
    expect(wrapper.props().shape).toBe("square")
    expect(wrapper.props().padding).toEqual(15)
    expect(wrapper.props().imgSrc).toBe('http://8.142.19.67:3000/images/cat2.jpg')
    expect(wrapper.props().shade).toBe(true)
    expect(wrapper.props().bg).toBe('blue')
  })
  it("test slots", () => {
    const wrapper = mount(rdAvatar,
    {slots: {
        default: h("h1",{},"Tom")
    }})
    expect(wrapper.find("h1").exists()).toBe(true)
  })
})
