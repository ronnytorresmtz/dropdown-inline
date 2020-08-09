<?php

namespace Ronnytorresmtz\DropdownInline;

use Laravel\Nova\Fields\Field;

class DropdownInline extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'dropdown-inline';

        /**
     * @var bool
     */
    protected $inlineOnIndex = false;

    // protected $displayUsingLabels = true;

    /**
     * Allows field to be editable on index view.
     *
     * @param closure|null $callback
     * @return self
     */
    public function inlineOnIndex(callable $callback = null)
    {
        $inline = true;

        if (is_callable($callback)) {
            $inline = call_user_func($callback, resolve(NovaRequest::class));
        }

        $this->inlineOnIndex = $inline;

        return $this;
    }

    /**
     * Resolve the field's value.
     *
     * @param  mixed  $resource
     * @param  string|null  $attribute
     * @return void
     */
    public function resolve($resource, $attribute = null)
    {
        parent::resolve($resource, $attribute);

        $this->withMeta([
            'inlineOnIndex' => $this->inlineOnIndex,
        ]);
    }

    /**
     * Set the options for the select menu.
     *
     * @param  array  $options
     * @return $this
     */
    public function options($options)
    {
        return $this->withMeta([
            'options' => collect($options ?? [])->map(function ($label, $value) {
                return is_array($label) ? $label + ['value' => $value] : ['label' => $label, 'value' => $value];
            })->values()->all(),
        ]);
    }

    /**
     * Display values using their corresponding specified labels.
     *
     * @return $this
     */
    public function displayUsingLabels()
    {
        
        return $this->withMeta(['displayUsingLabels' => true]);
        
    }



    
}
