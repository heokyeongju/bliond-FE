import React, { useEffect, useState } from 'react';
import {Route, Routes, useParams} from "react-router-dom";
import {Poll, Question} from "../index";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {useRecoilState} from "recoil";
import {SocketTypeQuestionAtom} from "../../recoil/SocketTypeQuestionAtom";


let sock;
let client;

const EventDetail = () => {
    const [count, setCount] = useState('');
    const [random, setRandom] =  useRecoilState(SocketTypeQuestionAtom);
    const {eventId} = useParams()


    useEffect(() => {
        sock = new SockJS("http://localhost:8080/event", null, {transports: ["websocket", "xhr-streaming", "xhr-polling"]});
        client = Stomp.over(sock);
        client.connect({}, () =>{
            client.subscribe(`/queue/${eventId}`, (response) => {
                console.log(response);
                const type = response.body;
                if ("question" === type) {
                    setRandom(Math.random());
                }
            })
        })
        return () => client.disconnect();

    }, [])
    return (
        <Routes>
            <Route path="questions" element={<Question client={client}/>} />
            <Route path="polls" element={<Poll />} />
        </Routes>
    )
};
export default EventDetail;