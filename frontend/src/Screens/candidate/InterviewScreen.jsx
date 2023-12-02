import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhoneIcon from "@material-ui/icons/Phone";
import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function InterviewScreen() {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const [cameraOff, setCameraOff] = useState(false);
  const [micOff, setMicOff] = useState(false);

  const handleCameraToggle = () => {
    setCameraOff((prevCameraOff) => !prevCameraOff);
  };

  const handleMicToggle = () => {
    setMicOff((prevMicOff) => !prevMicOff);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: cameraOff ? false : { facingMode: "user" },
        audio: micOff ? false : true,
      })
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      });
  }, [cameraOff, micOff]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  useEffect(() => {
    if (stream && myVideo.current) {
      myVideo.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    if (callAccepted && !callEnded && userVideo.current) {
      userVideo.current.srcObject = stream;
    }
  }, [callAccepted, callEnded, stream]);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    if (connectionRef.current) {
      connectionRef.current.destroy();
    }
  };

  return (
    <div className="interview-screen">
      <h1>InterviewScreen</h1>
      <>
        <h1 style={{ textAlign: "center", color: "#fff" }}>Nodejs Interview</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="video-container">
                <div className="video">
                  {stream && (
                    <>
                      <video
                        playsInline
                        muted
                        ref={myVideo}
                        autoPlay
                        //   style={{ width: "300px" }}
                        style={{ width: "100%" }}
                      />
                      <div className="video-controls">
                        <IconButton
                          color={cameraOff ? "red" : "white"}
                          onClick={handleCameraToggle}
                        >
                          {cameraOff ? <VideocamOffIcon style={{color:"white"}}/> : <VideocamIcon tyle={{color:"white"}} />}
                        </IconButton>
                        <IconButton
                          color={micOff ? "default" : "secondary"}
                          onClick={handleMicToggle}
                        >
                          {micOff ? <MicOffIcon /> : <MicIcon />}
                        </IconButton>
                      </div>
                    </>
                  )}
                </div>
                <div className="video">
                  {callAccepted && !callEnded && userVideo.current && (
                    <video
                      playsInline
                      ref={userVideo}
                      autoPlay
                      //   style={{ width: "300px" }}
                    />
                  )}
                </div>
              </div>
              <div className="myId">
                <TextField
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginBottom: "20px" }}
                />
                <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AssignmentIcon fontSize="large" />}
                  >
                    Copy ID
                  </Button>
                </CopyToClipboard>

                <TextField
                  id="filled-basic"
                  label="ID to call"
                  variant="filled"
                  value={idToCall}
                  onChange={(e) => setIdToCall(e.target.value)}
                />
                <div className="call-button">
                  {callAccepted && !callEnded ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={leaveCall}
                    >
                      End Call
                    </Button>
                  ) : (
                    <IconButton
                      color="primary"
                      aria-label="call"
                      onClick={() => callUser(idToCall)}
                    >
                      <PhoneIcon fontSize="large" />
                    </IconButton>
                  )}
                  {idToCall}
                </div>
              </div>
              <div>
                {receivingCall && !callAccepted ? (
                  <div className="caller">
                    <h1 style={{ color: "red" }}>{name} is calling...</h1>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={answerCall}
                    >
                      Answer
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="text-white">second section</h3>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default InterviewScreen;
