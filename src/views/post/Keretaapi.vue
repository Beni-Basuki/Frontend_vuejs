<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>INPUT DATA</h4>
            <hr />

            <form @submit.prevent="store">
              <div class="form-group">
                <label for="title" class="font-weight-bold">NAMA</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="keretaapi.nama"
                  placeholder="Masukkan Nama anda"
                />
                <!-- validation -->
                <div v-if="validation.nama" class="mt-2 alert alert-danger">
                  {{ validation.nama[0] }}
                </div>
              </div>

              <div class="form-group">
                <label for="title" class="font-weight-bold">ASAL</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="keretaapi.asal"
                  placeholder="Masukkan asal anda"
                />
                <!-- validation -->
                <div v-if="validation.asal" class="mt-2 alert alert-danger">
                  {{ validation.asal[0] }}
                </div>
              </div>

              <div class="form-group">
                <label for="title" class="font-weight-bold">TUJUAN</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="keretaapi.tujuan"
                  placeholder="Masukkan tujuan anda"
                />
                <!-- validation -->
                <div v-if="validation.tujuan" class="mt-2 alert alert-danger">
                  {{ validation.tujuan[0] }}
                </div>
              </div>

              <div class="form-group">
                <label for="title" class="font-weight-bold"
                  >KEBERANGKATAN</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="keretaapi.keberangkatan"
                  placeholder="Masukkan Jadwal keberangkatan anda"
                />
                <!-- validation -->
                <div
                  v-if="validation.keberangkatan"
                  class="mt-2 alert alert-danger"
                >
                  {{ validation.keberangkatan[0] }}
                </div>
              </div>

              <button type="submit" class="btn btn-primary">SIMPAN</button>
              <hr />
              <router-link
                :to="{ name: 'post.datakeretaapi' }"
                class="btn btn-md btn-success"
                >Lihat Data</router-link
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    //state posts
    const keretaapi = reactive({
      nama: "",
      asal: "",
      tujuan: "",
      keberangkatan: "",
    });

    //state validation
    const validation = ref([]);

    //vue router
    const router = useRouter();

    //method store
    function store() {
      let nama = keretaapi.nama;
      let asal = keretaapi.asal;
      let tujuan = keretaapi.tujuan;
      let keberangkatan = keretaapi.keberangkatan;

      axios
        .post("http://localhost:8000/api/keretaapi", {
          nama: nama,
          asal: asal,
          tujuan: tujuan,
          keberangkatan: keberangkatan,
        })
        .then(() => {
          //redirect ke post index
          router.push({
            name: "post.datakeretaapi",
          });
        })
        .catch((error) => {
          //assign state validation with error
          validation.value = error.response.data;
        });
    }

    //return
    return {
      keretaapi,
      validation,
      router,
      store,
    };
  },
};
</script>

<style>
body {
  background: lightgray;
}
</style>