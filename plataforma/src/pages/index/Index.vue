<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4 px-0">
          <header id="h-560" v-show="loading">
          <div class="row mx-0 d-flex align-items-center">
            <div class="col-12 c-branco text-center">
                <img src="../../assets/imgs/logo.svg" alt="" class="img-fluid mb-3">
            </div>
          </div>
        </header>
        <header id="h-560" v-show="!loading">
          <div class="row mx-0 d-flex align-items-center">
            <div class="col-12 c-branco">
                <img src="../../assets/imgs/icon_logo.svg" alt="" class="img-fluid mb-3">
                <h1>
                Agora ficou <br>mais fácil e <br> transparente!
              </h1>
              <p>
                  Seja para apoiar ou organizar <br> a saúde financeira das ongs.
              </p>
                 <router-link to="/login">
               <button type="button" class="btn btn-primary bgc-verde bdc-verde px-0 bold">Cadastrar  -></button>
                 </router-link>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {
  },
   data() {
            return {
                loading: true
            }
        },
         methods: {
         },
         created: function() {
             setTimeout(() => this.loading = false, 2000);
         }
}
</script>
