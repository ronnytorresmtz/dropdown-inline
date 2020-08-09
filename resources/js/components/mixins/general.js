export default {
    methods: {

        /*
        * Set options with values insted of labels if display using labels 
        */
        setDisplayLabelAsValue(options) {
            Object.keys(options).forEach((key) => {
                this.field.options[key].value = options[key].label;
            });
        },

        /*
        * Set value insted of label if display using labels 
        */

       setDisplayLabel(options, value) {
            const idx = Object.keys(options).find((key) => {
                return options[key].value == value 
            });
            return options[idx].label;
        },

    }
}