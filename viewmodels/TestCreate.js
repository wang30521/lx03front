var app = new Vue({
    el: '#app',
    data: {
        precipitation:'',
        testTime:'',
        tester:'',
        areas:[],
        selectedAreas:[]
    },
    mounted(){
        console.log('view mounted');
        this.getAreas();
    },
    computed:{
        selectAreaId(){
            return this.selectedAreas[this.selectedAreas.length-1];
        }
    },
    methods:{
        handleAreaChange(val) {
            console.log(val);
            this.selectedAreas = val;
        },
        handleCreate() {
            console.log('create click');
            this.createTest();
        },
        getAreas() {
            axios.get('http://localhost:8080/area/getTree', {
                params: {
                    areaId: 0
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.areas = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        createTest() {
            axios.post('http://localhost:8080/test/create', {
                precipitation: this.precipitation,
                testTime: this.testTime,
                tester: this.tester,
                areaId: this.selectedAreaId
            })
                .then(function (response) {
                    console.log(response);
                    alert('创建成功');
                    location.href="TestIndex.html";
                })
                .catch(function (error) {
                    console.log(error);
                    alert('创建失败');
                });
    }
}
})