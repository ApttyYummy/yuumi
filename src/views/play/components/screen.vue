<template>
    <div class="screen">
        <div class="screen-header">
            <div class="screen-header-item" @click="showMenu('SECTION')">Section</div>
            <div class="screen-header-item" @click="showMenu('SORT')">Sort</div>
        </div>
        <transition name="slide-fade">
            <div v-if="showOption" class="screen-menu">
                <div class="screen-menu-option" v-for="(item, index) in list" :key="index">
                    <div class="screen-menu-option-item" @click="chooseItem(item)">{{item}}</div>
                </div>
            </div>
        </transition>    
    </div>
</template>

<script>
export default {
    name: "screen",
    props: {},
    watch: {
        query: {
            handler: function(val) {
                // console.log('child watch', val);
                this.$parent.queryData(val);
            },
            deep: true
        },
    },
    data() {
        return {
            showOption: false,   //显示菜单选项
            list: [],            //菜单列表
            query: {             //查询数据
                sort: '',        //排序
                section: '',     //价格区间
            },
            menuType: '',        //菜单类型
        };
    },
    methods: {
        /* 显示筛选菜单 */
        showMenu(menuType) {
            if (!this.menuType) this.showOption = true;
            if (this.menuType === menuType)  this.showOption = !this.showOption;
            this.menuType = menuType;
            const map = [
                { type: 'SECTION', data: ['10-15', '15-20'] },
                { type: 'SORT', data: ['U', 'D'] },
            ];
            map.forEach(item => {
                if (item.type === menuType) this.list = item.data;
            });
        },
        /* 选择选项 */
        chooseItem(item) {
            if (this.menuType === 'SORT') this.query.sort = item;
            if (this.menuType === 'SECTION') this.query.section = item;
            // console.log('child choose', this.query);
        },
    },
    filters: {
        /* 格式化菜单选项 */
        formatItem(item) {
            
        },
    },
};
</script>

<style lang="scss" scoped>
$height: 20px;
.screen {
    @include set-Z(100, relative);
    &-header {
        @include base-box(100%, $height, #61EB8F);
        @include flex-box(row, center);
        @include set-Z(100, relative);
        box-sizing: border-box;
        &-item {
            @include set-font(12px, $height, #FFF, center);
            @include flex-space(1);
            @include set-border(#13BF83);
        }
    }
    &-menu {
        @include base-box(100%, null, #61EB8F);
        @include set-Z(50, absolute);
        @include set-border(#13BF83);
        &-option {
            @include base-box(100%, $height, #61EB8F);
            &-item {
                @include base-box(100%, $height);
                @include set-font(12px, $height, #FFF, left);
                padding-left: 10px;
                box-sizing: border-box;
            }
        }
    }
}
</style>