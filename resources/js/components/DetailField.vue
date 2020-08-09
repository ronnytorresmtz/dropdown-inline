<template>
    <panel-item :field="field" />
</template>

<script>
import Requests from './mixins/requests';
export default {

    mixins: [Requests],
    
    props: ['resource', 'resourceName', 'resourceId', 'field'],

    created() {
        if (this.field.displayUsingLabels) {
            this.field.value = this.getOptionLabel(this.field.options, this.field.value);
        }
    },

    
}

</script>
