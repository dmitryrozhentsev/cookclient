import * as React from 'react';
import './cookItem.css';
import { LikeIcon } from '../../assets/icons/likeIcon';
import { DeleteIcon } from '../../assets/icons/deleteIcon';
import { CookIcon } from '../../assets/icons/cookIcon';
import { TimeIcon } from '../../assets/icons/timeIcon';
import { CookItemProps } from './cookItem.types';
import { SERVERIPPORT } from '../../../constants/backend';

export const CookItem = (props:CookItemProps) => {
  const isImg = Boolean(props.img);
  const titleLength = props.title.length;
  const { isPreview } = props;
  console.log(isPreview, isImg);

  const CookItemNoImgNoPreview = () => (
    <div className="cookItemNoImg">
      <div className="cookItem__nav">
        <div className="cookItem__navWrapper">
          <button className="cookItem__addFavourite cookItem__button">
            <LikeIcon height="35" width="35" className="like" />
          </button>
          <button className="cookItem__delete cookItem__button">
            <DeleteIcon height="25" width="25" className="delete" />
          </button>
        </div>
      </div>
      <div className="cookItem__nameWrapper">
        {
                        titleLength < 10 ? (
                          <p className="cookItem__nameText cookItem__nameTextShort">{props.title}</p>
                        ) : (
                          <p className="cookItem__nameText cookItem__nameTextLong">{props.title}</p>
                        )
                    }

      </div>
      <div className="cookItem__cookingTime">
        <TimeIcon height="20" width="20" className="cookingTime" />
        <p className="cookItem__textTime">
          {props.worktime}
          {' '}
          минут
        </p>
      </div>
      <div className="cookItem__bgIcon">
        <CookIcon className="cookbg" width="140" height="150" />
      </div>
    </div>
  );

  const CookItemImgNoPreview = () => (
    <div className="cookItem" style={{ backgroundImage: `url(http://${SERVERIPPORT}/img/${props.img})` }}>
      <div className="cookItem__nav">
        <div className="cookItem__navWrapper">
          <button className="cookItem__addFavourite cookItem__button">
            <LikeIcon height="35" width="35" className="like" />
          </button>
          <button className="cookItem__delete cookItem__button">
            <DeleteIcon height="25" width="25" className="delete" />
          </button>
        </div>
      </div>
      <div className="cookItem__nameWrapper">
        {
                        titleLength < 10 ? (
                          <p className="cookItem__nameText cookItem__nameTextShort">{props.title}</p>
                        ) : (
                          <p className="cookItem__nameText cookItem__nameTextLong">{props.title}</p>
                        )
                    }
      </div>
      <div className="cookItem__cookingTime">
        <TimeIcon height="20" width="20" className="cookingTime" />
        <p className="cookItem__textTime">
          {props.worktime}
          {' '}
          минут
        </p>
      </div>
    </div>
  );

  const CookItemNoImgPreview = () => (
    <div className="cookItemNoImg">
      <div className="cookItem__nameWrapper cookItem__namePreview">
        {
                        titleLength < 10 ? (
                          <p className="cookItem__nameText cookItem__nameTextShort">{props.title}</p>
                        ) : (
                          <p className="cookItem__nameText cookItem__nameTextLong">{props.title}</p>
                        )
                    }
        <div className="cookItem__bgIcon">
          <CookIcon className="cookbg" width="140" height="150" />
        </div>
      </div>
    </div>
  );

  const CookItemImgPreview = () => (
    <div className="cookItem" style={{ backgroundImage: `${props.img}` }}>
      <div className="cookItem__nameWrapper cookItem__namePreview">
        {
                        titleLength < 10 ? (
                          <p className="cookItem__nameText cookItem__nameTextShort">{props.title}</p>
                        ) : (
                          <p className="cookItem__nameText cookItem__nameTextLong">{props.title}</p>
                        )
                    }
      </div>
    </div>
  );

  return (
    !isPreview
      ? !isImg ? <CookItemNoImgNoPreview /> : <CookItemImgNoPreview />
      : !isImg ? <CookItemNoImgPreview /> : <CookItemImgPreview />

  );
};
