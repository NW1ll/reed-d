import { computed, ref } from "vue";

interface tabItemType {
  key: number;
  url: string;
  title: string;
  context: string;
  closed: boolean;
  disabled: boolean;
}

const defaultitem = [
  {
    key: "1",
    title: "Tab 1",
    context: "context of Tab 1",
    closed: false,
    disabled: false,
  },
  {
    key: "2",
    title: "Tab 2",
    context: "context of Tab 2",
    closed: false,
    disabled: false,
  },
  {
    key: "3",
    title: "Tab 3",
    context: "context of Tab 3",
    closed: false,
    disabled: false,
  },
];

export const tabProps = {
  type: {
    type: String,
    default: "line",
  },
  size: {
    type: String,
    default: "middle",
  },
  centered: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: "false",
  },
  activeKey: {
    type: Number,
    default: 1,
  },
  items: {
    type: Array,
    default: defaultitem,
  },
};

export const tabItemProps = {
  type: {
    type: String,
    default: "line",
  },
  title: {
    type: String,
    default: "Tab 1",
  },
  isActive: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  removable: {
    type: Boolean,
    default: false,
  },
};

export const tabEmits = ["add"];
export const tabItemEmits = ["click", "tabClose"];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useTabs = (props, emits) => {
  const tabType = ref<string | undefined>(props.type);
  const tabSize = ref<string | undefined>(props.size);
  const tabCentered = ref<boolean | false>(props.centered);
  const tabEditable = ref<boolean | undefined>(props.editable);
  const tabItems = ref<Array<tabItemType> | undefined>(props.items);
  const activeKey = ref<number | 1>(props.activeKey);

  return {
    tabType,
    tabSize,
    tabItems,
    activeKey,
    tabEditable,
    tabCentered,
  };
};

export const useTab = (props, emits) => {
  const tabType = ref<string | undefined>(props.type);
  const tabTitle = ref<string | undefined>(props.title);
  const tabActive = computed(() => props.isActive);
  const tabDisabled = ref<boolean | undefined>(props.disabled);
  const tabRemovable = ref<boolean | undefined>(props.removable);

  const handleClick = (e) => {
    if (tabDisabled.value) {
      return;
    }
    emits("click", e);
  };

  const handleClose = (e) => {
    if (!tabRemovable.value) {
      return;
    }
    emits("tabClose", e);
  };

  return {
    tabType,
    tabTitle,
    tabActive,
    tabDisabled,
    tabRemovable,
    handleClick,
    handleClose,
  };
};
