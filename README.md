# dropdown-inline


DropdownInline::make('Status')
                ->options([
                '0' => 'Activo',
                '1' => 'No Activo',
                 ])
                 ->inlineOnIndex()
                 ->displayUsingLabels(),