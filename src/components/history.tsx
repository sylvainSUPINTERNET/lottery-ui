import React, { useEffect, Suspense, useState } from "react";


import { Empty, HistoryWinEventResponseStream } from "../proto/history_pb";
import { HistorySvcClient } from "../proto/HistoryServiceClientPb";
import { config } from '../config/config.grpc';


export interface HistoryEvent {
    winnernickname: string;
    itemprice: string;
    winat: number;
    itemurl: string;
}

//https://github.com/cactuaroid/GrpcWpfSample/blob/cd0d87ed6ccccac787960e9742aee036a3dc11eb/GrpcWpfSample.Server/Grpc/ChatServiceGrpcServer.cs#L51
// https://stackoverflow.com/questions/60116274/grpc-c-sharp-server-side-waiting-until-client-closes-connection

function History () {
    
    const [clientHistory, setClientHistory] = useState<HistorySvcClient>(new HistorySvcClient(config.grpcUrl, null, null));
    let [historyList, setHistoryList] = useState<any[]>([]);

    let streamHistoryEventsWinCall = clientHistory.historyWinStream(new Empty());

    useEffect( () => {
        console.log("Use effect history called");

        streamHistoryEventsWinCall.on('data', (data: HistoryWinEventResponseStream) => {
            const obj = data.toObject()["historyeventlistList"];
            setHistoryList([...historyList, ...obj])
        });
    
        streamHistoryEventsWinCall.on('end', () => {
            console.log("end")
        });
                    
    }, []);


    return ( 
        <div>
            <h1>HISTOREY</h1>

            {
                historyList.map((item:HistoryEvent, index:number) => <li key={index}>{item.winnernickname}</li>)
            }
   
            <Suspense fallback={<div>lOADING ...</div>}>
            </Suspense>
        </div>
    )
}


export default History;