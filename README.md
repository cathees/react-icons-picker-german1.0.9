# React-Icons Icon Picker

## Overview

react-icons-picker is a React icon picker for react-icons icons. It contains both a picker component and an icon renderer. Doesn't need any css loader.
[Sandbox Demo](https://codesandbox.io/s/ecstatic-bose-v4mhi9).

![Icon Picker Demo](https://res.cloudinary.com/bla2/image/upload/v1665368904/samples/ezgif.com-gif-maker_tk9ciu.gif)

## Installation

Install via npm

```cli
npm install react-icons-picker
```

or yarn

```cli
yarn add react-icons-picker
```

## Usage

The IconPicker component is just like any other picker component. The value prop is the icon that is displayed on the picker. When a new icon is selected, the onChange handler is fired. You can customize the look and feel as you want by passing props or just selecting the css class.

```react
import * as React from 'react'
import IconPicker from 'react-icons-picker'

export default () => {
  const [value, setValue] = React.useState("FaUsers")
  return (
    <IconPicker value={value} onChange={(v) => setValue(v)} />
  )
}
```

You can also use the IconPickerItem component to render the icon. This uses react-icons under the hood.

```react
import * as React from 'react'
import { IconPickerItem } from 'react-icons-picker'

export default () => (
  <IconPickerItem value="FaUsers" size={24} color="#000" />
  )
```

## All valid configurations/props of the package

IconPicker

| Prop                    | Type                | Required | Description                                                    |
| ----------------------- | ------------------- | -------- | -------------------------------------------------------------- |
| value                   | string              | true     | The current font awesome icon displayed on the picker.         |
| onChange                | (v: string) => void | true     | A change handler that is executed when a new icon is selected. |
| modalEmptyContent       | React element       | false    | React component that gets displayed when search result is empty|
| searchInputPlaceholder  | string              | false    | The placeholder text for search input                          |
| pickButtonStyle         | CSSProperties       | false    | Styles for the picker button                                   |
| pickButtonFocusStyle    | CSSProperties       | false    | Styles for the picker button focus                             |
| modalFadeStyle          | CSSProperties       | false    | Styles for the modal window's background fade effect           |
| modalWrapperStyle       | CSSProperties       | false    | Styles for the modal window's centered wrapper div             |
| searchBarStyle          | CSSProperties       | false    | Styles for the search input's wrapper div element              |
| searchInputStyle        | CSSProperties       | false    | Styles for the search input                                    |
| searchInputFocusStyle   | CSSProperties       | false    | Styles for the search input's focus                            |
| modalContentWrapperStyle| CSSProperties       | false    | Styles for the modal window's content wrapper div              |
| modalIconsWrapperStyle  | CSSProperties       | false    | Styles for the wrapper element of search result of icons       |
| modalIconsStyle         | CSSProperties       | false    | Styles for the each instance of search result of icons         |
| modalIconNameStyle      | CSSProperties       | false    | Styles for the each instance of search result of icon names    |
| modalIconsHoverStyle    | CSSProperties       | false    | Styles for the hovering effect of each search result icons     |
| modalEmptyWrapperStyle  | CSSProperties       | false    | Styles for the wrapper element of empty search result container|

IconPickerItem
| Prop | Type | Required | Description |
| ---- | --- | --- | ---
| value | string | true | The name of the icon to render. Example: "FaUsers" |
| size | number | false |The size of the icon. Default: 24 |
| color | string | false | The color of the icon. Default: "#000" |

## Contribution Guide

If you are interested in contributing, please submit a PR.

### Contributors

- [Nyambayar Saintogtokh](https://github.com/NyambayarSaint)
