export default {
    methods: {

        updateResourceId(fields, field, value) {

            let formData = new FormData();
            formData.append(field.attribute, value || null)
            formData.append('_method', 'PUT');

            return Nova.request().post(`/nova-api/${this.resourceName}/${this.resourceId}`, formData)
                .then(() => {
                    const option = this.getOptionLabel(field.options, value);
                    this.$toasted.show(`${field.name} updated to "${option}"`, { type: 'success' });
                }, (response) => {
                    this.$toasted.show(response, { type: 'error' });
                    console.log(response.response);
                })
        },
        
        getOptionLabel(options, value) {
            
            const idx = Object.keys(options).find((key) => {
                return options[key].value == value;
            });

            if (idx) {
                return options[idx].label
            } 
            
            return '—'; 
            
        },

    }
}
