<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>DATA KERETA API</h4>
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
                <tr v-for="(keretaapi, index) in keretaapis" :key="index">
                  <td>{{ keretaapi.nama }}</td>
                  <td>{{ keretaapi.asal }}</td>
                  <td>{{ keretaapi.tujuan }}</td>
                  <td>{{ keretaapi.keberangkatan }}</td>
                  <td class="text-center">
                    <router-link
                      :to="{
                        name: 'post.editkeretaapi',
                        params: { id: keretaapi.id },
                      }"
                      class="btn btn-sm btn-primary mr-1"
                      >EDIT</router-link
                    >
                    <button
                      @click.prevent="postDelete(keretaapi.id)"
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
    let keretaapis = ref([]);
    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get("http://localhost:8000/api/keretaapi")
        .then((response) => {
          //assign state posts with response data
          keretaapis.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    //method delete
    function postDelete(id) {
      //delete data post by ID
      axios
        .delete(`http://localhost:8000/api/keretaapi/${id}`)
        .then(() => {
          //splice posts
          keretaapis.value.splice(keretaapis.value.indexOf(id), 1);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    //return
    return {
      keretaapis,
      postDelete,
    };
  },
};
</script>