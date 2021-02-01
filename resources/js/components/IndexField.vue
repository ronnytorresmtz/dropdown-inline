<template>
    <div class="flex items-center mx-2" >
        <span v-if="field.inlineOnIndex && isEditable">
            <select-control
                :id="field.attribute"
                :dusk="field.attribute"
                v-model="value"
                class="form-control form-select"
                :class="errorClasses"
                :options="field.options"
                :disabled="isReadonly"
                @change.prevent="handleChange(value)"
                @keydown.esc.prevent="onKeyDownEscape()">

                <option value="0" selected @change.prevent="handleChange(value)" @keydown.esc.prevent="onKeyDownEscape()" >{{ __('Choose an option') }}</option>
            </select-control>
        </span>
        <span v-else :class="`whitespace-no-wrap ${(field.inlineOnIndex) ? 'cursor-pointer' : 'cursor-default'}`" @click="openDropdown">{{ (field.displayUsingLabels) ? getOptionLabel(field.options, value) : value }}</span>
    </div>
</template>

<script>
import General from './mixins/general';
import Requests from './mixins/requests';

export default {
    mixins: [General, Requests],
    props: ['resourceName', 'field'],
    data() {
        return {
            isEditable: false,
        }
    },
    created() {
        this.setInitialValue();
         document.addEventListener('keyup', (evt) => {
            if (evt.code === 'Escape') {
                this.closeEdit();
            }
        });
    },
   
    computed: {
            /*
            * Get resource id value from parent.
            */
            resourceId() {
                return this.$parent.resource.id.value;
            },
        },
    methods: {
         /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = (this.field.value == 'null') ? 0 : this.field.value;
        },
        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || null)
        },
        
        closeEdit() {
            this.isEditable = false;
        },

        openDropdown() {
            this.isEditable = true;
        },

        /**
        * Handle the select value when it change.
        */
        handleChange(value) {
            this.value = value
            this.isEditable = false;
            this.updateResourceId(this.$parent.resource.fields, this.field, value);
        },
        
    },
}
</script>