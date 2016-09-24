/**
 * Created by Administrator on 2016/9/23.
 */
angular.module('ng.service',[])
    .factory("userFactory",function($http,$q) {
        var userFactory = {};
        var baseUrl = "http://shangpin.duapp.com";
        userFactory.getList = function() {
            //ajax
            var q = $q.defer();
            $http.get(baseUrl+'/users/list').then(function(e) {
                q.resolve(e.data);
            },function(err){
                q.reject(err);
            })
            return q.promise;
        }
        return userFactory;
    }).service("roleService",function() {

})