<template>
    <div class="demo">
        <div class="demo" id="easy-easyDimension"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$easyDimension.init('easy-easyDimension')
        const option = {
            points: [
                {x: 100, y: 100 },
                {x: 200, y: 100 },
                {x: 300, y: 100 },
                {x: 400, y: 100 },
                {x: 500, y: 100 }
            ],
            radius: 10,
            color: 'red'
        }
        this.$easyDimension.drawPoints(option, 'drawPie')
    }
}
</script>

<style lang="scss" scoped>
.demo {
    width: 800px;
    height: 400px;
    background: #eee; 
}
</style>