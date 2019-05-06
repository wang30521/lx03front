var app = new Vue({
    el: '#app',
    data: {
        pageInfo:'',
        pageNum: 1,
        testName:''
    },
    mounted(){
        console.log('view nounted');
        this.getTest();
    },
    methods:{
        handleEdit(){
            console.log('edit click');
        },
        handleDelete(){
            console.log('delete click');
        },
        hrefCreateClick(){
            console.log('create click');
            location.href="TestCreate.html";
        },
        handleCurrentChange(val){
            console.log(val);
            this.pageNum = val;
            this.getTests();
        },
        handleSearch(){
            console.log('searcj click');
            this.pageNum = 1;
            this.getTests();
        },
        getTests(){
            axios.get('http://localhost:8080/test/getWithPageAndName', {
                params: {
                    pageNum: this.pageNum,
                    testName: this.testName
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.pageInfo = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})