import rdTab from "../main.vue";
import { mount, shallowMount } from "@vue/test-utils";
import mountTest from "../../../../tests/shared/mountTest";
import { h } from "vue";

const defaultitem = [
  {
    key: "1",
    title: "Tab 1",
    context: "context of Tab 1",
    disabled: false,
  },
  {
    key: "2",
    title: "Tab 2",
    context: "context of Tab 2",
    disabled: true,
  },
  {
    key: "3",
    title: "Tab 3",
    context: "context of Tab 3",
    disabled: false,
  },
];

describe("Tab Test", () => {
  mountTest(rdTab);
  it("test props", () => {
    const wrapper = shallowMount(rdTab, {
      props: {
        type: "line",
        size: "large",
        centered: false,
        activeKey: 2,
      },
    });
    expect(wrapper.props().type).toBe("line");
    expect(wrapper.props().size).toBe("large");
    expect(wrapper.props().activeKey).toEqual(2);
    expect(wrapper.props().centered).toBeFalsy();
  });
  it("test slots", () => {
    const wrapper = mount(rdTab, { 
      slots: {
        leftExtra: h("h1", {}, "left"),
        rightExtra: h("h2", {}, "right"),
      },
    });
    expect(wrapper.find("h1").exists()).toBeTruthy();
    expect(wrapper.find("h2").exists()).toBeTruthy();
  });

  it("test item", () => {
    const wrapper = mount(rdTab, {
      props: {
        type: "line",
        items: defaultitem,
      },
    });
    expect(wrapper.find(".rd-tab-item-line").exists()).toBeTruthy();
    expect(wrapper.find(".rd-tab-item-disabled").exists()).toBeTruthy();
  });

  it("test click", () => {
    const wrapper = mount(rdTab, {
      props: {
        type: "line",
        items: defaultitem,
        activeKey: 1,
      },
      mocks: {
        $router: {
          tabChange: jest.fn(),
        },
      },
    });
    expect(wrapper.props().activeKey).toEqual(1);

    wrapper.findAll(".rd-tab-item").at(1).trigger("click"); // tab2 is disabled
    expect(wrapper.vm.activeKey).toEqual(1);

    wrapper.findAll(".rd-tab-item").at(2).trigger("click");
    expect(wrapper.vm.activeKey).toEqual(3);
  });
});
