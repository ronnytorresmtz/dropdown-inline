<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <select-control
                :id="field.attribute"
                :dusk="field.attribute"
                v-model="value"
                class="w-full form-control form-select"
                :class="errorClasses"
                :options="field.options"
                :disabled="isReadonly"
                @change="handleChange(value)"
            >
                <option value="" selected>{{ __('Choose an option') }}</option>
            </select-control>
        </template>
    </default-field>
</template>

<script>
import General from './mixins/general';
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    
    mixins: [FormField, HandlesValidationErrors, General],

    props: ['resourceName', 'resourceId', 'field'],

    created() {
        /*
        * Set options with values insted of labels if display using labels
        */
        // if (this.field.displayUsingLabels) {
        //     this.setDisplayLabelsAsValues(this.field.options);
        // }
    },
    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },
        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },
        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },
    },
}
</script>
