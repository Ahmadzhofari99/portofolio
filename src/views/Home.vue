<template>
  <div>
    <Navbar/>
    <div class="home">
      <div class="modalku" id="modalku" v-if="dataOne">
        <div class="card h-100">
          <div class="p-5 h-100">
            <div class="position-relative">
              <div class="close" @click="closed">
                <i class="fa fa-times"></i>
              </div>
              <div class="row m-0 h-100">
                <div class="col-lg-6 h-100">
                  <div class="img-modal h-100">
                    <div class="main-carousel w-100" id="img-card">
                      <img v-for="(item, index) in dataOne.img" :key="index" class="carousel-cell" :src="item" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="max-height-modal">
                    <div>
                      <p class="mb-2">
                        {{dataOne.bahasa}}
                      </p>
                      <h1>
                        {{dataOne.judul}}
                      </h1>
                    </div>
                    <div class="isi-modal-content">
                      <p v-html="dataOne.desc"></p>
                    </div>
                    <div class="d-flex">
                      <a :href="dataOne.url" target="_blank" class="btn btn-dark">Kunjungi Website</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="myProfile" id="home">
        <div class="container">
          <div class="row m-0">
            <div class="col-xl-5 col-lg-12">
              <div class="row">
                <div class="col-12">
                  <div class="card mb-3">
                    <div class="p-5">
                      <div class="mb-3 user">
                        <div class="user-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                      </div>
                      <div class="title mb-2">
                        <h2>Hallo, Saya <br> <span>Bagus Nur Solayman</span></h2>
                      </div>
                      <div class="text-desc mb-4">
                        <p>Seorang junior web developer yang memiliki pengalaman dalam pengembangan web menggunakan teknologi terbaru seperti VueJs, VueX, NodeJs dan ExpressJs. Merupakan pribadi yang easy going, mampu bekerja sama dalam tim maupun individu. Website yang pernah dibuat seperti website Company Profile, Meeting, Incentive, Convention, and Exhibition (MICE) menggunakan VueJs, Vuex dan Laravel</p>
                      </div>
                      <div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                          Front End Web Developer & Back End Developer
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          solaybagus2@gmail.com
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                          +62 851 5617 9875
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          <a href="https://github.com/bagakibadi" style="text-decoration: none" target="_blank">
                            github.com/bagakibadi
                          </a>
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          <a href="https://linkedin.com/in/bagusnursolayman" style="text-decoration: none" target="_blank">
                            linkedin.com/in/bagusnursolayman
                          </a>
                        </div>

                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          DKI Jakarta, Yogyakarta
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="p-4">
                      <div class="mb-4">
                        <h6>Download Curriculum Vitae saya :</h6>
                      </div>
                      <div class="row">
                        <div class="col-sm-6 col-12 mb-3">
                          <a href="/CV-Bagus Nur Solayman.pdf" target="_blank" class="btn btn-dark w-100 ">
                            Download CV
                          </a>
                        </div>
                        <div class="col-sm-6 col-12 mb-3">
                          <a href="wa.me/6285156179875" target="_blank" class="btn btn-dark w-100">
                            Contact Saya
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-12">
              <div class="card">
                <div class="p-4">
                  <img class="myimage" src="../assets/images/photo.jpeg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="myProfile" id="portofolio">
        <div class="subhead mb-5">
          <p>BEBERAPA PORTOFOLIO SAYA</p>
          <h1>Portofolio Saya</h1>
        </div>
        <div class="px-2 px-sm-5">
          <div class="row main-carousel" id="main-carousel">
            <div class="card-porto carousel-cell" v-for="(items, index) in dataCard" :key="index">
              <div class="card" @click="openPortofolio(index)">
                <div class="p-3">
                  <div class="card-img">
                    <img :src="items.img[0]" alt="">
                  </div>
                  <div class="content-body">
                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-info-framework">{{items.bahasa}}</p>
                    </div>
                    <h4>
                      {{items.judul}}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-4 carousel-cell">
              <div class="card">
                <div class="p-3">
                  <div class="card-img">
                    <img src="../assets/images/Primavillage/landing.png" alt="">
                  </div>
                  <div class="content-body">
                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-info-framework">VUE.JS</p>
                    </div>
                    <h4>Primavillage</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 carousel-cell">
              <div class="card">
                <div class="p-3">
                  <div class="card-img">
                    <img src="../assets/images/jurnal-dinsos/landing.png" alt="">
                  </div>
                  <div class="content-body">
                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-info-framework">LARAVEL</p>
                    </div>
                    <h4>Jurnal Dinsos Jawa Timur</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 carousel-cell">
              <div class="card">
                <div class="p-3">
                  <div class="card-img">
                    <img src="../assets/images/pelindo/landing.png" alt="">
                  </div>
                  <div class="content-body">
                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-info-framework">VUE.JS</p>
                    </div>
                    <h4>Pelindo E-Report Dashboard</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 carousel-cell">
              <div class="card">
                <div class="p-3">
                  <div class="card-img">
                    <img src="../assets/images/bemkm/landing.png" alt="">
                  </div>
                  <div class="content-body">
                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-info-framework">VUE.JS</p>
                    </div>
                    <h4>BEM KM UPN Yogyakarta</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 carousel-cell">
              <div class="card">
                <div class="p-3">
                  <div class="card-img">
                    <img src="../assets/images/mice-rakornas/landing.png" alt="">
                  </div>
                  <div class="content-body">
                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-info-framework">VUE.JS</p>
                    </div>
                    <h4>Mice ID (Kemenparekraf) Rapat Koordinasi Nasional Pariwisata dan Ekonomi Kreatif/Baparekraf Tahun 2020</h4>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="myProfile" id="pendidikan">
        <div class="subhead mb-5">
          <p>PERJALANAN PENDIDIKAN SAYA</p>
          <h1>Riwayat Pendidikan</h1>
        </div>
        <div class="px-2 px-sm-5">
          <div class="row">
            <div class="col-lg-6">
              <div class="pendidikan-list">
                <div class="pendidikanku">
                  <div class="card">
                    <div class="p-5">
                      <div class="border-bottom">
                        <h4>Arkademy Tech Education Platform </h4>
                        <p style="color: #7c838e">Fullstack Developer (Februari 2020 - Juni 2020)</p>
                      </div>
                      <div class="pt-4">
                        <p class="mb-0" style="text-indent: 45px">
                          Bersekolah di Arkademy Tech Education selama 5 bulan sebagai Fullstack Website Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pendidikanku">
                  <div class="card">
                    <div class="p-5">
                      <div class="border-bottom">
                        <h4>SMK Negeri 6 Jakarta Selatan </h4>
                        <p style="color: #7c838e">Animasi (2016 - 2019)</p>
                      </div>
                      <div class="pt-4">
                        <p class="mb-0" style="text-indent: 45px">
                          Bersekolah di SMK Negeri 6 Jakarta Selama 3 tahun di bidang Animasi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="pendidikan-list">
                <div class="pendidikanku">
                  <div class="card">
                    <div class="p-5">
                      <div class="border-bottom">
                        <h4>SMP Negeri 12 Jakarta Selatan</h4>
                        <p style="color: #7c838e">SMP 3 Tahun (2013 - 2016)</p>
                      </div>
                      <div class="pt-4">
                        <p class="mb-0" style="text-indent: 45px">Bersekolah di SMP Negeri 12 Jakarta Selatan pada tahun 2013 sampai tahun 2016</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pendidikanku">
                  <div class="card">
                    <div class="p-5">
                      <div class="border-bottom">
                        <h4>SD Negeri 06 Mexico Jakarta Selatan</h4>
                        <p style="color: #7c838e">SD 6 Tahun (2007 - 2013)</p>
                      </div>
                      <div class="pt-4">
                        <p class="mb-0" style="text-indent: 45px">Bersekolah di SDN 6 Jakarta Selatan pada tahun 2007 sampai tahun 2013</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      dataCard: [
        {
          bahasa: 'VUE.JS',
          url: 'https://event.mice.id',
          img: [
            '/img/event.mice.id/landing.png',
            '/img/event.mice.id/event.png',
            '/img/event.mice.id/login.png'
          ],
          desc: "<p>Mice ID adalah sebuah applikasi website yang digunakan untuk membuat event yang berisikan marketplace bagi para UMKM, dan applikasi yang digunakan untuk meeting, conventional dan knowledge.</p><p>Fitur - fitur Applikasi :<br>- Event<br>- Marketplace<br>- Meeting<br>- Knowledge<br>- Berita<br>- dll masih dalam tahap pengembangan</p>",
          judul: 'Platform MICE Indonesia (Meeting, Incentive, Convention, Exhibition)'
        },
        {
          bahasa: 'VUE.JS',
          url: 'https://primavillage.id',
          img: [
            '/img/Primavillage/landing.png',
          ],
          desc: "<p>Mice ID adalah sebuah applikasi website yang digunakan untuk membuat event yang berisikan marketplace bagi para UMKM, dan applikasi yang digunakan untuk meeting, conventional dan knowledge.</p><p>Fitur - fitur Applikasi :<br>- Event<br>- Marketplace<br>- Meeting<br>- Knowledge<br>- Berita<br>- dll masih dalam tahap pengembangan</p>",
          judul: 'Primavillage.id'
        },
        {
          bahasa: 'LARAVEL',
          url: 'https://jurnal-dinsos.primakom.co.id',
          img: [
            '/img/jurnal-dinsos/landing.png',
          ],
          desc: "<p>Mice ID adalah sebuah applikasi website yang digunakan untuk membuat event yang berisikan marketplace bagi para UMKM, dan applikasi yang digunakan untuk meeting, conventional dan knowledge.</p><p>Fitur - fitur Applikasi :<br>- Event<br>- Marketplace<br>- Meeting<br>- Knowledge<br>- Berita<br>- dll masih dalam tahap pengembangan</p>",
          judul: 'Dinas Sosial Jawa Timur'
        },
        {
          bahasa: 'VUE.JS',
          url: 'https://pelindo.primakom.co.id',
          img: [
            '/img/pelindo/landing.png',
          ],
          desc: "<p>Mice ID adalah sebuah applikasi website yang digunakan untuk membuat event yang berisikan marketplace bagi para UMKM, dan applikasi yang digunakan untuk meeting, conventional dan knowledge.</p><p>Fitur - fitur Applikasi :<br>- Event<br>- Marketplace<br>- Meeting<br>- Knowledge<br>- Berita<br>- dll masih dalam tahap pengembangan</p>",
          judul: 'Pelindo E - Report'
        },
        {
          bahasa: 'VUE.JS',
          url: 'http://bemkm.smartmanagement.id/',
          img: [
            '/img/bemkm/landing.png',
          ],
          desc: "<p>Mice ID adalah sebuah applikasi website yang digunakan untuk membuat event yang berisikan marketplace bagi para UMKM, dan applikasi yang digunakan untuk meeting, conventional dan knowledge.</p><p>Fitur - fitur Applikasi :<br>- Event<br>- Marketplace<br>- Meeting<br>- Knowledge<br>- Berita<br>- dll masih dalam tahap pengembangan</p>",
          judul: 'BEM KM UPN Yogyakarta'
        },
      ],
      dataOne: null
    }
  },
  methods: {
    closed() {
      document.getElementById('modalku').classList.remove('d-block')
      this.dataOne = null
    },
    openPortofolio(id) {
      this.dataOne = null
      this.dataOne = this.dataCard[id]
      setTimeout(() => {
        document.getElementById('modalku').classList.toggle('d-block')
        var flkty = new Flickity( '#img-card', {
          // options
          pageDots: false,
          cellAlign: 'left',
          autoPlay: 5000,
          margin: 20
        });
      }, 500);
    }
  },
  mounted() {
    var flkty = new Flickity( '#main-carousel', {
      // options
      pageDots: false,
      cellAlign: 'left',
      autoPlay: 5000,
      margin: 20
    });
    
  }
};
</script>

<style>

</style>
