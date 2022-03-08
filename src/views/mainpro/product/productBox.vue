<template>
    <el-card class="box-card">
        <template #header>
            <div class="header">
                <div class="header-title">{{ props.name }}</div>
                <div class="header-stars">
                    <el-icon>
                        <star-filled />
                    </el-icon>
                    {{ props.stars }}
                </div>
            </div>
        </template>
        <div class="lines">
            <el-tag v-for="item in props.topics">{{ item }}</el-tag>
        </div>
        <div class="lines text-indent">{{ props.description }}</div>
        <div class="languages">这里用来显示语言的成分</div>

        <div class="lines text-indent">{{ props.commits?.commit_message }}</div>
        <div class="commits">
            <div class="commit-user">
                <el-avatar :size="50" :src="props.commits?.commit_avatar"></el-avatar>
                <div>
                    <div class="user-name">{{ props.commits?.commit_name }}</div>
                    <div>{{ props.commits?.commit_date }}</div>
                </div>
            </div>
            <div class="forks">
                <el-tag type="warning" v-if="props.fork" @click="goPage(props.fork_url)">fork</el-tag>
            </div>
        </div>
    </el-card>
</template>

<script lang='ts' setup>
import { PropType } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'
const props = defineProps({
    name: String,
    topics: Array as PropType<string[]>,
    description: String,
    stars: Number,
    fork: Boolean,
    fork_url: String,
    commits: Object,
    languages: Object,

})
const goPage = (url: string | undefined) => {
    // 跳转页面

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
    }
}
.lines {
    width: 350px;
    margin-bottom: 5px;
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
    margin-bottom: 5px;
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
    .forks {
        position: relative;
        .el-tag {
            position: absolute;
            bottom: 0;
        }
    }
}
.text-indent {
    text-indent: 25px;
}
</style>