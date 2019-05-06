var app = new Vue({
    el: '#app',
    data: {
        username:'',
        password:''
    },
    methods:{
        handleLogin(){
            console.log('login click');
            this.loginUser();
        },
        loginUser(){
            axios.get('http://localhost:8080/user/login', {
                params: {
                  username:this.username,
                  password:this.password
                },
                headers: {'Accept': 'text/html'}
               // withCredentials: false,
              }).then(function (response) {
                console.log(response);
                alert('登录成功');
              }).catch(function (error) {
                console.log(error);
                alert('登录失败');
              });  
        }

    }
})