<template>
<div>
    <div>
        <h1 style="float:left">菜鸟驿站</h1>
        <div style="float:right"> 
            <a-button type="primary" @click="() => addpackage">添加包裹</a-button>
        </div>
    </div>
  <a-table :dataSource="dataSource" :columns="columns">
    <div slot="filterDropdown" slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }" class='custom-filter-dropdown'>
      <a-input
        v-ant-ref="c => searchInput = c"
        :placeholder="`Search ${column.dataIndex}`"
        :value="selectedKeys[0]"
        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
        @pressEnter="() => handleSearch(selectedKeys, confirm)"
        style="width: 188px; margin-bottom: 8px; display: block;"
      />
      <a-button
        type='primary'
        @click="() => handleSearch(selectedKeys, confirm)"
        icon="search"
        size="small"
        style="width: 90px; margin-right: 8px"
      >Search</a-button>
      <a-button
        @click="() => handleReset(clearFilters)"
        size="small"
        style="width: 90px"
      >Reset</a-button>
    </div>
    <a-icon slot="filterIcon" slot-scope="filtered" type='search' :style="{ color: filtered ? '#108ee9' : undefined }" />
    <template slot="customRender" slot-scope="text">
      <span v-if="searchText">
        <template v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
          <mark v-if="fragment.toLowerCase() === searchText.toLowerCase()" :key="i" class="highlight">{{fragment}}</mark>
          <template v-else>{{fragment}}</template>
        </template>
      </span>
      <template v-else>{{text}}</template>
    </template>
  </a-table>
</div>
</template>

<script>
export default {
  data () {
    return {
      searchText: '',
      searchInput: null,
      columns: [{
        title: '运单号',
        dataIndex: 'ordernumber',
        key: 'ordernumber',
        scopedSlots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) => record.ordernumber.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus()
            },0)
          }
        },
      }, {
        title: '收件人',
        dataIndex: 'receiver',
        key: 'receiver',
        scopedSlots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) => record.receiver.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus()
            })
          }
        },
      }, {
        title: '电话',
        dataIndex: 'telephone',
        key: 'telephone',
        scopedSlots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) => record.telephone.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus()
            })
          }
        },
      },
      {
        title: '状态',
        dataIndex: 'status',
        filters: [
            { text: '已预约', value: 'appointed' },
            { text: '未预约', value: 'unappoint' },
            { text: '已取件', value: 'received' },
        ],
        width: '20%',
        }],
    }
  },
  methods: {
    handleSearch (selectedKeys, confirm) {
      confirm()
      this.searchText = selectedKeys[0]
    },

    handleReset (clearFilters) {
      clearFilters()
      this.searchText = ''
    },
    addpackage:function(){
        console.log(111111111111111111111);
        this.$router.push("/addpackage")
    }
  },
  computed:{
      dataSource:function(){
          console.log(111,this.$store.state.packageList)
          return this.$store.state.packageList;
      }
  },
  created:function(){
      this.$store.dispatch("getPackageInfos")
      
  }
}
</script>
<style scoped>
.custom-filter-dropdown {
  padding: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>