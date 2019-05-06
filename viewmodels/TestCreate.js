var app = new Vue({
    el: '#app',
    data: {
        testName:'',
        precipitation:'',
        testTime:'',
        tester:'',
        areas:[],
        selectedAreas:[],
        areaProps: {
            value: 'areaId',
            label: 'name',
            children: 'subAreas'
        }
    },
    mounted() {
        console.log('view mounted');
        this.getAreaTree();

    },
    methods: {
        getAreaTree() {
            axios.get('http://localhost:8080/area/getTree', {
                params: {
                    areaId:0
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.areas = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        handleCreate() {
            console.log('create click');
            this.createRain();
        },
        createRain() {
            axios.post('http://localhost:8080/test/create', {
                areaId:this.selectedAreas[this.selectedAreas.length -1],
                testName: this.testName,
                precipitation: this.precipitation,
                testTime: this.testTime,
                tester: this.tester
            })
                .then(function (response) {
                    console.log(response);
                    alert('创建成功');
                    location.href='TestIndex.html';
                })
                .catch(function (error) {
                    console.log(error);
                    alert('创建失败');
                });
        }
    }


   /* mounted(){
        console.log('view mounted');
        this.getAreas();
    },*/
    /*computed:{
        selectAreaId(){
            return this.selectedAreas[this.selectedAreas.length-1];
        }
    },*/
  /*  methods:{
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
                testName: this.testName,
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
}*/
})