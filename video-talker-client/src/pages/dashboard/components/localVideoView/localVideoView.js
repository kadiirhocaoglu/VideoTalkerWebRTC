import React, {useRef, useEffect} from 'react'
const styles = {
    videoContainer:{
        width: '150px',
        height:  '150px',
        borderRadius: '8px',
        position: 'absolute',
        top: '5%',
        right: '23%'
    },
    videoElement: {
        width: '100%',
        height: '100%'
    }
}

const LocalVideoView = props => {
    const {LocalStream} = props;
    const LocalVideoRef = useRef();
    useEffect(()=>{
        if(LocalStream){
            const LocalVideo = LocalVideoRef.current;
            LocalVideo.srcObject = LocalStream;

            LocalVideo.onloadedmetadata = () => {
                LocalVideo.play();
            }
        }
},[LocalStream]);
  return (
    <div style={styles.videoContainer}>
        <video style={styles.videoContainer} ref={LocalVideoRef} autoPlay muted />
    </div>
  )
}

export default LocalVideoView