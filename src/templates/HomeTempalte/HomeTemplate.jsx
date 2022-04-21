


import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import HeaderHome from '../../components/HeaderHome/HeaderHome'

export default function HomeTemplate(props) {

  const [widthHeight, setWidthHeight] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    window.onload = () => {
      //bắt sự kiện windowload 
      setWidthHeight({ width: window.innerWidth, height: window.innerHeight });
    }
    window.onresize = () => {
      setWidthHeight({ width: window.innerWidth, height: window.innerHeight });
    }
    return () => {
      window.removeEventListener('onload');
      window.removeEventListener('onresize');
    }
  }, [])
  //Gán mặc định biến Component là component desktop
  let Component = props.component;

  //Xét nếu component mobile có tồn tại
  if (props.mobileComponent) {
    //Xét nếu màn hình nhỏ hơn = 767
    if (widthHeight.width <= 767) {
      Component = props.mobileComponent;
    }
  }

  return (
    <Route exact path={props.path} render={(propsRoute) => {
      return <div>
        <HeaderHome />
        <Component {...propsRoute} />
      </div>
    }} />
  )
}
