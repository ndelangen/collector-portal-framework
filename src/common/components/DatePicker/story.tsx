import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { State, Store } from '@sambego/storybook-state';
import { DatePicker } from './';
import readme from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    selectedDate: new Date()
});

components.add('Date picker', withReadme(readme, () => {
    return (
        <State store={store}>
            <DatePicker
                locale="sv"
                label={text('Label', 'En label')}
                invalidMessage="Felaktigt datum!"
                minDate={new Date()}
                selectedDate={store.get('selectedDate')}
                onChange={selectedDate => store.set({ selectedDate: selectedDate! })}
            />
        </State>
    );
}));
