import rdSelect from "../src/main.vue";
import { mount } from "@vue/test-utils";
import mountTest from "../../../../tests/shared/mountTest";
import { ref } from "vue";
const value = ref(["song0", "song3", "song4"]);
const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: "song0",
    disabled: true,
  },
  {
    label: "Drive My Car",
    value: "song1",
  },
  {
    label: "Norwegian Wood",
    value: "song2",
  },
  {
    label: "You Won't See",
    value: "song3",
    disabled: true,
  },
  {
    label: "Nowhere Man",
    value: "song4",
  },
  {
    label: "Think For Yourself",
    value: "song5",
  },
  {
    label: "The Word",
    value: "song6",
  },
  {
    label: "Michelle",
    value: "song7",
    disabled: true,
  },
  {
    label: "What goes on",
    value: "song8",
  },
  {
    label: "Girl",
    value: "song9",
  },
  {
    label: "I'm looking through you",
    value: "song10",
  },
  {
    label: "In My Life",
    value: "song11",
  },
  {
    label: "Wait",
    value: "song12",
  },
];

describe("rdSelect", () => {
  mountTest(rdSelect);
  it("测试渲染是否正确", () => {
    const wrapper = mount({
      render() {
        return <rdSelect>Follow</rdSelect>;
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("test props", () => {
    const wrapper = mount(rdSelect, {
      props: {
        value: value,
        options: options,
        remote: false,
        multiple: true,
        clearable: true,
      },
    });
    expect(wrapper.props()).toEqual({
      value: value,
      options: options,
      remote: false,
      multiple: true,
      clearable: true,
    });
  });
});
