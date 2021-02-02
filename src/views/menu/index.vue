<template>
    <div class=con>
        <div
        v-for="(item, index) in menu"
        :key="'key' + index"
        class="menu-item"
        :class="{'menu-item_active': activeIndex == index }"
        @click="toDeatail(item, index)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script>
import menu from '@/util/menu'

export default {
    data() {
        return {
            menu,
            activeIndex: 0
        }
    },
    methods: {
        toDeatail(menuItem, index) {
            this.activeIndex = index
            this.$router.push({path: menuItem.route})
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-item {
        font-size: 20px;
        text-align: left;
        color: #ccc;
        padding-left: 10px;
    }
    .menu-item_active {
        color: rgb(43, 145, 241);
    }
</style>