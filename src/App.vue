<template>
  <div id="app">
    <div class="poster">
      <div class="poster__container container-fluid">
        <b-card header="Receipt Info" class="poster__header">
          <b-card-text>
            <b-form class="poster__info" inline> 
              <b-form-group>
                 <b-form-text>Receipt NO:</b-form-text>
                <b-form-input type="text" placeholder="Receipt NO" v-model="info.id"/>
              </b-form-group>
              <b-form-group>
                 <b-form-text>Waiter:</b-form-text>
                <b-form-input type="text" placeholder="Waiter" v-model="info.waiter"/>
              </b-form-group>
              <b-form-group>
                 <b-form-text>Opened at:</b-form-text>
                <b-form-input type="text" placeholder="Opened at" v-model="info.openedAt"/>
              </b-form-group>
              <b-form-group>
                 <b-form-text>Printed at:</b-form-text>
                <b-form-input type="text" placeholder="Printed at" v-model="info.printedAt"/>
              </b-form-group>
              <b-form-group>
                 <b-form-text>Table #:</b-form-text>
                <b-form-input type="text" placeholder="Table #" v-model="info.table"/>
              </b-form-group>
              <b-form-group>
                 <b-form-text>Guests:</b-form-text>
                <b-form-input type="text" placeholder="Guests" v-model="info.guests"/>
              </b-form-group>
              <b-form-group>
                 <b-form-text>Service charge:</b-form-text>
                <b-form-input type="number" placeholder="Service charge" v-model="info.serviceCharge"/>&nbsp;
                <b-button variant="outline-primary" @click="info.serviceCharge = 10">+10%</b-button>&nbsp;
                <b-button variant="outline-danger" @click="info.serviceCharge = 0">0%</b-button>&nbsp;
              </b-form-group>
            </b-form>
          </b-card-text>
        </b-card>

        <div class="row">
          <div class="poster__container-form col-6">
              <b-card header="Products">
                <b-card-text>
                  <div :key="index" v-for="(product, index) in products">
                     <b-row class="my-1">
                      <b-col sm="5">
                        <b-input type="text" placeholder="Name" v-model="product.name"/>
                      </b-col>
                      <b-col sm="2">
                        <b-input type="number" placeholder="QTY" v-model="product.qty"/>
                      </b-col>
                      <b-col sm="3">
                        <b-input type="text" placeholder="Price" v-model="product.price"/>
                      </b-col>
                      <b-col sm="2">
                        <b-button variant="danger" @click="removeProduct(index)" :disabled="index === 0">x</b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-card-text>

                <b-button variant="primary" @click="addProduct">Add position</b-button>&nbsp;&nbsp;
                <b-button variant="success" @click="print">Print</b-button>
              </b-card>
          </div>
          <div class="poster__container-receipt col-6">
            <Receipt ref="receipt" :info.sync="info" :products.sync="products" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Printd from 'printd'
import moment from 'moment'
import Receipt from './components/Receipt.vue'

export default {
  name: 'app',
  components: {
    Receipt
  },
  data: () => ({
    info: {
      id: '',
      waiter: 'Alexandra',
      openedAt: '',
      printedAt: '',
      table: '0 (Феймос)',
      guests: '1',
      serviceCharge: 0,
    },
    products: [],
  }),
  methods: {
    addProduct() {
      this.products.push({
        name: '',
        qty: 1,
        price: '0.00',
      })
    },
    removeProduct(index) {
      this.products = this.products.splice(index, 1)
    },
    print() {
      const height = this.$refs.receipt.$el.offsetHeight
      const p = new Printd()
      p.print(this.$refs.receipt.$el, [`@page { size: 80mm ${height}px; }
.receipt {
  background-color: #fff;
  width: 88mm;
  height: ${height}px;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

.receipt__header {
  text-align: center;
}

.receipt__header img {
  margin: 15px 0;
}

.receipt__header h1 {
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 0;
}

.receipt__info {
  padding: 10px;
  font-size: 14px;
  border-bottom: 2px dashed #000;
  margin-bottom: 10px;
}
.receipt__info b {
  margin-right: 15px;
}
.receipt__info tr {
  border-spacing: 0px;
}

.receipt__products {
  padding: 5px 20px;
  font-size: 14px;
  border-bottom: 2px solid #f3f3f3;
  margin-bottom: 5px;
}

.receipt__products table {
  width: 100%;
}

.receipt__products thead {
  border-bottom: 2px solid #f3f3f3;
}

.receipt__products th, .receipt__products td {
  padding: 0 10px;
  text-align: right;
}

.receipt__products th:first-child, .receipt__products td:first-child {
  text-align: left;
}

.receipt__total {
  display: flex;
  padding: 10px 5px;
  justify-content: space-around;
  align-items: center;
}

.receipt__total-col {
  padding: 0 10px;
}

.receipt__total-col_line {
  flex: 1 0;
}

.receipt__total-line {
  border-bottom: 2px dashed #000;
}

.receipt__total-sum {
  font-size: 18px;
  font-weight: 600;
  text-align: right;
}`])
    },
  },
  mounted() {
    const time = moment().format('MMMM DD YYYY HH:mm')

    this.info.openedAt = time
    this.info.printedAt = time

    this.addProduct()
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin-top: 60px;
}

.poster__header {
  margin-bottom: 50px;
}

.poster__info fieldset {
  margin: 10px;
  text-align: left !important;
}

.poster__container-receipt {
  background-color: #f7f7f7;
  padding: 15px;
  display: flex;
  justify-content: center;
}

@media print {
    a:after { content:''; }
    a[href]:after { content: none !important; }
    #print {
        display: none;
    }
}
@page {
    size: auto;   /* auto is the initial value */
    margin: 0;  /* this affects the margin in the printer settings */
}
</style>
