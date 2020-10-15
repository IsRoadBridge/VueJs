const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                name: '算法导论',
                date: '2003-9',
                price: 85,
                number: 1,
                isShow: true
            },
            {
                name: 'UNIX编程艺术',
                date: '2005-5',
                price: 96,
                number: 1,
                isShow: true
            },
            {
                name: '编程珠玑',
                date: '2010-9',
                price: 200,
                number: 1,
                isShow: true
            },
            {
                name: '代码大全',
                date: '2012-4',
                price: 54,
                number: 1,
                isShow: true
            }
        ]
    },
    computed:{
        totalMoney(){
            // let money = 0;
            // for(book of this.books){
            //         money += book.number * book.price;
            // }
            // return money
            return this.books.reduce(function (preValue,book) {
                 return preValue+book.price * book.number
            },0)
        }
    },
    methods: {
        increment(index){
            this.books[index].number++
        },
        decrement(index){
                this.books[index].number--

        },
        remove(index){
            //return this.books[index].isShow= !this.books[index].isShow;
            this.books.splice(index,1);
        }
    },
    //vue中的过滤器，toFixed方法可以用来保留小数
    filters: {
        showPrice(price){
            return '¥'+ price.toFixed(2);
        }
    }
})