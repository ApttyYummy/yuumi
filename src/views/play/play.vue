<template>
    <div class="page">
        <base-peak></base-peak>
        <div class="form">
            <div class="form-text">Debounce: {{this.showText}}</div>
            <input class="form-input" type="text" v-model="debounceText" @keyup="handleInput()" />
            <div id="content" class="form-button">{{clickCount}}</div>
        </div>
    </div>
</template>

<script>
import { debounce, throttle } from "@/common/utils/index";
export default {
    components: {
    },
    data() {
        return {
            debounceText: "",
            showText: "",
            clickCount: 0,
        };
    },
    mounted() {
    },
    methods: {
        /* 防抖 */
        handleInput: debounce(function (e) {
            this.showText = this.debounceText;
        }, 1000),
    },
};
</script>

<style lang="scss" scoped>
.form {
    @include base-box(90%, 200px);
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #39f;
    border-radius: 10px;
    &-input {
        @include base-box(50%, 20px);
        @include set-font(12px, 12px, #39f);
        padding: 0 5px;
        border: 1px solid #39f;
        border-radius: 5px;
        outline: none;
    }
    &-text {
        @include base-box(50%, 12px);
        @include set-font(12px, 12px, #39f);
        margin: 5px 0;
    }
    &-button {
        @include base-box(50px, 16px, #39f);
        @include set-font(12px, 16px, #fff, center);
        margin: 5px 0;
        border: 1px solid #39f;
        border-radius: 16px;
        cursor: pointer;
    }
}
</style>