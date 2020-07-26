<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4 px-0">
        <header>
          <div class="row mx-0 d-flex align-content-around">
            <div class="col-12">
                 <router-link to="/">
                <img src="../../assets/imgs/icon_logo.svg" alt="" class="img-fluid">
                 </router-link>
            </div>
            <div class="col-12 d-flex flex-column">
              <p class="c-branco bold mb-0">
                Complete o cadastro abaixo <br> para criar sua conta</p>
              <caption class="c-branco">
                Selecione o tipo de conta que vocês desejar criar, <br> preenchas os demais campos e prossiga para os <br> próximos passos.
              </caption>
            </div>
          </div>
        </header>
        <section>
          <div class="row mx-0 mt-3">
            <div class="col-6">
              <div class="box-select">
                  <img src="../../assets/imgs/doacao.svg" alt="">
                  <legend>
                    Apoiar iniciativas
                  </legend>
              </div>
            </div>
            <div class="col-6">
                <div class="box-select bgc-verde">
                  <img src="../../assets/imgs/ong.svg" alt="">
                  <legend class="c-branco">
                    Arrecadar fundos
                  </legend>
                </div>
            </div>
            <div class="col-12 mt-3">
              <div class="input-group mb-3">
                  <div class="input-group-prepend"  :class="colorOne"><span class="input-group-text" id="basic-addon1"><img src="../../assets/imgs/ong.svg" alt="" width="14"></span></div>
                  <input type="text" class="form-control" placeholder="Nome da ONG" v-on:keyup="inputOne">
              </div>
              <div class="input-group mb-3">
                  <div class="input-group-prepend"  :class="colorTwo"><span class="input-group-text" id="basic-addon1"><img src="../../assets/imgs/mail.svg" alt="" width="14"></span></div>
                  <input type="text" class="form-control" placeholder="Email" v-on:keyup="inputTwo">
              </div>
              <div class="input-group mb-3">
                  <div class="input-group-prepend" :class="colorThree"><span class="input-group-text" id="basic-addon1"><img src="../../assets/imgs/senha.svg" alt="" width="14"></span></div>
                  <input type="password" class="form-control" placeholder="Senha" v-on:keyup="inputThree">
              </div>

              <button type="button" class="btn btn-primary bgc-verde bdc-verde w-100 bold" data-toggle="modal" data-target="#exampleModal">Próximo</button>
            </div>
          </div>
        </section>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body d-flex flex-column align-items-start">
          <img src="../../assets/imgs/icon_logo_verde.svg" alt="" class="img-fluid mb-3">
          <p class="bold c-verde mb-0">
            Dados bancários
          </p>
          <caption>
            Ao clicar em autênticar, você será <br> direcionado para a página de auteticação <br> do seu banco.
          </caption>

          <div class="input-group my-3">
                  <div class="input-group-prepend bgc-verde"><span class="input-group-text" id="basic-addon1"><img src="../../assets/imgs/ong.svg" alt="" width="14"></span></div>
                    <select class="form-control" name="" id="">
                      <option>Banco 1</option>
                      <option>Banco 2</option>
                    </select>
              </div>
               <div class="input-group mb-3">
                  <div class="input-group-prepend bgc-verde"><span class="input-group-text" id="basic-addon1"><img src="../../assets/imgs/ong.svg" alt="" width="14"></span></div>
                  <input type="text" class="form-control" value="0001">
              </div>
               <div class="input-group mb-3">
                  <div class="input-group-prepend bgc-verde"><span class="input-group-text" id="basic-addon1"><img src="../../assets/imgs/ong.svg" alt="" width="14"></span></div>
                  <input type="text" class="form-control" value="420420-2">
              </div>
                      <button type="button" class="btn btn-primary w-100 bgc-verde bdc-verde bold" data-dismiss="modal" aria-label="Close"  @click="login">Autenticar</button>
          
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
import {login} from '../../functions/account';
export default {
    components: {
  },
   data() {
            return {
                 colorOne: null,
      colorTwo: null,
      colorThree: null
            }
        },
         methods: {
              login,
              inputOne: function(){
                this.colorOne = 'bgc-verde';
              },
              inputTwo: function(){
                this.colorTwo = 'bgc-verde';
                
              },
              inputThree: function(){
                this.colorThree = 'bgc-verde'
              }
         }
}
</script>
