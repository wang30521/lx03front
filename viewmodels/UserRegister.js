var app = new Vue({
    el: '#app',
    data: {
        username:'',
        password:'',
        repeatPassword:''
    },
    methods:{
        handleRegister(){
            console.log('register click');
            if(this.password !== this.repeatPassword){
                alert('两次密码不一样');
                return;
            }
            this.registerUser();
        },
        registerUser(){
            axios.post('http://localhost:8080/user/register', {
                username: this.username,
                password: this.password
              }).then(function (response) {
                console.log(response);
                alert('注册成功');
              }).catch(function (error) {
                console.log(error);
                alert('注册失败');
              });
        }

    }
})