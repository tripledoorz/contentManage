
/**
 * Created by Administrator on 2016/9/23.
 */
app.controller("homeCtrl",function($scope) {
    $scope.leftList = [
        {name:"用户管理",state:"home.user"},
        {name:"商品管理",state:"home.shop"},
        {name:"角色管理",state:"home.role"},
        {name:"权限管理",state:"home.power"},
        {name:"尺寸管理",state:"home.size"},
        {name:"类型管理",state:"home.page"},
        {name:"颜色管理",state:"home.color"}
    ];
}).controller("userCtrl",function($scope,userFactory) {
    //显示用户列表//获取用户信息
    userFactory.getList().then(function(e) {
        console.info(e);
        $scope.list = e.data;
    })
    $scope.update = function(e) {
        $scope.userInfoList = this.info;
        console.info(e);
    }

    $scope.update = function(e) {
        $scope.userInfoList = this.info;
        console.info(e);
    }

}).controller("roleCtrl",function($scope,roleService) {
});