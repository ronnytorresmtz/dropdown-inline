export default {
    methods: {

        updateResourceId(field, value) {
            let formData = new FormData();
            formData.append(this.field.attribute, this.value || null)
            formData.append('_method', 'PUT');

            return Nova.request().post(`/nova-api/${this.resourceName}/${this.resourceId}`, formData)
                .then(() => {
                    const option = this.getOptionLabel(this.field.options, value);
                    this.$toasted.show(`${this.field.name} updated to "${option}"`, { type: 'success' });
                }, (response) => {
                    this.$toasted.show(response, { type: 'error' });
                    console.log(response.response);
                })
        },
        
        getOptionLabel(options, value) {
            if (value == 0) {
                return '—';
            }
            const idx = Object.keys(options).find((key) => {
                return options[key].value == value;
            });
            return options[idx].label
        },

    }
}