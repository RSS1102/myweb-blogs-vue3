<template>
    <div class="progress">
        <span class="progress-item" v-for="item in styleArr" :style="item"></span>
    </div>
    <div class="progress-sign">
        <span v-for="(item, index) in styleArr" class="progress-sign-item">
            <span class="sign-item-circle" :style="{ background: item.background }"></span>
            <span class="progress-sign-text" :id="theId">{{ item.name }}</span>
        </span>
    </div>
</template>
<script setup lang="ts">
import { PropType, reactive, ref } from 'vue';
// 示例 let obj = { a: 100, b: 50, c: 50,}

const props = defineProps({
    progObj: {
        type: Object,
        required: true


    },
})
let progObj = reactive(props.progObj)
// console.log("progObj", progObj)
let sum: number = 0
let theId = ref('')
for (let j in progObj) {
    let n = progObj[j]
    sum += n
    let per = (n / sum * 100).toFixed(2) + '%'
    theId.value = per
}

let len = (Object.keys(progObj)).length
let itemstyle = []

// let progressSign: HTMLCollectionOf<Element> = document.getElementsByClassName("sign-item-circle")
for (let i = 0; i < len; i++) {
    let keys: string = (Object.keys(progObj))[i]
    let num: number = progObj[keys]
    let per = (num / sum * 100).toFixed(2) + '%'
    let hsl = i * 50
    let backcolor = `hsl(${hsl}, 100%, 50%)`
    itemstyle.push({
        width: per,
        background: backcolor,
        name: keys
    })
}
let styleArr = reactive(itemstyle)
console.log(styleArr)

</script>
<style scoped>
.progress {
    display: flex;
    height: 8px;
    overflow: hidden;
    /* 透明边框 */
    outline: 1px solid transparent;
    border-radius: 6px;
}
.progress-item {
    outline: 2px solid transparent;
}
.progress-item + .progress-item {
    margin-left: 2px;
}
/* sign */
.progress-sign {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 5px;
}
.progress-sign-item {
    min-width: 150px;
    display: flex;
    align-items: center;
}

.progress-sign-text::after {
    margin-left: 8px;
    content: attr(id);
}
.sign-item-circle {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    margin: 0 5px;
    background-color: red;
}
</style>
 