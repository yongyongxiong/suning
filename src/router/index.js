import Vue from 'vue'
import Router from 'vue-router'
import userList from '../components/userList.vue'
// import userEditor from '../components/userEditor.vue'
import roleList from '../components/roleList.vue'
// import roleEditor from '../components/roleEditor.vue'
// import dataPic from '../components/dataPic.vue'

import UserEditor from '../components/userEditor.vue'
import UserList from '../components/userList.vue'
import RoleEditor from '../components/roleEditor.vue'
import RoleList from '../components/roleList.vue'
import  RoleAdd from '../components/roleAdd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/userList",
      name:"userList",
      component:userList
    },
  // {
  //   path:"/userEditor",
  //     name:"userEditor",
  //   component:userEditor
  // },
    {
      path:"/roleList",
      name:"roleList",
      component:roleList
    },
    // {
    //   path:"/dataPic",
    //   name:"dataPic",
    //   component:dataPic
    // },
    {
      path:"/userEditor",
      component:UserEditor
    },
    {
      path:"/userList",
      component:UserList
    },
    // {
    //   path:"/roleEditor",
    //   name:"roleEditor",
    //   component:roleEditor
    // },
    {
      path:"/roleEditor",
      component:RoleEditor
    },
    {
      path:"/roleList",
      component:RoleList
    },
    {
      path:"/roleAdd",
      component:RoleAdd
    },
  ]

})
