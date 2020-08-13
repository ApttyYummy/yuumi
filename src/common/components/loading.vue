<template> 
    <div class="loading" @click="close()">
        <div class="loading-space" />
        <div class="loading-animation" />
        <div class="loading-tips">
            {{tips}}
        </div>
        <div class="loading-space" />
    </div>
</template>

<script>
export default {
    name: "loading",
    props: {
        tips: {
            type: String,
            default: 'Loading...',
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
        /* 关闭遮罩 */
        close() {
            this.$emit('close');
        }
    }
};
</script>

<style lang="scss" scoped>
.loading {
    @include base-box(100%, 100%, rgba($color: #000, $alpha: 0.3));
    @include flex-box(column, center);
    @include locat-box(fixed, 0, 0, 0, 0);
    @include set-Z('loading');
    &-space {
        @include flex-space(1);
    }
    &-animation {
        @include base-box(40px, 40px, #39E);
        @include animation(rotateplane 1.2s infinite ease-in-out);
    }
    &-tips {
        @include set-font(20px, 20px, #39E);
        margin: 10px 0;
    }
}

@include keyframes(rotateplane) {
  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); } 
  50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); } 
  100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
}
</style>
