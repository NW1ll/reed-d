<template>
    <label class="rd-checkbox-group">
        <slot></slot>
    </label>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, toRefs } from 'vue';

export default defineComponent({
    name: 'RdCheckboxGroup',
    props: {
        modelValue: {
            type: Array,
            default: () => [],
        },
        size: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props,ctx) {
        // const checkboxGroupEmits = ["update:modelValue", "change"];
        const changeEvent = (value) => {
            ctx.emit("update:modelValue", value);
            ctx.emit("change", value);
        };
        provide("checkboxGroupKey",
            reactive({
                ...toRefs(props),
                changeEvent,
            }))
    }
}) 
</script>
