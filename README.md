<div align="center">

# react-material-ui-tooltip-popperprops-issue-reproduction

**Reproduction of an issue with customizations of components based on popper.js.**

</div>

<br><br>

## Details

I customize the `<Tooltip />` component, either using the `PopperProsp` prop directly or by customizing the default `PopperPros` value in
the global theme using `defaultProps`. Now, if I choose to use an arrow (`arrow` props set to `true`) and decide to define custom popper.js
modifiers (e.g. `computeStyle` or `offset`), the arrow does not get placed properly.

An analysis shows: If a custom `PopperProps` value is defined, it gets deepmerged with the `PopperProps` value inside the `<Tooltip />`
component, yet that deepmerge process does not indeed combine the modifiers but replace all existing `PopperProps` with the custom ones.

**Works (no modifiers)**

```jsx
<Tooltip
  title="This is a tooltip"
  arrow
  PopperProps={{
    popperOptions: {
      strategy: 'fixed',
    },
  }}
>
  <button type="button">Hover me</button>
</Tooltip>
```

**Breaks (with modifiers)**

```jsx
<Tooltip
  title="This is a tooltip"
  arrow
  PopperProps={{
    popperOptions: {
      strategy: 'fixed',
      modifiers: [
        {
          name: 'computeStyle',
          options: {
            gpuAcceleration: false,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 3],
          },
        },
      ],
    },
  }}
>
  <button type="button">Hover me</button>
</Tooltip>
```

**Preview:**

![Preview](/docs/preview.gif?raw=true)

<br><br>

## Reproduction

1. Clone this repository
2. Run `npm install` in the root directory to install dependencies
3. Run `npm start` to start the application in dev mode
4. Examine both examples
