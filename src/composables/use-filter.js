import {
    useStore
} from 'vuex'

import {
    ref,
    computed
} from "vue";


export default function () {

    //redux store access
    const store = useStore();

    //reactive data
    const filterMenu = ref(null);

    const filteredInvoice = ref(null);


    //computed props
    const invoiceData = computed(() => store.state.invoiceData);

    const filteredData = computed(() => {
        return invoiceData.value.filter((invoice) => {
            if (filteredInvoice.value === "Draft") {
                return invoice.invoiceDraft === true;
            }
            if (filteredInvoice.value === "Pending") {
                return invoice.invoicePending === true;
            }
            if (filteredInvoice.value === "Paid") {
                return invoice.invoicePaid === true;
            }
            return invoice;
        })
    });


    //methods
    const newInvoice = () => store.commit('TOGGLE_INVOICE');

    const toggleFilterMenu = () => {
        filterMenu.value = !filterMenu.value
    };

    const filteredInvoices = (e) => {
        if (e.target.innerText === "Clear Filter") {
            filteredInvoice.value = null;
            return;
        }
        filteredInvoice.value = e.target.innerText;
    };


    //Make it accessible 

    return {
        filterMenu,
        filteredInvoice,
        invoiceData,
        filteredData,
        newInvoice,
        toggleFilterMenu,
        filteredInvoices
    }
}