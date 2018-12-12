<template>
  <div class='startcontainer'>
                        <a class="open-modal" id="show-modal" @click="showModal = true">Open modal</a>
      <div v-if="showModal" @close="showModal = false">
                     <transition name="modal">
                        <div class="modal-mask">
                           <div class="modal-wrapper">
                              <div class="box col-sm-3 modal-container">
                                 <a class="close-modal" id="show-modal" @click.prevent="showModal = false"><i class="close-icon fa fa-times "></i></a>
                                 <h2 class="subtitle">abc</h2>
                                 <div class="panel-body">
                                    <button class="custom-btn">a</button>
                                    <button class="custom-btn reversed-btn" @click.prevent="showModal = false">c</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </transition>
                  </div>
    <h1>
      Enjoy music with your friends
    </h1>
    <h2>
      Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.
    </h2>
    <Login color='orange' v-if="!$root.token"/>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Content from '@/components/Content'

export default {
  name: 'Start',
  components:{
    Login,
    Content
  },
  data(){
    return{
			showModal: false
    }
  },
  methods:{
    showLateModal(){
        setTimeout(this.showModal = true, 5000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.startcontainer{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
h1{
  font-size: 3rem;
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 25px;
}
h2{
  font-size: 0.75rem;
  line-height: 1.55;
  margin-top: 0;
  margin-bottom: 12px;
}
</style>
