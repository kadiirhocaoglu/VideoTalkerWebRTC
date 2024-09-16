import React, {useRef, useEffect} from 'react'
const styles = {
    videoContainer:{
        width: '100%',
        height: '100%'
    },
    videoElement: {
        width: '100%',
        height: '100%'
    }
}

const RemoteVideoView = props => {
    const {RemoteStream} = props;
    const RemoteVideoRef = useRef();
    useEffect(()=>{
        if(RemoteStream){
            const RemoteVideo = RemoteVideoRef.current;
            RemoteVideo.srcObject = RemoteStream;

            RemoteVideo.onloadedmetadata = () => {
                RemoteVideo.play();
            }
        }
},[RemoteStream]);
  return (
    <div style={styles.videoContainer}>
        <video style={styles.videoContainer} ref={RemoteVideoRef} autoPlay  />
    </div>
  )
}

export default RemoteVideoView