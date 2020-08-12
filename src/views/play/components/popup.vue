<template>
    <div v-if="show" class="page">
        <div class="mask" @click.stop="show = !show" />
        <div class="popup">
            <div class="popup-header">
                <div class="popup-header-title">{{title}}</div>
            </div>
            <div class="popup-main">
                <slot></slot>
            </div>
            <div class="popup-button" @click.stop="show = !show">确定</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "popup",
    props: {
        /* 弹窗标题 */
        title: {
            type: String,
            default: "Popup Title",
        },
    },
    watch: {
        /* 弹出后禁止滚动 */
        show(val) {
            val ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
        },
    },
    data() {
        return {
            /* 弹窗显示 */
            show: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.page {
    @include base-box(100%);
    @include locat-box(fixed, 0, 0, 0, 0);
    @include set-Z(9000);
    @include flex-box(column);
    .mask {
        @include flex-space(1);
        @include base-box(100%, null, rgba($color: #000, $alpha: 0.3));
    }
    .popup {
        @include base-box(100%, 60%, #fff);
        @include flex-box(column, center);
        padding: 0 10px;
        box-sizing: border-box;
        position: relative;
        &-header {
            @include base-box(100%, 40px);
            @include flex-box(row, center);
            position: relative;
            border-bottom: 1px solid #39f;
            &-title {
                @include set-font(12px, 12px, #39f);
                @include locat-box(absolute, null, null, null, 50%);
                @include transform(translateX(-50%));
            }
        }
        &-main {
            @include base-box(100%, null);
            @include flex-space(1);
            overflow: hidden;
            overflow-y: auto;
        }
        &-button {
            @include base-box(80%, 20px, #39f);
            @include set-font(12px, 20px, #fff, center);
            border-radius: 30px;
            margin: 10px 0;
        }
    }
}
</style>