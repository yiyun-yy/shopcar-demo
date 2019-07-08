export default{
    state: {
        shopcar:[
           
        ],
        listData:[
            {
                img:'https://image.missfresh.cn/a600071943074b4587f11fa5be230439.jpg?iopcmd=thumbnail&type=4&width=200',
                title:'【新人】进口甜蕉600g*1袋',
                id:2,
                num:0,
                isCheck:true,
                price:"3.9"
            }, {
                img:'https://image.missfresh.cn/35580da54cfe4a79aaa37fb8374a0155.jpg?iopcmd=thumbnail&type=4&width=200',
                title:'【新人】国产红心火龙果1个  350g起',
                id:3,
                num:0,
                isCheck:false,
                price:"7.9"
            }, {
                img:'https://fms-image.missfresh.cn/80b3005bf34e488f8f0258cb0a9bfd80.jpg?iopcmd=thumbnail&type=4&width=200',
                title:'【新人】国产蓝莓125g*1盒',
                id:4,
                num:0,
                isCheck:true,
                price:"5.9"
            }, {
                img:'https://image.missfresh.cn/2f4d104cd0b94f20a8b26ef55ccebeaf.jpg?iopcmd=thumbnail&type=4&width=200',
                title:'【新人】维多利亚青提500g*1盒',
                id:5,
                num:0,
                isCheck:true,
                price:"3.9"
            }, {
                img:'https://image.missfresh.cn/a600071943074b4587f11fa5be230439.jpg?iopcmd=thumbnail&type=4&width=200',
                title:'【新人】进口甜蕉600g*1袋',
                id:6,
                num:0,
                isCheck:true,
                price:"3.9"
            }
        ],
        totalMoney:0,
    },
    mutations: {
        getCount(state,payload){
            state.count=payload
        },
        getShopcar(state,payload){
            let item=state.listData.find(item=>item.id===payload*1);
            let index = state.shopcar.findIndex(item=>item.id===payload*1);
            if(index!==-1){
                state.shopcar[index].num+=1;
                console.log(state.shopcar);
            }else{
                state.shopcar.push(item);
                console.log(state.shopcar);
            }
        },
        getAddNum(state,payload){
            let index = state.shopcar.findIndex(item=>item.id===payload*1);
            state.shopcar[index].num++;
        },
        getHandNum(state,payload){
            let index = state.shopcar.findIndex(item=>item.id===payload*1);
            state.shopcar[index].num--;
        },
        getremoveList(state,payload){
            let index = state.shopcar.findIndex(item=>item.id===payload*1);
            state.shopcar.splice(index,1); 
        },
        getClearAll(state,payload){
            state.shopcar=[];
        }
    },
    actions: {
  
    }
}