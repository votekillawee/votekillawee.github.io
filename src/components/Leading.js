import React from 'react';
import { Gallery, Flex } from 'mdb-react-components';

export function Leading(props) {
  const { leading, children } = props;

  return (
    <div className='leading'>
      <Gallery.Slideshow
        photos={leading}
        thumbnails={leading}
        showControls={true}
        showCounter={true}
      />
      <Flex.Container
        flow='column nowrap'
        alignItems='center'
        gap='8px'
        style={{
          zIndex: 2,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {children}
      </Flex.Container>
    </div>
  );
}
