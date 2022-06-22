// https://shylog.com/react-custom-hooks-scroll-animation-fadein/

import React, {useCallback, useEffect, useRef} from 'react';

export default useScrollFadeIn = () => {
	const dom = useRef();
  
  const handleScroll = useCallback(() => {
    const { current } = dom;
    const currentScrollPosition = window.pageYOffset;
    const currentDomScrollPosition = currentScrollPosition + current.getBoundingClientRect().top - 800; 
    // 800은 이벤트 반응 시점을 조절하기 위해 넣은 임의의 Y position 값
  }, []); 
  
  useEffect(() => {
    if (element.current) {
      window.addEventListener('scroll', handleScroll);
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return {
    ref: dom,
  };
};