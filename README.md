# MultiTypeSlider by Taha Khozooie

> a multi type media support slider for react app

[![NPM](https://img.shields.io/npm/v/multitypeslider.svg)](https://www.npmjs.com/package/multitypeslider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
> Contact me for support more types ;)

## Install

```bash
npm install --save multitypeslider
```

## Usage

```jsx
import {MultiTypeSlider} from 'multitypeslider'
import 'multitypeslider/dist/index.css'
import TestVideo from './videotest.mp4'

const App = () => {

  const data = [
    {
      src: "https://miro.medium.com/max/5548/1*lK8DqxRW7pYqaZnZHJDDfw.png", // LocalImage OR URL
      type: "image", // REQUIRED <<<<<
      alt: "alt for img tag"
    },
    {
      src: TestVideo, // LocalVideo OR URL
      type: "video", // REQUIRED <<<<<
      thumb: "https://miro.medium.com/max/5548/1*lK8DqxRW7pYqaZnZHJDDfw.png" // LocalImage OR URL
    }
  ];

  return <MultiTypeSlider
    DataList={data}
    Width="100%"
    ShowList={true}
    Loop={true}
    AutoSwipe={true}
    Interval={3000}
    EnableListItemActionButton={true}
    EnableSliderButtons={true}
    onPressListItemActionButton={si => {
      console.log(si)
    }}
    onPressNextSlide={ns => {
      console.log(ns)
    }}
    onPressPrevSlide={ps => {
      console.log(ps)
    }}
    EnableVideoPlayerController={true}
    ListItemActionButton={<div style={{width: 10, height: 10, backgroundColor: 'green'}}/>}
    NextSlideButton={<div style={{width: 10, height: 10, backgroundColor: 'red'}}/>}
    PrevSlideButton={<div style={{width: 10, height: 10, backgroundColor: 'blue'}}/>}
  />

};

```
## Props
Prop | Description | Required | Type
--- | --- | --- | ---
DataList | The list of data that you want to shown | Yes | Array
Width | Width of parent (default is 100%) | No | String
ShowList | Show list items below slider | No | Boolean
Loop | Restart slider from first item | No | Boolean
AutoSwipe | Auto swipe to next slide | No | Boolean
Interval | Auto swipe interval time in millisecond (default is 4000) | No | Number
EnableListItemActionButton | Show a button on the small images below slider (ShowList Prop) | No | Boolean
EnableSliderButtons | Show Next & Prev buttons | No | Boolean
onPressListItemActionButton | If EnableListItemActionButton, this prop returns clicked item object | No | Object
onPressNextSlide | This prop returns next slide item object | No | Object
onPressPrevSlide | This prop returns previous slide item object | No | Object
EnableVideoPlayerController | This prop change video player controllers visibility (default is false) | No | Boolean
ListItemActionButton | This prop given component that you want shown as icon for button on the small images below slider | No | Component
NextSlideButton | This prop given component that you want shown as icon for slider next button | No | Component
PrevSlideButton | This prop given component that you want shown as icon for slider previous button | No | Component

## License

MIT © [tahakhozooie](https://github.com/tahakhozooie)
