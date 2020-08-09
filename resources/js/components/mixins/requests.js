export default {
    methods: {

        updateResourceId(value) {
            const fields = this.$parent.resource.fields;
            let formData = new FormData();
            Object.keys(fields).forEach((key)=> {
                if (fields[key].attribute !== this.field.attribute){
                    if (fields[key].belongsToId === undefined) {
                        formData.append(fields[key].attribute, fields[key].value);
                    }
                    else {
                        formData.append(fields[key].attribute, fields[key].belongsToId);
                    }
                } else {
                    formData.append(fields[key].attribute, value);
                }
            });

            formData.append('_method', 'PUT');

            return Nova.request().post(`/nova-api/${this.resourceName}/${this.resourceId}`, formData)
                .then(() => {
                    const option = this.getOptionLabel(this.field.options, value);
                    this.$toasted.show(`${this.field.name} updated to "${option}"`, { type: 'success' });
                }, (response) => {
                    this.$toasted.show(response, { type: 'error' });
                    console.log(response);
                })
        },
        
        getOptionLabel(options, value) {
            const idx = Object.keys(options).find((key) => {
                return options[key].value == value;
            });
            return options[idx].label
        },

    }
}