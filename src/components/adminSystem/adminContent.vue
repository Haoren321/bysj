<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu theme="dark" width="auto">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>视频管理
          </template>
          <MenuItem name="tmp_video" to="/adminSystem/tmp_video">审核视频</MenuItem>
          <MenuItem name="1-2" to="/adminSystem/report">投诉稿件</MenuItem>
          <MenuItem name="1-3" to="/adminSystem/videoSystemMange">视频管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>用户
          </template>
          <MenuItem name="2-1" to="/adminSystem/userManage">用户管理</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header
        :style="{background: '#fff', color:'#000', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"
      >
        后台管理
        <Dropdown trigger="click" id="adminBtn">
          <a href="javascript:void(0)">
            <span>{{admin.adminId}}</span>
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Header>
      <Content :style="{padding: '10px 16px 16px'}">
        <Card>
          <div id="content">
              <router-view/>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
#adminBtn{
    position: absolute;
    right: 50px;
}
#content{
  min-height: 600px;
}
</style>
<script>
export default {
  data() {
    return {
      admin: this.$store.state.admin
    };
  }
};
</script>
