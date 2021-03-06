import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Button, ButtonType, ButtonSize } from './';
import readme from './README.md';

const BankIdIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 16 16">
        <path
            fill="currentColor"
            d="M5.06 8.343h-.011l.666-4.336h-.714c-.337 0-.764-.192-.892-.547-.043-.118-.138-.533.415-.934.195-.141.325-.297.35-.416a.335.335 0 0 0-.092-.318c-.122-.12-.358-.185-.663-.185-.513 0-.874.305-.906.524-.025.161.097.292.203.372.319.243.394.601.196.936-.203.344-.641.568-1.116.571l-.727-.002c-.063.423-1.052 6.897-1.128 7.407h3.954c.033-.23.217-1.452.465-3.072zM10.343.212H6.319L5.78 3.719l.684.002c.374-.002.727-.176.879-.433a.43.43 0 0 0 .068-.223c0-.146-.095-.255-.192-.329-.265-.202-.321-.42-.321-.567 0-.031.002-.059.006-.083.056-.371.545-.769 1.184-.769.383 0 .679.092.856.265a.627.627 0 0 1 .174.587c-.054.264-.313.485-.462.593-.389.282-.338.529-.313.598.08.221.389.358.629.358h1.043v.004c1.418.011 2.18.682 1.94 2.245-.223 1.452-1.305 2.077-2.596 2.093l-.512 3.356h.756c3.187 0 5.79-2.108 6.302-5.434.631-4.12-1.913-5.77-5.562-5.77zM2.042 12.91H.427L0 15.751h1.837c.51 0 .902-.346.971-.808.055-.366-.095-.604-.481-.754.307-.129.482-.325.522-.592.05-.328-.119-.687-.807-.687zm-.718 2.408h-.292l.12-.795h.316c.316 0 .448.146.412.383-.043.278-.232.412-.556.412zm.172-1.229h-.279l.112-.746h.279c.316 0 .414.154.381.371-.03.204-.177.375-.493.375zM5.103 14.901l.094-.625c.083-.554-.351-.762-.844-.762-.385 0-.718.116-1.064.374l-.097.646c.398-.279.631-.375.91-.375.239 0 .317.071.295.271-.254.179-.902.213-1.164.446a.637.637 0 0 0-.218.375c-.043.283.122.537.599.537.263 0 .509-.071.732-.213.101.188.305.233.726.204l.242-.587c-.238-.004-.245-.07-.211-.291zm-.809.208a.628.628 0 0 0-.01.204.772.772 0 0 1-.423.15c-.138 0-.223-.104-.202-.246.045-.3.458-.275.682-.421l-.047.313zM7.394 13.514c-.267 0-.471.091-.737.325l.043-.288h-.842l-.331 2.199h.842l.194-1.287c.117-.162.238-.237.372-.237.166 0 .227.1.195.321l-.181 1.204h.841l.219-1.454c.073-.487-.146-.783-.615-.783zM10.093 13.551l-.806.759.21-1.4h-.841l-.428 2.841h.842l.153-1.017h.008l.64 1.017h1.057l-.83-1.262 1.035-.938zM11.206 15.751h.967l.427-2.841h-.967zM14.454 12.91H13.07l-.427 2.841H14.2c.939 0 1.434-.737 1.531-1.383.1-.658-.209-1.458-1.277-1.458zm.316 1.421c-.077.508-.335.745-.804.745h-.255l.224-1.491h.259c.522 0 .632.371.576.746z"
        />
    </svg>
);

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Button', withReadme(readme, () => {
    const types: ButtonType[] = ['primary', 'secondary', 'secondaryNegative', 'warn', 'text', 'success'];
    const sizes: ButtonSize[] = ['small', 'medium', 'large'];

    return (
        <Button
            type={select('Type', types, 'primary')}
            size={select('Size', sizes, 'medium')}
            disabled={boolean('Disabled', false)}
            loading={boolean('Loading', false)}
            icon={boolean('Icon', false) ? <BankIdIcon /> : undefined}
            iconAlignment={select('Icon alignment', ['start', 'end'], 'start')}
        >
            {text('Label', 'En knapp')}
        </Button>
    );
}));
