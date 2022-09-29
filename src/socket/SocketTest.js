import React, {useEffect} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const SocketTest = () => {

  const sock = new SockJS("http://localhost:8080/event", null, {transports: ["websocket", "xhr-streaming", "xhr-polling"]});
  let client = Stomp.over(sock);
  const handleClickSendTo = () => {
    const message = {
      "memberId": 1,
      "content": "hi"
    }
    client.send(`/questions/1`,{}, JSON.stringify(message))
  };
  useEffect(() => {
    client.connect({}, () =>{
      client.subscribe('/queue/1', function(response){
        console.log("=======")
        console.log(response)
        console.log("=======")
      })
    })
    return () => client.disconnect();

  }, [client])
  return (
    <>
      <div>socket</div>
      <button onClick={handleClickSendTo}>SendTo</button>
    </>
  )
}


export default SocketTest;

