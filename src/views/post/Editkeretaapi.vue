<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>EDIT DATA KERETA API</h4>
            <hr />

            <form @submit.prevent="update">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
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

    //vue router
    const route = useRoute();

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get(`http://localhost:8000/api/keretaapi/${route.params.id}`)
        .then((response) => {
          //assign state posts with response data
          keretaapi.nama = response.data.data.nama;
          keretaapi.asal = response.data.data.asal;
          keretaapi.tujuan = response.data.data.tujuan;
          keretaapi.keberangkatan = response.data.data.keberangkatan;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    //method update
    function update() {
      let nama = keretaapi.nama;
      let asal = keretaapi.asal;
      let tujuan = keretaapi.tujuan;
      let keberangkatan = keretaapi.keberangkatan;

      axios
        .put(`http://localhost:8000/api/keretaapi/${route.params.id}`, {
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
      update,
    };
  },
};
</script>

<style>
body {
  background: lightgray;
}
</style>