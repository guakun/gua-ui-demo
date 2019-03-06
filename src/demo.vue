<template>
  <div style="display: flex; justify-content: center; ">
    <div style="width: 701px;">
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
      <p>段落10</p>
      <p>段落11</p>
      <p>段落12</p>
      <p>段落13</p>
      <p>段落14</p>
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
      <p>段落10</p>
      <p>段落11</p>
      <p>段落12</p>
      <p>段落13</p>
      <p>段落14</p>
      <p>段落15</p>
      <gua-sticky :distance="500">
        <div style="border: 1px solid red;">我是粘滞内容</div>
      </gua-sticky>
      <!--<gua-sticky distance="100">-->
      <!--<div style="border: 1px solid red;">-->
      <!--我是粘滞内容-->
      <!--<img src="https://wx4.sinaimg.cn/large/006dMd5bgy1fhltxp23k9j30c80c8wfc.jpg" alt="">-->
      <!--</div>-->
      <!--</gua-sticky>-->
      <div style="padding: 0 15px;">
        插播一篇张鑫旭大大的文章 《基于 CSS color 属性的静态 UI 组件重构策略》
        <a href="javascript:;" class="weui-btn weui-btn_primary">按钮</a>
        <a href="javascript:;" class="weui-btn weui-btn_warn">按钮</a>
        <a href="javascript:;" class="weui-btn weui-btn_default">按钮</a>
        <a href="javascript:;" class="weui-btn weui-btn_plain-primary">按钮</a>
        <a href="javascript:;" class="weui-btn weui-btn_plain-default">按钮</a>
      </div>
      <p>段落16</p>
      <p>段落17</p>
      <p>段落18</p>
      <p>段落19</p>
      <p>段落20</p>
      <p>段落21</p>
      <p>段落22</p>
      <p>段落23</p>
      <p>段落24</p>
      <p>段落25</p>
      <p>段落26</p>
      <p>段落27</p>
      <p>段落28</p>
      <p>段落29</p>
      <p>段落30</p>
      <p>段落31</p>
      <p>段落32</p>
      <p>段落33</p>
      <p>段落34</p>
      <p>段落35</p>
      <p>段落36</p>
      <p>段落37</p>
      <p>段落38</p>
      <p>段落39</p>
      <p>段落40</p>
      <p>段落41</p>
      <p>段落42</p>
      <p>段落43</p>
      <p>段落44</p>
      <p>段落45</p>
      <p>段落46</p>
      <p>段落47</p>
      <p>段落48</p>
      <p>段落49</p>
      <p>段落50</p>
      <p>段落51</p>
      <p>段落52</p>
      <p>段落53</p>
      <p>段落54</p>
      <p>段落55</p>
      <p>段落56</p>
      <p>段落57</p>
      <p>段落58</p>
      <p>段落59</p>
      <p>段落60</p>
      <p>段落61</p>
      <p>段落62</p>
      <p>段落63</p>
      <p>段落64</p>
      <p>段落65</p>
      <p>段落66</p>
      <p>段落67</p>
      <p>段落68</p>
      <p>段落69</p>
      <p>段落70</p>
      <p>段落71</p>
      <p>段落72</p>
      <p>段落73</p>
      <p>段落74</p>
      <p>段落75</p>
      <p>段落76</p>
      <p>段落77</p>
      <p>段落78</p>
      <p>段落79</p>
      <p>段落80</p>
      <p>段落81</p>
      <p>段落82</p>
      <p>段落83</p>
      <p>段落84</p>
      <p>段落85</p>
      <p>段落86</p>
      <p>段落87</p>
      <p>段落88</p>
      <p>段落89</p>
      <p>段落90</p>
      <p>段落91</p>
      <p>段落92</p>
      <p>段落93</p>
      <p>段落94</p>
      <p>段落95</p>
      <p>段落96</p>
      <p>段落97</p>
      <p>段落98</p>
      <p>段落99</p>
      <p>段落100</p>
    </div>
  </div>
</template>

<script>
  import GuaSticky from './sticky'

  export default {
    name: 'demo',
    components: {GuaSticky},
    data() {
      return {
        selected: [],
        currentPage: 20,
        columns: [
          {text: '姓名', field: 'name', width: 100},
          {text: '分数', field: 'score'},
        ],
        orderBy: { // true - 开启排序, 但是不确定 asc desc
          name: 'asc',
          score: 'desc'
        },
        dataSource: [
          {id: 1, name: 'guagua', score: 100},
          {id: 2, name: 'lulu', score: 100},
          {id: 3, name: 'yiyi', score: 98},
          {id: 4, name: 'yinyin', score: 97, description: 'sjjclmxcynyn'},
          {id: 5, name: '方方', score: 100},
          {id: 6, name: '圆圆', score: 100},
          {id: 7, name: '美国队长', score: 98},
          {id: 8, name: '冬兵', score: 97},
          {id: 9, name: '死侍', score: 100},
          {id: 10, name: '毒液', score: 100},
          {id: 11, name: '钢铁侠', score: 98},
          {id: 12, name: '大黄蜂', score: 97},
          {id: 13, name: '擎天柱', score: 100},
          {id: 14, name: '蜘蛛侠', score: 100},
          {id: 15, name: '蝙蝠侠', score: 98},
          {id: 16, name: '超人', score: 97, description: 'dczvqdxcicrf'},
        ],
        loading: false
      }
    },
    methods: {
      x() {
        console.log('x') // /api/users?score='desc'
        console.log(this.orderBy)
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 700)
      },
      edit(item) {
        alert(`开始编辑${JSON.stringify(item)}`)
      },
      view(item) {
        alert(`开始查看${JSON.stringify(item)}`)
      }
    }
  }
</script>

<style lang="scss">
  /** 插播一篇张鑫旭大大的文章 《基于 CSS color 属性的静态 UI 组件重构策略》 */
  .weui-btn {
    position: relative; display: block; margin-left: auto; margin-right: auto; padding-left: 14px; padding-right: 14px;
    box-sizing: border-box; font-size: 18px; text-align: center; text-decoration: none; color: #fff; line-height: 2.55555556;
    border-radius: 5px; overflow: hidden;
    &_primary {
      background-color: #1aad19;
    }
    &_default {
      color: #000;
      background-color: #f8f8f8;
    }
    &_warn {
      background-color: #e64340;
    }
    &_plain-default {
      color: #353535;
      border: 1px solid #353535;
    }
    &_plain-primary {
      color: #1aad19;
      border: 1px solid #1aad19;
    }
    & + & {
      margin-top: 15px;
    }
  }

  /** 插播一篇张鑫旭大大的文章 《基于 CSS color 属性的静态 UI 组件重构策略》 */
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-size: var(--font-size);
    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", "STHeitiSC-Light", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  html {
    --font-size: 20x;
  }

  .demo {
    margin: 20px;
  }
</style>
