import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchProducts = defineStore('fetchProducts', () =>{
    const state = reactive({
        objects: [],
    })

    function productsGet(){
        return new Promise((resolve, reject) =>{
            client.get('snackapiresource/snackapi/')
                .then((res) =>{
                    console.log("Ma'lumot yuklab olindi")
                    state.objects = res.data.objects
                    console.log(state.objects)
                    resolve()
                } )
                .catch(() =>{
                    console.log("Tarif yuklab  Olishda xatolik")
                    reject()
                })
        })
    }

    return {productsGet, state}
})