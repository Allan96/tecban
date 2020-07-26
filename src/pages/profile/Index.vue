<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4 px-0">
        <header id="jongo">
          <div class="row mx-0 align-content-between">
              <div class="col-12">
                  <router-link to="/dashboard">
             <img src="../../assets/imgs/icon_logo.svg" alt="" class="img-fluid mt-3">
              </router-link>
              </div>
            <div class="col-12 d-flex flex-column mb-2">
                <caption>
                    Rio de Janeiro / RJ
                </caption>
             <h2 class="c-branco">
                 Casa do Jongo
             </h2>
            </div>
          </div>
        </header>
        <div class="col-12 d-flex p-0">
          <div class="w-50">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <img src="../../assets/imgs/extrato-on.svg" alt="" class="img-fluid on">
          <img src="../../assets/imgs/extrato.svg" alt="" class="img-fluid off">
          Extrato
        </button>
          </div>
          <div class="w-50">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <img src="../../assets/imgs/apoiadores-on.svg" alt="" class="img-fluid on">
              <img src="../../assets/imgs/apoiadores.svg" alt="" class="img-fluid off">
          Apoiadores
        </button>
          </div>
          </div>
          <div class="col-12 px-0">
           <div class="accordion" id="accordionExample">
  <div class="card">
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body row mx-0">
        <div class="col-12">
              <center>
          <img src="../../assets/imgs/loading.gif" alt="" class="loading" v-show="loading">
          </center>
          <ul class="p-0" v-for="(transaction, index) in transactions" v-bind:key="index" v-show="!loading">
            <li class="d-flex" v-if="index%3 != 0">
              <img src="../../assets/imgs/entrada.svg" alt="" class="img-fluid mr-2" width="16">
              <div>
                <legend>{{ transaction.TransactionInformation }}</legend>
                <span class="value c-red">
                  - R$ {{ transaction.Amount.Amount }}
                </span>
                <span class="data">
                  19/07/2020
                </span>
              </div>
            </li>
             <li class="d-flex" v-else>
              <img src="../../assets/imgs/entrada.svg" alt="" class="img-fluid mr-2" width="16">
              <div>
                <legend>Apoiadores</legend>
                <span class="value c-verdec">
                  R$ {{ transaction.Amount.Amount }}
                </span>
                <span class="data">
                  19/07/2020
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <ul class="p-0">
            <li class="d-flex align-items-center">
              <img src="../../assets/imgs/user_1.png" alt="" class="img-fluid mr-2">
              <div>
                <legend>Doação recorrente</legend>
                <span class="value">Ester Bezerra</span>
                <span class="data">25/07/2020</span>
              </div>
            </li>
              <li class="d-flex align-items-center">
              <img src="../../assets/imgs/user_2.png" alt="" class="img-fluid mr-2">
              <div>
                <legend>Doação recorrente</legend>
                <span class="value">Wallace Nery</span>
                <span class="data">25/07/2020</span>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <img src="../../assets/imgs/user_3.png" alt="" class="img-fluid mr-2">
              <div>
                <legend>Doação recorrente</legend>
                <span class="value">Allan Souza</span>
                <span class="data">25/07/2020</span>
              </div>
            </li>
             <li class="d-flex align-items-center">
              <img src="../../assets/imgs/user_4.png" alt="" class="img-fluid mr-2">
              <div>
                <legend>Doação recorrente</legend>
                <span class="value">Abraão Sena</span>
                <span class="data">25/07/2020</span>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
              <button type="button" class="btn btn-primary bgc-verde bdc-verde mt-5 bold apoiar container col-12 col-md-3">Apoiar</button>
  </div>
</template>

<script>
export default {
    components: {
  },
   data() {
            return {
              transactions: [],
              loading: true
            }
        },
         methods: {
              
         },
         created: function() {
        this.$http.get('http://tecban.allansouza.com/transactions')
        .then(function(res) {
            if (res) {
                this.transactions = res.body.Data.Transaction.slice(0, 10);
                console.log(this.transactions)
                this.loading =  false
            }
        })
        .catch((error) => console.log(error))
         }
         
}
</script>
