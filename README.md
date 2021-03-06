# Laravel Nova Dropdown Inline Field with One Click

This package allow you to edit a Dropdown field in the index page with `one click`

### Installation

        composer require ronnytorresmtz/dropdown-inline

### Usage

#### Add the field to your resource without edition

```php
public function fields(Request $request)
{
        return [

                DropdownInline::make('Start Date') 
                    ->options([
                        0 => 'Activo',
                        1 => 'No Activo',
                    ]),

        ];
        
}
```

To edit the Dropdown field you need to click it on.

If you press the `Esc key` or `lost the focues` the field will became not editable.

#### Add the field to your resource and allow to edit with one click

```php
public function fields(Request $request)
{
        return [

               DropdownInline::make('Start Date') 
                    ->options([
                        0 => 'Activo',
                        1 => 'No Activo',
                    ])
                    ->inlineOnIndex(),
                
        ];
        
}
```

#### Show the option label instead of the value

```php
public function fields(Request $request)
{
        return [

               DropdownInline::make('Start Date') 
                    ->options([
                        0 => 'Activo',
                        1 => 'No Activo',
                    ])
                    ->inlineOnIndex()
                    ->displayUsingLabels(),
                
        ];
        
}
```

`WATCH OUT: This field needs the displayUsingLabels method to be set if not the field does not work well with values.`


This method also accepts a closure with the current request if you want to make it editable dynamically:

```php
public function fields()
{
    return [
         DropdownInline::make('Start Date') 
                ->options([
                0 => 'Activo',
                1 => 'No Activo',
                ])
                ->displayUsingLabels()
                ->inlineOnIndex(function (NovaRequest $request) {
                        return $request->user()->isAdmin();
                }),
    ];
}
```
