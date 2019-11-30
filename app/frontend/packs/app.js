import Vue from 'vue/dist/vue.esm.js'
import ax from 'helpers/ax'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: "#app", 

    data: {
      id: 0,
      expense_type: '-',
      title: '', 
      amount: '', 
      description: '', 
      items: [
        {id: 1, expense_type: '-', title: '買 iphone', amount: 20000, description: 'Hello'}, 
        {id: 2, expense_type: '-', title: '買書', amount: 1000, description: 'World'}, 
      ]
    }, 
    computed: {
      total() {
        return this.items.reduce(function(sum, item){
          if (item.expense_type === '+') {
            return sum + item.amount
          } else {
            return sum - item.amount
          }
        }, 0)
      }
    },
    methods: {
      clear() {
        this.expense_type = '-'
        this.title = ''
        this.amount = ''
        this.description = ''
      }, 

      addItem() {
        // event.preventDefault()
        let newItem = {
          expense_type: this.expense_type, 
          title: this.title, 
          amount: this.amount, 
          description: this.description
        }

        this.items.unshift(newItem)
        // 打 api 
        ax.post('/api/money', newItem)
            .then(response => {
               console.log(response.data)
               this.clear()
            })
      }
    }
  })
})
