# Slider

Sliders allow users to make selections from a range of values.

## Props

| Name        | Required | Type            | Possible values                               |
|-------------|----------|-----------------|-----------------------------------------------|
| `min`       | ✓        | number          |                                               |
| `max`       | ✓        | number          |                                               |
| `value`     | ✓        | number          |                                               |
| `onChange`  |          | `event => void` |                                               |

## Example

```jsx
<Slider
    type="range"
    min={100}
    max={1000}
    value={500}
/>
```
