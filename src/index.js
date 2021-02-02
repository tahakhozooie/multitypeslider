/*
 * Design and developed by Taha Khozooie, Feb 2021
 * taha4954@gmail.com
 */
import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'
import ReactPlayer from "react-player";
import libraryAsset from "./videothumbnail.png"

const defaultVideoThumbnail = require(`./${libraryAsset}`);

export const MultiTypeSlider = ({Interval, EnableSliderButtons, AutoSwipe = true, Loop, Width, DataList, EnableVideoPlayerController, EnableListItemActionButton, NextSlideButton, PrevSlideButton, ListItemActionButton, onPressListItemActionButton, onPressNextSlide, onPressPrevSlide, ShowList}) => {

  const [visible, setVisible] = useState(0);

  const prevSlide = () => {
    if (visible !== 0) {
      if (onPressPrevSlide) {
        onPressPrevSlide(DataList[visible - 1]);
      }
      setVisible(visible - 1);
    }
  };
  const nextSlide = () => {
    if (visible !== DataList.length - 1) {
      if (onPressNextSlide) {
        onPressNextSlide(DataList[visible + 1]);
      }
      setVisible(visible + 1);
    }

    if (Loop && visible === DataList.length - 1) {
      if (onPressNextSlide) {
        onPressNextSlide(DataList[0]);
      }
      setVisible(0);
    }
  };

  useEffect(() => {
    if (AutoSwipe && AutoSwipe === true) {
      const inv = setTimeout(() => {
        nextSlide();
      }, Interval ? Interval : 4000);
      return () => clearTimeout(inv);
    }
  }, [visible]);

  if (DataList.length > 0) {
    return <div className={styles.multiTypeSliderParent} style={{width: Width}}>
      <div className={styles.multiTypeSliderParentSelectedSlideParent}>

        {DataList[visible].type.indexOf("image") > -1 ?
          <img
            className={styles.multiTypeSliderParentSelectedSlideImage}
            src={DataList[visible].src}
            alt={DataList[visible].alt ? DataList[visible].alt : ""}
          />
          : DataList[visible].type.indexOf("video") > -1 &&
          <ReactPlayer
            className={styles.multiTypeSliderParentSelectedSlideVideo}
            url={DataList[visible].src}
            controls={EnableVideoPlayerController}
          />
        }


        {
          ((visible !== DataList.length - 1) || (Loop && visible === DataList.length - 1)) && EnableSliderButtons &&
          <div
            onClick={nextSlide}
            className={styles.multiTypeSliderNextSlideControllerParent}
          >
            {NextSlideButton}
          </div>
        }

        {
          visible !== 0 && EnableSliderButtons &&
          <div
            onClick={prevSlide}
            className={styles.multiTypeSliderPrevSlideControllerParent}
          >
            {PrevSlideButton}
          </div>
        }


      </div>

      {ShowList &&
      <div className={styles.multiTypeSliderDataListParent}>

        {DataList.map((val, ind) => {
          return <div key={ind} className={styles.multiTypeSliderDataListItemParent}>

            {EnableListItemActionButton === true &&
            <div
              onClick={() => {
                onPressListItemActionButton(val)
              }}
              className={styles.multiTypeSliderListItemActionButtonParent}
            >
              {ListItemActionButton}
            </div>
            }

            <img
              onClick={() => {
                setVisible(ind)
              }}
              style={{
                width: "100%",
                height: '100%',
                objectFit: 'contain',
                borderRadius: 5,
                cursor: "pointer",
                borderStyle: 'solid',
                borderWidth: visible === ind ? 1 : 0,
                borderColor: 'red'
              }}
              alt=""
              src={val.type.indexOf("image") > -1 ?
                val.src
                :
                val.type.indexOf("video") > -1 &&
                val.hasOwnProperty("thumb") ? val.thumb : defaultVideoThumbnail
              }
            />

          </div>
        })
        }

      </div>
      }

    </div>
  }

};
