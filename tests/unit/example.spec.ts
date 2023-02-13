import { shallowMount } from "@vue/test-utils";
import gButton from "../../components/lib/button2/index";

describe("HelloWorld.vue", () => {
  it("renders props.btnType when passed", () => {
    const btnType = "default";
    const wrapper = shallowMount(gButton, {
      props: { btnType },
    });
    expect(wrapper.props().btnType).toBe("default");
  });
});
