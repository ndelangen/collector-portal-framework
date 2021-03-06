import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import React from 'react';
import { Input } from './';
import readme from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    value: ''
});

components.add('Input', withReadme(readme, () => {
    return (
        <State store={store}>
            <Input
                label={text('Label', 'En label')}
                placeholder={text('Placeholder', '')}
                error={text('Error', '')}
                warning={text('Warning', '')}
                description={text('Description', '')}
                multiline={boolean('Multiline', false)}
                disabled={boolean('Disabled', false)}
                rows={number('Rows', 10)}
                value={store.get('value')}
                onChange={event => store.set({ value: event.currentTarget.value })}
            />
        </State>
    );
}));
