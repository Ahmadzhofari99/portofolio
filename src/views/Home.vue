<template>
  <div>
    <Navbar/>
    <div class="home">
      <div class="modalku" id="modalku" v-if="dataOne">
        <div class="card h-100">
          <div class="py-5 px-3 p-sm-5 h-100" style="overflow-y: auto">
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
                        <h2>Hi, I’m <br> <span>Ahmad Zhofari</span></h2>
                      </div>
                      <div class="text-desc mb-4">
                        <p>
                          I am a 4th-semester student of Educational Technology at Yogyakarta State University. I have a strong passion for Design and videography and am ambitious to pursue my goals as an Instructor and designer. However, I faced financial constraints in completing my education. Therefore, I hope to receive a scholarship from KarirLab to help pay for my tuition and achieve my academic goals. I am sure that I can make good use of this opportunity and make a positive contribution to society after completing my education
                        </p>
                      </div>
                      <div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                          Graphic Design and Videography
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          ahmadzhofari_az86@gmail.com
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                          +62 851 5605 4633
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          <a href="https://github.com/Ahmadzhofari99" style="text-decoration: none" target="_blank">
                            Ahmadzhofari99
                          </a>
                        </div>
                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          <a href="https://www.linkedin.com/in/ahmad-zhofari-08a86b217" style="text-decoration: none" target="_blank">
                            Ahmad Zhofari
                          </a>
                        </div>

                        <div class="d-flex info">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          Yogyakarta
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="p-4">
                      <div class="mb-4">
                        <h6>Download my Curriculum Vitae :</h6>
                      </div>
                      <div class="row">
                        <div class="col-sm-6 col-12 mb-3">
                          <a href="/CV_Ahmad_Zhofari.pdf" target="_blank" class="btn btn-dark w-100 ">
                            Download CV
                          </a>
                        </div>
                        <div class="col-sm-6 col-12 mb-3">
                          <a href="https://wa.me/6285156054633" target="_blank" class="btn btn-dark w-100">
                            My Contact
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
          <p>VISIT MY PORTOFOLIO</p>
          <h1>My Portofolio</h1>
        </div>
        <div class="px-2 px-sm-4">
          <div class="row " id="">
            <div class="col-lg-4 mb-5" v-for="(items, index) in dataCard" :key="index">
              <div class="card-porto ">
                <div class="card" style="border-radius: 20px" @click="openPortofolio(index)">
                  <div class="px-4 py-4">
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
      <div class="myProfile" id="education">
        <div class="subhead mb-5">
          <p>MY EDUCATION</p>
          <h1>Education</h1>
        </div>
        <div class="px-2 px-sm-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="pendidikan-list">
                <div class="pendidikanku">
                  <div class="card">
                    <div class="p-5">
                      <div class="border-bottom">
                        <h4>Yogyakarta State University </h4>
                        <p style="color: #7c838e">Educational Technology (2021-Now)</p>
                      </div>
                      <div class="pt-4">
                        <p class="mb-0" style="text-indent: 45px">
                          currently I have taken semester 4 with a GPA of 3.67
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pendidikanku">
                  <div class="card">
                    <div class="p-5">
                      <div class="border-bottom">
                        <h4>Stabat 1 STATE Senior High school </h4>
                        <p style="color: #7c838e">Natural Science (2018 - 2021)</p>
                      </div>
                      <div class="pt-4">
                        <p class="mb-0" style="text-indent: 45px">
                          Attended school for 3 years and has achievements as a school representative at art festivals at the provincial level for 2 consecutive years
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
                        <h4>MTSN 1 Langkat</h4>
                        <p style="color: #7c838e">attended school for 3 years (2015 - 2018)</p>
                      </div>
                      <div class="pt-4">
                        <p class="mb-0" style="text-indent: 45px"></p>
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
          bahasa: 'Ispring Suite',
          url: '',
          img: [
            '/img/narkoba/narkoba1.png',
            '/img/narkoba/narkoba2.png',
            '/img/narkoba/narkoba3.png',
            '/img/narkoba/narkoba4.png',
            '/img/narkoba/narkoba5.png',
            '/img/narkoba/narkoba6.png',
            '/img/narkoba/narkoba7.png',
          ],
          desc: "<p>The android application Get to Know Drugs is made to make distance learning fun and not monotonous. It is hoped that this application can help make learning more varied and interactive.</p>",
          judul: 'Mengenal Narkoba'
        },
        {
          bahasa: 'Ispring Suite',
          url: '',
          img: [
            '/img/ekosistem/ekosistem1.png',
            '/img/ekosistem/ekosistem2.png',
            '/img/ekosistem/ekosistem3.png',
            '/img/ekosistem/ekosistem4.png',
            '/img/ekosistem/ekosistem5.png',
            '/img/ekosistem/ekosistem6.png',
            '/img/ekosistem/ekosistem7.png',
          ],
          desc: "<p>This 'ecosystem' android application was created for grade 5 elementary school students, in order to create a fun and not monotonous implementation of distance learning. It is hoped that this application can help make learning more varied and interactive.</p>",
          judul: 'Aplication Ecosystem'
        }
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
    // var flkty = new Flickity( '#main-carousel', {
    //   // options
    //   pageDots: false,
    //   cellAlign: 'left',
    //   autoPlay: 5000,
    //   margin: 20
    // });
    
  }
};
</script>

<style>

</style>
