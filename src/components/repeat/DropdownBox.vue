<template>
  <div class="dropdown">
    <span class="dropSpan">
      <slot name="topName"></slot>
    </span>
    <!--下拉框-->
    <div class="dropdown-content"></div>
  </div>
</template>
<script>
export default {
  name: "dropdownbox",
};
</script>
<style >
/*整个顶部的高度，颜色*/
#topBanner {
  height: 80px;
  /*background-color: aquamarine;*/
  display: flex;
}

/*
返回首页的图标大小
返回首页的图标位置 上 右 下 左
*/
.topLeft img {
  height: 60px;
  width: 60px;
  margin: 10px 0 0 100px;
  border-radius: 50%;
}

/*下拉*/
.topRight {
  background-color: #84a3e3;
  margin-top: 30px;
  /*右对齐  定位类型：position，*/
  position: absolute;
  right: 100px;
}

/* 设置下拉按钮的样式 */
.dropSpan {
  background-color: #57c75a;
  color: white;
  /*内边距属性*/
  padding: 10px;
  font-size: 16px;
  /*边框*/
  border: none;
  /*悬浮手指形状*/
  cursor: pointer;
}

/* 容器 <div> - 需要放置下拉内容 */
.dropdown {
  /*position: relative;*/
  /*使段落生出行内框：*/
  display: inline-block;
}

/* 下拉内容（默认隐藏） */
.dropdown-content {
  /*此元素不会被显示。*/
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 130px;
  /*可以设置一个或多个下拉阴影的框。*/
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  /*堆叠顺序*/
  z-index: 1;
}

/* 下拉链接 */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  /*规定添加到文本的修饰。*/
  text-decoration: none;
  display: block;
}

/* 悬停时更改下拉链接的颜色 */
.dropdown-content a:hover {
  background-color: #fcf8ef;
}

/* 悬停时显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

/* 显示下拉内容时，更改下拉按钮的背景颜色 */
.dropdown:hover .dropSpan {
  background-color: #84be89;
}

.Finger {
  cursor: pointer;
}
</style>