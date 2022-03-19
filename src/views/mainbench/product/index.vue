<template>
    <div class="slogan-box">
        <div class="slogan-first">Show Me Code</div>
    </div>
    <div class="page">
        <productbox
            v-for="item in theProducts"
            :name="item.name"
            :topics="item.ware_topicsTags"
            :description="item.description"
            :stars="item.stargazers_count"
            :fork="item.fork"
            :homepage="item.homepage"
            :commits="item.ware_commits"
            :url="item.url"
            :languages="item.ware_languages"
            class="productbox"
        ></productbox>
    </div>
</template>

<script  lang='ts' setup>
/**
 * 点击链接要完成
 */
import qs from 'qs';
import { nextTick, ref } from 'vue';
import productbox from './productBox.vue';
import { getProduct } from '../../../http/apis/probuct'
import { ElLoading } from 'element-plus'
import { timeFormatter } from '../../../util/tools';


let theProducts = ref()
getProduct().then((res: any) => {
    console.log("res1", res)
    for (let i in res) {
        res[i].ware_commits = qs.parse(res[i].ware_commits)
        res[i].ware_languages = qs.parse(res[i].ware_languages)
        res[i].ware_topicsTags = qs.parse(res[i].ware_topicsTags).topicstags
        console.log("s",)
        res[i].ware_commits.commit_date = timeFormatter(res[i].ware_commits.commit_date)
    }
    theProducts.value = res
    // nextTick(() => {
    // })
})
</script>
<style lang='less' scoped>
.page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.productbox {
    margin: 25px;
}
.slogan-box {
    height: 100px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
}
.slogan-first {
    width: 350px;
    background-image: linear-gradient(
        to right,
        rgb(252, 164, 0),
        rgb(48, 28, 228),
        rgb(209, 36, 36)
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 32px;
    margin-top: 28px;
}
</style>