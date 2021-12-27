<template>
  <div class="fix-nav">
    <div id="navbar" class="navbar py-3 navbar-expand-lg m-0 px-2 px-sm-5 row align-items-center">
      <div class="col-lg-2 col-6">
        <div class="mylogo">
          <img src="../assets/images/photo.jpeg" alt="">
        </div>
      </div>
      <div class="col-lg-10 col-6">
        <div class="d-flex justify-content-end">
          <button @click="openmodal" class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse justify-content-sm-end justify-content-start" id="ee">
            <ul class="navbar-nav navbar-items">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">HOME</a>
              </li>
              <li class="nav-item" @click="tagmanager">
                <a class="nav-link" href="#portofolio">PORTOFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">EDUCATION</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="modal modal-left fade" id="myModal" tabindex="-1" aria-labelledby="myModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header border-0">
            <div>
              <div class="mylogo">
                <img src="../assets/images/photo.jpeg" alt="">
              </div>
            </div>

            <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close">
              <i class="fa fa-times " style="color: var(--color-primary)"></i>
            </button>
          </div>
          <div class="modal-body">
            <ul class="navbar-nav navbar-items">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portofolio">PORTOFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">EDUCATION</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    openmodal() {
      $('.modal-backdrop').addClass('d-none')
    },
    tagmanager() {
      console.log('abc');
      dataLayer.push({ _event: 'Any Custom Events', event: 'cstm_CompleteRegistration', event_name: 'complete_registration', varvalue: 'asede'})
    }
  },
  mounted() {
    window.onscroll = () => {
      // if(window.scrollY > 150) {
      //   document.getElementById('scrolltop').style.display = 'block'
      // }
      if (window.scrollY > 100) {
        document.getElementById('navbar').classList.add('navscroll')
      } else {
        document.getElementById('navbar').classList.remove('navscroll')
      }
    }
  }
};
</script>

<style>

</style>
