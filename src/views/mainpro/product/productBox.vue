<template>
    <el-card class="box-card">
        <template #header>
            <div class="header">
                <div class="header-title" @click="goPage(props.url)">
                    {{ props.name }}
                    <span v-if="props.fork" class="fork">fork</span>
                </div>
                <div class="header-stars">
                    <el-icon>
                        <star-filled />
                    </el-icon>
                    {{ props.stars }}
                </div>
            </div>
        </template>
        <div class="lines margins">
            <div v-if="props.topics?.length == 0">暂未有标签...</div>
            <el-tag v-for="item in props.topics">{{ item }}</el-tag>
        </div>
        <div class="lines text-indent">{{ props.description }}</div>
        <div class="languages">这里用来显示语言的成分</div>

        <div class="the-commit">
            <div class="updated">
                <el-icon>
                    <promotion />
                </el-icon>
                <div>Updated:</div>
            </div>
            <div class="lines text-indent">{{ props.commits?.commit_message }}</div>
            <div class="commits">
                <div class="commit-user">
                    <el-avatar :icon="Failed" :size="50" :src="props.commits?.commit_avatar"></el-avatar>
                    <div>
                        <div class="user-name">{{ props.commits?.commit_name }}</div>
                        <div>{{ props.commits?.commit_date }}</div>
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script lang='ts' setup>
import { PropType } from 'vue'
import { Promotion, StarFilled, Failed } from '@element-plus/icons-vue'
const props = defineProps({
    name: String,
    topics: Array as PropType<string[]>,
    description: String,
    stars: Number,
    fork: Boolean,
    homepage: String,
    commits: Object,
    languages: Object,
    url: String

})
const goPage = (url: any) => {
    // 跳转页面
    console.log(url)
    window.open(url, "_blank")
}

</script>

<style lang='less' scoped>
html,
body {
    height: 100%;
}
.box-card {
    width: 400px;
}
.header {
    display: flex;
    justify-content: space-between;
    .header-title {
        font-weight: bold;
        margin-left: 20px;
        cursor: pointer;
    }
    .header-title:hover {
        color: rgb(116, 116, 116);
    }
}
.lines {
    width: 350px;
    // 多行文本省略
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    .el-tag {
        margin-left: 10px;
    }
}
.languages {
    margin: 15px 0;
}
.updated {
    .el-icon {
        font-size: 20px;
        color: rgb(216, 96, 96);
    }
    margin: 0 15px 10px 15px;
    font-weight: bolder;
    color: rgb(92, 86, 86);
    display: flex;
}
.the-commit {
    border: 1px solid rgb(230, 226, 226);
    padding: 10px 5px;
}
.commits {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .commit-user {
        display: flex;
    }
    .el-avatar {
        margin: 2px 10px;
    }
    .user-name {
        margin-left: 20px;
        font-weight: bold;
        margin-bottom: 5px;
    }
}
.text-indent {
    text-indent: 25px;
}
.margins {
    margin: 15px 0;
}
.fork {
    margin-left: 10px;
    font-size: 14px;
    color: rgb(26, 25, 25);
    background: rgba(255, 196, 0, 0.815);
    padding: 3px;
    border-radius: 5px;
}
</style>