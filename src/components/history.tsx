import React, { useEffect, Suspense, useState } from "react";


import { Empty, HistoryWinEventResponseStream } from "../proto/history_pb";
import { HistorySvcClient } from "../proto/HistoryServiceClientPb";
import { config } from '../config/config.grpc';


export interface HistoryEvent {
    winnerNickname: string;
    itemPrice: string;
    winAt: number;
    itemUrl: string;
}

function History () {
    
    const [clientHistory, setClientHistory] = useState<HistorySvcClient>(new HistorySvcClient(config.grpcUrl, null, null));
    const [historyList, setHistoryList] = useState<any[]>([]);

    useEffect( () => {
        console.log("Use effect history called");

        let streamHistoryEventsWinCall = clientHistory.historyWinStream(new Empty());

        streamHistoryEventsWinCall.on('data', (data: HistoryWinEventResponseStream) => {
            const obj = data.toObject()["historyeventlistList"];
            console.log("data", obj);
            setHistoryList([...historyList, ...obj]);
        });

        streamHistoryEventsWinCall.on('end', () => {
            console.log("end")
        });

            
    }, []);


    return ( 
        <div>
            <h1>HISTOREY</h1>
            <Suspense fallback={<div>lOADING ...</div>}>
                
                {/*  <Todos data={todos} /> */}
                {
                      historyList.length > 0 && historyList.map( (historyEvent: HistoryEvent, index: number) => {
                        return <div>
                            <p>{historyEvent.winnerNickname}</p>
                        </div>
                    })
                }
            </Suspense>
        </div>
    )
}


export default History;