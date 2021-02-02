/*
 * Design and developed by Taha Khozooie, Feb 2021
 * taha4954@gmail.com
 */
import React from 'react'
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
      thumb: "https://miro.medium.com/max/5548/1*lK8DqxRW7pYqaZnZHJDDfw.png"
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

export default App
