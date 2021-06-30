<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>DATA MOBIL</h4>
            <hr />

            <table class="table table-striped table-bordered mt-4">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">NAMA</th>
                  <th scope="col">ASAL</th>
                  <th scope="col">TUJUAN</th>
                  <th scope="col">KEBERANGKATAN</th>
                  <th scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(mobil, index) in mobils" :key="index">
                  <td>{{ mobil.nama }}</td>
                  <td>{{ mobil.asal }}</td>
                  <td>{{ mobil.tujuan }}</td>
                  <td>{{ mobil.keberangkatan }}</td>
                  <td class="text-center">
                    <router-link
                      :to="{
                        name: 'post.editmobil',
                        params: { id: mobil.id },
                      }"
                      class="btn btn-sm btn-primary mr-1"
                      >EDIT</router-link
                    >
                    <button
                      @click.prevent="postDelete(mobil.id)"
                      class="btn btn-sm btn-danger ml-1"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    //reactive state
    let mobils = ref([]);
    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get("http://localhost:8000/api/mobil")
        .then((response) => {
          //assign state posts with response data
          mobils.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    //method delete
    function postDelete(id) {
      //delete data post by ID
      axios
        .delete(`http://localhost:8000/api/mobil/${id}`)
        .then(() => {
          //splice posts
          mobils.value.splice(mobils.value.indexOf(id), 1);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    //return
    return {
      mobils,
      postDelete,
    };
  },
};
</script>