import { action, autorun, configure, observable } from "mobx";

configure({
  enforceActions: 'always'
})

// class Store {
//   @observable isTabbarShow = true
//   @observable list = []
//   @observable cityName = '北京'
//   @action tabbarShow() {
//     this.isTabbarShow = true
//   }
//   @action tabbarHide() {
//     this.isTabbarShow = false
//   }
// }

// const store=observable({
//   isTabbarShow:true,
//   list:[],
//   cityName:'北京',
//   tabbarShow(){
//     this.isTabbarShow=true
//   },
//   tabbarHide(){
//     this.isTabbarShow=false
//   }
// },{
//   tabbarShow:action,
//   tabbarHide:action //标记两个方法专门修改
// })

export default new Store()