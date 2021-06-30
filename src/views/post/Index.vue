<template>
  <!--ini navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
    <div class="container">
      <a class="navbar-brand font-weight-bold text-white">Tiket</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link
              :to="{ name: 'post.index' }"
              class="btn btn-md btn-success"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'post.profil' }"
              class="btn btn-md btn-success"
              >Profil</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'post.index' }"
              class="btn btn-md btn-success"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- ini akhir navbar-->

  <!--ini opening-->
  <div class="jumbotron">
    <h1 class="display-4">SELAMAT DATANG</h1>
    <p class="lead">Ingin pergi kemana anda?</p>
    <hr class="my-4" />
    <p>Silahlan pilih layanan kendaraan yang kami sediakan</p>
  </div>
  <!--ini akhir dari opening-->

  <!--ini pilihan layanan-->
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Pesawat</h5>
          <p class="card-text">Klik untuk memesan tiket!</p>
          <router-link
            :to="{ name: 'post.pesawat' }"
            class="btn btn-md btn-success"
            >Pesan</router-link
          >
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Mobil</h5>
          <p class="card-text">Klik untuk memesan tiket!</p>
          <router-link
            :to="{ name: 'post.mobil' }"
            class="btn btn-md btn-success"
            >Pesan</router-link
          >
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Kereta Api</h5>
          <p class="card-text">Klik untuk memesan tiket!</p>
          <router-link
            :to="{ name: 'post.keretaapi' }"
            class="btn btn-md btn-success"
            >Pesan</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!--ini akhir dari layanan-->

  <!--ini footer-->
  <footer class="bg-success text-center text-white">
    <!-- Section: Social media -->
    <section
      class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      "
    ></section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <p>
              Ini adalah contoh website pemesanan tiket sederhana, menggunakan
              framework vue js
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> Belilas, Indragiri Hulu</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              benibasuki12@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> 085397115771</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://benibasuki12@gmail.com/"
        >Beni Basuki</a
      >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>



<style>
.jumbotron {
  text-align: center;
  margin-top: 70px;
  padding-top: 10px;
  height: 80px;
}
.row {
  margin-top: 300px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.row {
  margin-top: 220px;
}
footer {
  margin-top: 180px;
}
</style>