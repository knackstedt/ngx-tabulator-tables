export interface NetworkRequest {
    id: string;
    timestamp: number;
    method: string;
    url: string;
    status: number;
    duration: number;
    remoteIP?: string;
    protocol?: string;
    scheme?: string;
    domain?: string;
    path?: string;
    direction: 'inbound' | 'outbound';
    type?: 'xhr' | 'fetch' | 'ws' | string;
    contentType?: string;
    size?: number;
    transferred?: number;
    requestHeaders?: Record<string, string>;
    responseHeaders?: Record<string, string>;
    requestBody?: any;
    responseBody?: any;
    body?: any;
    wsMessages?: any[];
    handlerStack?: any[];
    callStack?: string;
    hasRequestBody?: boolean;
    hasResponseBody?: boolean;
    isChunked?: boolean;
    isStreamed?: boolean;
    chunkTimings?: Array<{ timestamp: number; size: number; duration: number }>;
}

export const networkData: NetworkRequest[] = [
    {
        id: 'req-1',
        timestamp: Date.now() - 10000,
        method: 'GET',
        url: 'http://localhost:4200/api/users',
        status: 200,
        duration: 45,
        direction: 'inbound',
        type: 'fetch',
        size: 1024,
        transferred: 512
    },
    {
        id: 'req-2',
        timestamp: Date.now() - 8000,
        method: 'POST',
        url: 'http://localhost:4200/api/auth/login',
        status: 200,
        duration: 120,
        direction: 'inbound',
        type: 'xhr',
        size: 256,
        transferred: 128
    },
    {
        id: 'req-3',
        timestamp: Date.now() - 6000,
        method: 'GET',
        url: 'http://localhost:4200/_app/main.js',
        status: 200,
        duration: 15,
        direction: 'inbound',
        type: 'fetch',
        path: '/_app/main.js',
        size: 15000,
        transferred: 15000
    },
    {
        id: 'req-4',
        timestamp: Date.now() - 5000,
        method: 'GET',
        url: 'http://localhost:4200/dashboard/stats',
        status: 200,
        duration: 30,
        direction: 'inbound',
        type: 'fetch',
        path: '/dashboard/stats',
        size: 512,
        transferred: 256
    },
    {
        id: 'req-5',
        timestamp: Date.now() - 3000,
        method: 'GET',
        url: 'http://external-api.com/data',
        status: 200,
        duration: 250,
        direction: 'outbound',
        type: 'fetch',
        size: 2048,
        transferred: 1024
    },
    {
        id: 'req-6',
        timestamp: Date.now() - 2000,
        method: 'GET',
        url: 'http://localhost:4200/assets/logo.png',
        status: 200,
        duration: 10,
        direction: 'inbound',
        type: 'fetch',
        path: '/assets/logo.png',
        size: 5000,
        transferred: 5000
    },
    {
        id: 'req-7',
        timestamp: Date.now() - 1000,
        method: 'GET',
        url: 'http://localhost:4200/scalar/api-reference',
        status: 200,
        duration: 80,
        direction: 'inbound',
        type: 'fetch',
        path: '/scalar/api-reference',
        size: 3000,
        transferred: 1500
    },
    {
        id: 'req-8',
        timestamp: Date.now() - 500,
        method: 'GET',
        url: 'http://localhost:4200/styles.css',
        status: 200,
        duration: 8,
        direction: 'inbound',
        type: 'fetch',
        path: '/styles.css',
        size: 8000,
        transferred: 8000
    }
];

// Legacy data export (kept for backward compatibility)
export const data = {
    "@odata.context": "/api/v1/odata/tender/$metadata#tender",
    "@odata.count": 49, "@odata.nextlink": "/api/v1/odata/tender//tender?$skip=NaN&$top=100",
    "value": [{
        "createdOn": "2025-05-13T19:44:17.315Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:pfr29c7sk0mcopm84tdg"], "id": "tender:01JV5JTAPGCZRMC8P497WSHYBA",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#6043 512 Jonesville Rd, Coldwater, MI 49036",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,700",
            "notes": null, "orderNumbers": "765004",
            "origin": "Tyson Foods: 1200 Industrial Pkwy, Madison, NE 68748",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR4570173, FR937402, SZ09999, SX458",
            "specialInstructions": null, "stops": [{
                "address": "1200 Industrial Pkwy, Madison, NE 68748",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "512 Jonesville Rd, Coldwater, MI 49036",
                "name": "WM#6043",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:17.084Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:4p5jkat5ho7js3olf8qk"], "id": "tender:01JV5JTAD38V9QW3427B34Z3QN",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#6024 Southwest Blvd, Grove City, OH 43123",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,700",
            "notes": null, "orderNumbers": "765004",
            "origin": "Tyson Foods: 1200 Industrial Pkwy, Madison, NE 68748",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "00145, 00132, 00198, 00177",
            "specialInstructions": null, "stops": [{
                "address": "1200 Industrial Pkwy, Madison, NE 68748",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:16.784Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:qq08ick8tx3qwo5j7h4x"], "id": "tender:01JV5JTA3GC0F7FPCFMBHN2RCE",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,700",
            "notes": null, "orderNumbers": "765004",
            "origin": "Tyson Foods: 13076 Renfro Cir, Omaha, NE 68137",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR1199638",
            "specialInstructions": null, "stops": [{
                "address": "13076 Renfro Cir, Omaha, NE 68137",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:16.477Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:xxsvwxzqk2uh09e9zpa0"], "id": "tender:01JV5JT9VMF9WHHR992NGVE1QE",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Coyote",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM #7015 - 6040 Gateway Court, Grove City, OH 43123",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675110",
            "origin": "Tyson Foods: 501 N. Elk Run Rd., Waterloo, IA 50703",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "9000127497",
            "specialInstructions": null, "stops": [{
                "address": "501 N. Elk Run Rd., Waterloo, IA 50703",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "6040 Gateway Court, Grove City, OH 43123",
                "name": "WM #7015",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:16.220Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:k99uix5xf0dz004ej8rg"], "id": "tender:01JV5JT9FPS0H6P8G2CME2BEHZ",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "Jewel (Frozen) - 2200 N 17th Ave BLDG C, Melrose Park, IL 60610",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$1,700",
            "notes": null, "orderNumbers": "675307",
            "origin": "Tyson Foods: 5505 Jefferson Pkwy, Pine Bluff, AR 71602",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "9000402678",
            "specialInstructions": null, "stops": [{
                "address": "5505 Jefferson Pkwy, Pine Bluff, AR 71602",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "2200 N 17th Ave BLDG C, Melrose Park, IL 60610",
                "name": "Jewel (Frozen)",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:15.840Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:siop1sqnxjdm3vi35vsc"], "id": "tender:01JV5JT982Y8W557F33CP60AAQ",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7024 - 23769 Mathew Rd., Sterling, IL 61081",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$1,700",
            "notes": null, "orderNumbers": "675307",
            "origin": "Tyson Foods: 5505 Jefferson Pkwy, Pine Bluff, AR 71602",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "0Z100458, S2671",
            "specialInstructions": null, "stops": [{
                "address": "5505 Jefferson Pkwy, Pine Bluff, AR 71602",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "23769 Mathew Rd., Sterling, IL 61081",
                "name": "WM# 7024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:15.605Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:mmqmf586y2e6sn7wkk42"], "id": "tender:01JV5JT8VQ8BFQT82WZJA83PPT",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# IND3 - 5259 W 500 N, McCordsville, IN 46055",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675281",
            "origin": "Tyson Foods: 514 Industrial Park Blvd, Dawson, GA 39842",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR0Z1207",
            "specialInstructions": null, "stops": [{
                "address": "514 Industrial Park Blvd, Dawson, GA 39842",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "5259 W 500 N, McCordsville, IN 46055",
                "name": "WM# IND3",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:15.194Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:l1pxrwlsd5qbwij9zna4"], "id": "tender:01JV5JT8KKDG0KF005WQ3VKVSH",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "TQL",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM #7204 - 23769 Mathew Road, Sterling, IL 61081",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$2,600",
            "notes": null, "orderNumbers": "675337",
            "origin": "Tyson Foods - 3900 Meacham BLVD, Haltom City, TX 76117",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "SX200032, 0951036",
            "specialInstructions": null, "stops": [{
                "address": "3900 Meacham BLVD, Haltom City, TX 76117",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "23769 Mathew Road, Sterling, IL 61081",
                "name": "WM #7204",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:14.948Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:jc98u6bkzo99hrgd0iv3"], "id": "tender:01JV5JT8D1D81K38H642TBWH0J",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "TQL",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7078 - 26453 S Walton Dr, Elwood, IL 60421",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$2,600",
            "notes": null, "orderNumbers": "675337",
            "origin": "Tyson Foods - 3900 Meacham BLVD, Haltom City, TX 76117",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "SX200032, 0951036",
            "specialInstructions": null, "stops": [{
                "address": "3900 Meacham BLVD, Haltom City, TX 76117",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "26453 S Walton Dr, Elwood, IL 60421",
                "name": "WM# 7078",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:14.728Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:27qwk3mzec63i6ue6fc0"], "id": "tender:01JV5JT85PGEY7V4CHN22XJDM2",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "TQL",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 3930 - 201 McLinden Rd, Minooka, IL 60447",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$2,600",
            "notes": null, "orderNumbers": "675337",
            "origin": "Tyson Foods: 4114 Mint Way, Dallas, TX 75237",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X709112",
            "specialInstructions": null, "stops": [{
                "address": "4114 Mint Way, Dallas, TX 75237",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "201 McLinden Rd, Minooka, IL 60447",
                "name": "WM# 3930",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:14.448Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:uk7wgha9ho79diqwquc1"], "id": "tender:01JV5JT7XBBJXND07FMQAXS6G7",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#6043 512 Jonesville Rd, Coldwater, MI 49036",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,200",
            "notes": null, "orderNumbers": "675927",
            "origin": "Arctic Hormel - 4139 Roosevelt Rd, Saint Cloud, MN 56301",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR0S765",
            "specialInstructions": null, "stops": [{
                "address": "4139 Roosevelt Rd, Saint Cloud, MN 56301",
                "name": "Arctic Hormel",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "512 Jonesville Rd, Coldwater, MI 49036",
                "name": "WM#6043",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:14.229Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:583cw4x6ize9lomn2mun"], "id": "tender:01JV5JT7P25794NW6V12WWCG8T",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#6024 Southwest Blvd, Grove City, OH 43123",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,200",
            "notes": null, "orderNumbers": "675101",
            "origin": "Arctic Hormel - 4139 Roosevelt Rd, Saint Cloud, MN 56301",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "098264, 098145, 098721, 098043, 09665",
            "specialInstructions": null, "stops": [{
                "address": "4139 Roosevelt Rd, Saint Cloud, MN 56301",
                "name": "Arctic Hormel",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:13.985Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:tw9k8hvx91cc042op43z"], "id": "tender:01JV5JT7E15560BC6B5QKNQY17",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,200",
            "notes": null, "orderNumbers": "675101",
            "origin": "Arctic Hormel - 4139 Roosevelt Rd, Saint Cloud, MN 56301",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "098264, 098145, 098721, 098043, 09665",
            "specialInstructions": null, "stops": [{
                "address": "4139 Roosevelt Rd, Saint Cloud, MN 56301",
                "name": "Arctic Hormel",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:44:13.747Z",
        "email": "received_email:01JV5JS4ZXP8SMFMJXAV1YHGYW",
        "events": [], "history": ["⟨tender.log⟩:jmzkhumehzeiezxsydju"], "id": "tender:01JV5JT77KBYQ9Y8PKGC4ZNTZT",
        "machine_analysis": "ai_analysis:01JV5JT6Z0QYNRA6MSXQMB9S09",
        "messageId": "msg-a:r5805761632589205089",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7039 115 Distribution Way, Beaver Dam, WI 53916",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,820",
            "notes": null, "orderNumbers": "675002",
            "origin": "Tyson Foods: 1816 AR-113, Morrilton, AR 72110",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X70982, FR100383",
            "specialInstructions": null, "stops": [{
                "address": "1816 AR-113, Morrilton, AR 72110",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "115 Distribution Way, Beaver Dam, WI 53916",
                "name": "WM#7039",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:41:14.528Z",
        "email": "received_email:01JV5JMEF78K6Q6KPBYB5GR7AY",
        "events": [], "history": ["⟨tender.log⟩:5tczkxdpmlq8mov1m2yt"], "id": "tender:01JV5JMR5HQCN01R5MKMBHAZCV",
        "machine_analysis": "ai_analysis:01JV5JMQDZFZAWM81VYXGDA4QD",
        "messageId": "msg-a:r-4673978507670599551",
        "result": {
            "carrier": null, "deliveryAppointment": null, "deliveryDate": null, "destination": "SAN ANTONIO, TX",
            "distance": null, "equipment": "V53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": "DRY TRAILERS ONLY. NO REFERS! MAKE SURE LOAD LOCKS/ STRAPS ARE USED AFTER EVERY STOP!!",
            "orderNumbers": "NAS118962",
            "origin": "KANSAS CITY, KS",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "1400",
            "specialInstructions": null, "stops": [{
                "address": "845 Amourdale Pkwy, Kansas City, KS 66105",
                "name": "Wagner Logistics",
                "notes": "MUST MAKE APPOINTMENT",
                "reason": "Pickup",
                "stopNumber": "1",
                "time": "2025-03-17T07:30:00"
            }, {
                "address": "SAN ANTONIO, TX",
                "name": null, "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": "2025-03-19T08:00:00"
            }], "tempControl": "None",
            "temperature": null, "tenderDate": "2025-02-20",
            "totalCost": null, "weight": "31500"
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:41:14.271Z",
        "email": "received_email:01JV5JMEF78K6Q6KPBYB5GR7AY",
        "events": [], "history": ["⟨tender.log⟩:icse4hnfksjmhre13pzq"], "id": "tender:01JV5JMQYKPE4DQB01B572GXF6",
        "machine_analysis": "ai_analysis:01JV5JMQDZFZAWM81VYXGDA4QD",
        "messageId": "msg-a:r-4673978507670599551",
        "result": {
            "carrier": null, "deliveryAppointment": null, "deliveryDate": null, "destination": "HOUSTON, TX",
            "distance": null, "equipment": "V53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": "DRY TRAILERS ONLY. NO REFERS! MAKE SURE LOAD LOCKS/ STRAPS ARE USED AFTER EVERY STOP!!",
            "orderNumbers": "NAS118961",
            "origin": "KANSAS CITY, KS",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "1400",
            "specialInstructions": null, "stops": [{
                "address": "845 Amourdale Pkwy, Kansas City, KS 66105",
                "name": "Wagner Logistics",
                "notes": "MUST MAKE APPOINTMENT",
                "reason": "Pickup",
                "stopNumber": "1",
                "time": "2025-03-17T07:30:00"
            }, {
                "address": "HOUSTON, TX",
                "name": null, "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": "2025-03-18T15:00:00"
            }], "tempControl": "None",
            "temperature": null, "tenderDate": "2025-02-20",
            "totalCost": null, "weight": "31500"
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:41:14.046Z",
        "email": "received_email:01JV5JMEF78K6Q6KPBYB5GR7AY",
        "events": [], "history": ["⟨tender.log⟩:nfxszfz866prkgg0fudl"], "id": "tender:01JV5JMQNRD087MBS2GPY7WHJ1",
        "machine_analysis": "ai_analysis:01JV5JMQDZFZAWM81VYXGDA4QD",
        "messageId": "msg-a:r-4673978507670599551",
        "result": {
            "carrier": null, "deliveryAppointment": null, "deliveryDate": null, "destination": "FORT WORTH, TX",
            "distance": null, "equipment": "V53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": "DRY TRAILERS ONLY. NO REFERS! MAKE SURE LOAD LOCKS/ STRAPS ARE USED AFTER EVERY STOP!!",
            "orderNumbers": "NAS118960",
            "origin": "KANSAS CITY, KS",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "1400",
            "specialInstructions": null, "stops": [{
                "address": "845 Amourdale Pkwy, Kansas City, KS 66105",
                "name": "Wagner Logistics",
                "notes": "MUST MAKE APPOINTMENT",
                "reason": "Pickup",
                "stopNumber": "1",
                "time": "2025-03-17T07:30:00"
            }, {
                "address": "FORT WORTH, TX",
                "name": null, "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": "2025-03-18T08:00:00"
            }], "tempControl": "None",
            "temperature": null, "tenderDate": "2025-02-20",
            "totalCost": null, "weight": "46200"
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:10.796Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:tqroxtcw7igvbf8sfhjx"], "id": "tender:01JV5JGZBVMNBPFFJW887Y2M9Z",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM #7204 - 23769 Mathew Road, Sterling, IL 61081",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "680001",
            "origin": "Tyson Foods - 901 Jackson St, Shelbyville, TN 37160",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR001456, FR001908, FR001325, 7X44, 308654, 0990025",
            "specialInstructions": null, "stops": [{
                "address": "901 Jackson St, Shelbyville, TN 37160",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "23769 Mathew Road, Sterling, IL 61081",
                "name": "WM #7204",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$1,550",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:10.572Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:3a0wq170wvzrdnntn87h"], "id": "tender:01JV5JGZ4KDNNR635K158P37MG",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "TQL",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM #7015 - 6040 Gateway Court, Grove City, OH 43123",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "610998",
            "origin": "Tyson Foods: 13076 Renfro Cir, Omaha, NE 68137",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR001567",
            "specialInstructions": null, "stops": [{
                "address": "13076 Renfro Cir, Omaha, NE 68137",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "6040 Gateway Court, Grove City, OH 43123",
                "name": "WM #7015",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$2,200",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:10.336Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:bycgvxhhb180wa6sx8d9"], "id": "tender:01JV5JGYXZHJFT1JM6NBBESBF7",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 6280 - 9590 Allpoints Parkway, Plainfield, IN 46168",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "675100",
            "origin": "Tyson Foods: 4114 Mint Way, Dallas, TX 75237",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "906001222",
            "specialInstructions": null, "stops": [{
                "address": "4114 Mint Way, Dallas, TX 75237",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "9590 Allpoints Parkway, Plainfield, IN 46168",
                "name": "WM# 6280",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$2,100",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:10.122Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:hrhblpwq2r5z3p0btbnj"], "id": "tender:01JV5JGYNZH1Q1VB9E6JVHM1DB",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Coyote",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7078 - 26453 S Walton Dr, Elwood, IL 60421",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "690022",
            "origin": "Tyson Foods: 1785 Interplex Cir, Vicksburg, MS 39183",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "189666",
            "specialInstructions": null, "stops": [{
                "address": "1785 Interplex Cir, Vicksburg, MS 39183",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "26453 S Walton Dr, Elwood, IL 60421",
                "name": "WM# 7078",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$1,650",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:09.865Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:vlr6tw085bonqrj0qwq5"], "id": "tender:01JV5JGYFH44VZ512XMN19FGFT",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 3930 - 201 McLinden Rd, Minooka, IL 60447",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "680921",
            "origin": "Tyson Foods: 514 Industrial Park Blvd, Dawson, GA 39842",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "76X23",
            "specialInstructions": null, "stops": [{
                "address": "514 Industrial Park Blvd, Dawson, GA 39842",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "201 McLinden Rd, Minooka, IL 60447",
                "name": "WM# 3930",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$1,900",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:09.667Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:pg69gxy5hyjoiu1grzfk"], "id": "tender:01JV5JGY8Z2YBHKBTDC836W2FB",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7024 - 23769 Mathew Rd., Sterling, IL 61081",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "680956",
            "origin": "Arctic Hormel - 4139 Roosevelt Rd, Saint Cloud, MN 56301",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "906647341",
            "specialInstructions": null, "stops": [{
                "address": "4139 Roosevelt Rd, Saint Cloud, MN 56301",
                "name": "Arctic Hormel",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "23769 Mathew Rd., Sterling, IL 61081",
                "name": "WM# 7024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$2,850.00",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:09.448Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:esetdg7id1t19u2f8rzo"], "id": "tender:01JV5JGY16FSEGZPXTS7Y5NZ79",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Coyote",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 6048 - 3160 Highway 743, Opelousas, LA 70570",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "670299",
            "origin": "Tyson Foods - 700 Wheeler St., Vernon, TX 76384",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "1S0006",
            "specialInstructions": null, "stops": [{
                "address": "700 Wheeler St., Vernon, TX 76384",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "3160 Highway 743, Opelousas, LA 70570",
                "name": "WM# 6048",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$4,365.00",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:09.202Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:m2owipawqgdijtoi87ja"], "id": "tender:01JV5JGXV00Q26D0RVG6JW25RW",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7045 6000 Walton Way, Mt. Crawford, VA 22841",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "670823",
            "origin": "Tyson Foods - 1009 Richland Dr, Storm Lake, IA 50588",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "7X20043",
            "specialInstructions": null, "stops": [{
                "address": "1009 Richland Dr, Storm Lake, IA 50588",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "6000 Walton Way, Mt. Crawford, VA 22841",
                "name": "WM# 7045",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$3,785.00",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:09.005Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:0qyucnhpzyykqnjq7vz0"], "id": "tender:01JV5JGXK54T26VGN60PMHRCC8",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7039 115 Distribution Way, Beaver Dam, WI 53916",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "689010",
            "origin": "Tyson Foods: 501 N. Elk Run Rd., Waterloo, IA 50703",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "308700",
            "specialInstructions": null, "stops": [{
                "address": "501 N. Elk Run Rd., Waterloo, IA 50703",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "115 Distribution Way, Beaver Dam, WI 53916",
                "name": "WM#7039",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$2,450.00",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:39:08.757Z",
        "email": "received_email:01JV5JG65CCRFF1W24DE1GSHFC",
        "events": [], "history": ["⟨tender.log⟩:hbzto8eyg2ycnivc13ji"], "id": "tender:01JV5JGXC1T5540ARBDF09KV1C",
        "machine_analysis": "ai_analysis:01JV5JGX26CKD10S7200XF3R4A",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": null, "notes": null, "orderNumbers": "680933",
            "origin": "Tyson Foods: 5505 Jefferson Pkwy, Pine Bluff, AR 71602",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "906607801",
            "specialInstructions": null, "stops": [{
                "address": "5505 Jefferson Pkwy, Pine Bluff, AR 71602",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$1,700.00",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:07:50.176Z",
        "email": "received_email:01JV5GPTH0X72Q3ZM30N5GZH8E",
        "events": [], "history": ["⟨tender.log⟩:z0u8yweykgjhptsc47mr"], "id": "tender:01JV5GQJR5X7E3TV08WNYTX385",
        "machine_analysis": "ai_analysis:01JV5GQH41B7A2AADR8TSJC08K",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933, WM#6024 Southwest Blvd, Grove City, OH 43123, WM#6043 512 Jonesville Rd, Coldwater, MI 49036",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,700",
            "notes": null, "orderNumbers": "765004",
            "origin": "Tyson Foods: 13076 Renfro Cir, Omaha, NE 68137, Tyson Foods: 1200 Industrial Pkwy, Madison, NE 68748",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR1199638, 00145, 00132, 00198, 00177, FR4570173, FR937402, SZ09999, SX458",
            "specialInstructions": null, "stops": [{
                "address": "13076 Renfro Cir, Omaha, NE 68137",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "1200 Industrial Pkwy, Madison, NE 68748",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "4",
                "time": null
            }, {
                "address": "512 Jonesville Rd, Coldwater, MI 49036",
                "name": "WM#6043",
                "notes": null, "reason": "Delivery",
                "stopNumber": "5",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$2,700",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:07:49.875Z",
        "email": "received_email:01JV5GPTH0X72Q3ZM30N5GZH8E",
        "events": [], "history": ["⟨tender.log⟩:y923mdbtfnppxpaw92sd"], "id": "tender:01JV5GQJHVHN4WNNF3E15WCM94",
        "machine_analysis": "ai_analysis:01JV5GQH41B7A2AADR8TSJC08K",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Coyote",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM #7015 - 6040 Gateway Court, Grove City, OH 43123",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675110",
            "origin": "Tyson Foods: 501 N. Elk Run Rd., Waterloo, IA 50703",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "9000127497",
            "specialInstructions": null, "stops": [{
                "address": "501 N. Elk Run Rd., Waterloo, IA 50703",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "6040 Gateway Court, Grove City, OH 43123",
                "name": "WM #7015",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$1,500",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:07:49.667Z",
        "email": "received_email:01JV5GPTH0X72Q3ZM30N5GZH8E",
        "events": [], "history": ["⟨tender.log⟩:mw6jtqnudojvpawj9lv5"], "id": "tender:01JV5GQJABV14RM0XNZV9D5FBR",
        "machine_analysis": "ai_analysis:01JV5GQH41B7A2AADR8TSJC08K",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7024 - 23769 Mathew Rd., Sterling, IL 61081, Jewel (Frozen) - 2200 N 17th Ave BLDG C, Melrose Park, IL 60610",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$1,700",
            "notes": null, "orderNumbers": "675307",
            "origin": "Tyson Foods: 5505 Jefferson Pkwy, Pine Bluff, AR 71602",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "0Z100458, S2671, 9000402678",
            "specialInstructions": null, "stops": [{
                "address": "5505 Jefferson Pkwy, Pine Bluff, AR 71602",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "23769 Mathew Rd., Sterling, IL 61081",
                "name": "WM# 7024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "2200 N 17th Ave BLDG C, Melrose Park, IL 60610",
                "name": "Jewel (Frozen)",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$1,700",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:07:49.418Z",
        "email": "received_email:01JV5GPTH0X72Q3ZM30N5GZH8E",
        "events": [], "history": ["⟨tender.log⟩:qc0f6zghkpr7liksctcw"], "id": "tender:01JV5GQJ37Y4BRDNEM6HQGGQME",
        "machine_analysis": "ai_analysis:01JV5GQH41B7A2AADR8TSJC08K",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# IND3 - 5259 W 500 N, McCordsville, IN 46055",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675281",
            "origin": "Tyson Foods: 514 Industrial Park Blvd, Dawson, GA 39842",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR0Z1207",
            "specialInstructions": null, "stops": [{
                "address": "514 Industrial Park Blvd, Dawson, GA 39842",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "5259 W 500 N, McCordsville, IN 46055",
                "name": "WM# IND3",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$1,500",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:07:49.189Z",
        "email": "received_email:01JV5GPTH0X72Q3ZM30N5GZH8E",
        "events": [], "history": ["⟨tender.log⟩:b1hfaai5cnwtr3zo4uem"], "id": "tender:01JV5GQHTY6991F576ZBGBQNQG",
        "machine_analysis": "ai_analysis:01JV5GQH41B7A2AADR8TSJC08K",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "TQL",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 3930 - 201 McLinden Rd, Minooka, IL 60447, WM# 7078 - 26453 S Walton Dr, Elwood, IL 60421, WM #7204 - 23769 Mathew Road, Sterling, IL 61081",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$2,600",
            "notes": null, "orderNumbers": "675337",
            "origin": "Tyson Foods: 4114 Mint Way, Dallas, TX 75237, Tyson Foods - 3900 Meacham BLVD, Haltom City, TX 76117",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X709112, SX200032, 0951036",
            "specialInstructions": null, "stops": [{
                "address": "4114 Mint Way, Dallas, TX 75237",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "3900 Meacham BLVD, Haltom City, TX 76117",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "201 McLinden Rd, Minooka, IL 60447",
                "name": "WM# 3930",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }, {
                "address": "26453 S Walton Dr, Elwood, IL 60421",
                "name": "WM# 7078",
                "notes": null, "reason": "Delivery",
                "stopNumber": "4",
                "time": null
            }, {
                "address": "23769 Mathew Road, Sterling, IL 61081",
                "name": "WM #7204",
                "notes": null, "reason": "Delivery",
                "stopNumber": "5",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$2,600",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:07:48.929Z",
        "email": "received_email:01JV5GPTH0X72Q3ZM30N5GZH8E",
        "events": [], "history": ["⟨tender.log⟩:wn2xsgwbl7h8h0clkhhk"], "id": "tender:01JV5GQHM9Z3PQ0EHP66VA2FVY",
        "machine_analysis": "ai_analysis:01JV5GQH41B7A2AADR8TSJC08K",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933, WM#6024 Southwest Blvd, Grove City, OH 43123",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,200",
            "notes": null, "orderNumbers": "675101, 675927",
            "origin": "Arctic Hormel - 4139 Roosevelt Rd, Saint Cloud, MN 56301",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "098264, 098145, 098721, 098043, 09665, FR0S765",
            "specialInstructions": null, "stops": [{
                "address": "4139 Roosevelt Rd, Saint Cloud, MN 56301",
                "name": "Arctic Hormel",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$2,200",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T19:07:48.713Z",
        "email": "received_email:01JV5GPTH0X72Q3ZM30N5GZH8E",
        "events": [], "history": ["⟨tender.log⟩:2lchgy3ykhy7lbturkpn"], "id": "tender:01JV5GQHCRXD8FKTKXG75Y9RJ4",
        "machine_analysis": "ai_analysis:01JV5GQH41B7A2AADR8TSJC08K",
        "messageId": "msg-a:r-1825948258070707099",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7039 115 Distribution Way, Beaver Dam, WI 53916",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,820",
            "notes": null, "orderNumbers": "675002",
            "origin": "Tyson Foods: 1816 AR-113, Morrilton, AR 72110",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X70982, FR100383",
            "specialInstructions": null, "stops": [{
                "address": "1816 AR-113, Morrilton, AR 72110",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "115 Distribution Way, Beaver Dam, WI 53916",
                "name": "WM#7039",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$1,820",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:32:22.587Z",
        "email": "received_email:01JV5EPDQZMNHBVWBEQ0ZDWWTM",
        "events": [], "history": ["⟨tender.log⟩:5rdtteyqmm7sorvi7xie"], "id": "tender:01JV5EPN3DMWD06NB1YYXYPQ4X",
        "machine_analysis": "ai_analysis:01JV5EPMW491PJR04S2KNMMR43",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "OTR TRANSPORTATION, INC (OTII)",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "Wal-Mart Stores, Inc. 6082, 3300 Sterling Hurley Ind, Clarksville, AR 72830",
            "distance": "336 miles",
            "equipment": "V53",
            "fuel": null, "isTender": true, "lineHaul": "945.00",
            "notes": null, "orderNumbers": "SO278117,SO278128,SO278139",
            "origin": "TEX Evans Warehouse, 701 Parkway Drive, Grand Prairie, TX 75051",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "53202367LN",
            "specialInstructions": "Preset pick up appt 1/13 @ 1500. Do not deliver early! Preset Delivery 01/14 @1545 (CONF# 31184342) Do not deliver early. ####PORK PRODUCT####53 FT DRY VAN###NO BOXTRUCKS###",
            "stops": [{
                "address": "TEX Evans Warehouse, 701 Parkway Drive, Grand Prairie, TX 75051",
                "name": null, "notes": null, "reason": "pickup",
                "stopNumber": "1",
                "time": "2025-01-13T15:00:00"
            }, {
                "address": "Wal-Mart Stores, Inc. 6082, 3300 Sterling Hurley Ind, Clarksville, AR 72830",
                "name": null, "notes": null, "reason": "drop",
                "stopNumber": "2",
                "time": "2025-01-14T15:45:00"
            }], "tempControl": "None",
            "temperature": null, "tenderDate": "2025-01-06",
            "totalCost": "945.00",
            "weight": "9,807 lb"
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:27:21.233Z",
        "email": "received_email:01JV5ECRANEVKNHM18903NFC4N",
        "events": [], "history": ["⟨tender.log⟩:eqshvrc5q1fomb7djoux"], "id": "tender:01JV5EDESSW08D1FZ1AXJS5SHB",
        "machine_analysis": "ai_analysis:01JV5EDD2T4VE433VX3M8JAY4K",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,700",
            "notes": null, "orderNumbers": "765004",
            "origin": "Tyson Foods: 13076 Renfro Cir, Omaha, NE 68137",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR1199638, 00145, 00132, 00198, 00177, FR4570173, FR937402, SZ09999, SX458",
            "specialInstructions": null, "stops": [{
                "address": "13076 Renfro Cir, Omaha, NE 68137",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "1200 Industrial Pkwy, Madison, NE 68748",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "3",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "4",
                "time": null
            }, {
                "address": "512 Jonesville Rd, Coldwater, MI 49036",
                "name": "WM#6043",
                "notes": null, "reason": "Delivery",
                "stopNumber": "5",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:27:20.986Z",
        "email": "received_email:01JV5ECRANEVKNHM18903NFC4N",
        "events": [], "history": ["⟨tender.log⟩:qkot3ga34rh2huxt8pc8"], "id": "tender:01JV5EDEK4Q3HTENP7YWFHH8R8",
        "machine_analysis": "ai_analysis:01JV5EDD2T4VE433VX3M8JAY4K",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "Coyote",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM #7015 - 6040 Gateway Court, Grove City, OH 43123",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675110",
            "origin": "Tyson Foods: 501 N. Elk Run Rd., Waterloo, IA 50703",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "9000127497",
            "specialInstructions": null, "stops": [{
                "address": "501 N. Elk Run Rd., Waterloo, IA 50703",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "6040 Gateway Court, Grove City, OH 43123",
                "name": "WM #7015",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:27:20.774Z",
        "email": "received_email:01JV5ECRANEVKNHM18903NFC4N",
        "events": [], "history": ["⟨tender.log⟩:v20kf37na9zefkpmdqdj"], "id": "tender:01JV5EDEBMB3G3W4PM2Y31EMNC",
        "machine_analysis": "ai_analysis:01JV5EDD2T4VE433VX3M8JAY4K",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7024 - 23769 Mathew Rd., Sterling, IL 61081",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$1,700",
            "notes": null, "orderNumbers": "675307",
            "origin": "Tyson Foods: 5505 Jefferson Pkwy, Pine Bluff, AR 71602",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "0Z100458, S2671, 9000402678",
            "specialInstructions": null, "stops": [{
                "address": "5505 Jefferson Pkwy, Pine Bluff, AR 71602",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "23769 Mathew Rd., Sterling, IL 61081",
                "name": "WM# 7024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "2200 N 17th Ave BLDG C, Melrose Park, IL 60610",
                "name": "Jewel (Frozen)",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:27:20.541Z",
        "email": "received_email:01JV5ECRANEVKNHM18903NFC4N",
        "events": [], "history": ["⟨tender.log⟩:hcay47is8qv60izgq5sq"], "id": "tender:01JV5EDE44T8QV2YTTHV43WQZK",
        "machine_analysis": "ai_analysis:01JV5EDD2T4VE433VX3M8JAY4K",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# IND3 - 5259 W 500 N, McCordsville, IN 46055",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675281",
            "origin": "Tyson Foods: 514 Industrial Park Blvd, Dawson, GA 39842",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR0Z1207",
            "specialInstructions": null, "stops": [{
                "address": "514 Industrial Park Blvd, Dawson, GA 39842",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "5259 W 500 N, McCordsville, IN 46055",
                "name": "WM# IND3",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:27:20.294Z",
        "email": "received_email:01JV5ECRANEVKNHM18903NFC4N",
        "events": [], "history": ["⟨tender.log⟩:uy9kt7bljq9yqi0alwkv"], "id": "tender:01JV5EDDWMJJB7MV2BGNP63073",
        "machine_analysis": "ai_analysis:01JV5EDD2T4VE433VX3M8JAY4K",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "TQL",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 3930 - 201 McLinden Rd, Minooka, IL 60447",
            "distance": null, "equipment": null, "fuel": null, "isTender": true, "lineHaul": "$2,600",
            "notes": null, "orderNumbers": "675337",
            "origin": "Tyson Foods: 4114 Mint Way, Dallas, TX 75237",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X709112",
            "specialInstructions": null, "stops": [{
                "address": "4114 Mint Way, Dallas, TX 75237",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "201 McLinden Rd, Minooka, IL 60447",
                "name": "WM# 3930",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "26453 S Walton Dr, Elwood, IL 60421",
                "name": "WM# 7078",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }, {
                "address": "23769 Mathew Road, Sterling, IL 61081",
                "name": "WM #7204",
                "notes": null, "reason": "Delivery",
                "stopNumber": "4",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:27:20.053Z",
        "email": "received_email:01JV5ECRANEVKNHM18903NFC4N",
        "events": [], "history": ["⟨tender.log⟩:kv18jhsta20merqyatc5"], "id": "tender:01JV5EDDKVYX8J5S2RW03W5QG6",
        "machine_analysis": "ai_analysis:01JV5EDD2T4VE433VX3M8JAY4K",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,200",
            "notes": null, "orderNumbers": "675101, 675927",
            "origin": "Arctic Hormel - 4139 Roosevelt Rd, Saint Cloud, MN 56301",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "098264, 098145, 098721, 098043, 09665, FR0S765",
            "specialInstructions": null, "stops": [{
                "address": "4139 Roosevelt Rd, Saint Cloud, MN 56301",
                "name": "Arctic Hormel",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }, {
                "address": "512 Jonesville Rd, Coldwater, MI 49036",
                "name": "WM#6043",
                "notes": null, "reason": "Delivery",
                "stopNumber": "4",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T18:27:19.778Z",
        "email": "received_email:01JV5ECRANEVKNHM18903NFC4N",
        "events": [], "history": ["⟨tender.log⟩:17et6h8obmrbc3nb4iln"], "id": "tender:01JV5EDDBNTVS9MM1YCV0R9ECH",
        "machine_analysis": "ai_analysis:01JV5EDD2T4VE433VX3M8JAY4K",
        "messageId": "msg-a:r-6083389073973440710",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7039 115 Distribution Way, Beaver Dam, WI 53916",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,820",
            "notes": null, "orderNumbers": "675002",
            "origin": "Tyson Foods: 1816 AR-113, Morrilton, AR 72110",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X70982, FR100383",
            "specialInstructions": null, "stops": [{
                "address": "1816 AR-113, Morrilton, AR 72110",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "115 Distribution Way, Beaver Dam, WI 53916",
                "name": "WM#7039",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": null, "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T17:00:13.633Z",
        "email": "received_email:01JV594N21H2EE9HXF78BR1NMX",
        "events": [], "history": ["⟨tender.log⟩:065cuvuad86itoxh46gi"], "id": "tender:01JV59DXQ8AV5PDRQQ4GC2TQ7J",
        "machine_analysis": "ai_analysis:01JV599JM7HNC85488B26DAPFP",
        "messageId": "",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933, WM#6024 Southwest Blvd, Grove City, OH 43123, WM#6043 512 Jonesville Rd, Coldwater, MI 49036",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,700",
            "notes": null, "orderNumbers": "765004",
            "origin": "Tyson Foods: 13076 Renfro Cir, Omaha, NE 68137, Tyson Foods: 1200 Industrial Pkwy, Madison, NE 68748",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR1199638, 00145, 00132, 00198, 00177, FR4570173, FR937402, SZ09999, SX458",
            "specialInstructions": null, "stops": [{
                "address": "13076 Renfro Cir, Omaha, NE 68137",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "1200 Industrial Pkwy, Madison, NE 68748",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "4",
                "time": null
            }, {
                "address": "512 Jonesville Rd, Coldwater, MI 49036",
                "name": "WM#6043",
                "notes": null, "reason": "Delivery",
                "stopNumber": "5",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$2,700",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T17:00:13.302Z",
        "email": "received_email:01JV594N21H2EE9HXF78BR1NMX",
        "events": [], "history": ["⟨tender.log⟩:3kb3srp3bdfa4nh1fozr"], "id": "tender:01JV59DXCPXEW8TTFZKEH6VS83",
        "machine_analysis": "ai_analysis:01JV599JM7HNC85488B26DAPFP",
        "messageId": "",
        "result": {
            "carrier": "Coyote",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM #7015 - 6040 Gateway Court, Grove City, OH 43123",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675110",
            "origin": "Tyson Foods: 501 N. Elk Run Rd., Waterloo, IA 50703",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "9000127497",
            "specialInstructions": null, "stops": [{
                "address": "501 N. Elk Run Rd., Waterloo, IA 50703",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "6040 Gateway Court, Grove City, OH 43123",
                "name": "WM #7015",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$1,500",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T17:00:12.967Z",
        "email": "received_email:01JV594N21H2EE9HXF78BR1NMX",
        "events": [], "history": ["⟨tender.log⟩:sjmq2cvbraqbwomu2c8c"], "id": "tender:01JV59DX21GC7Y85JMTYZ6V86E",
        "machine_analysis": "ai_analysis:01JV599JM7HNC85488B26DAPFP",
        "messageId": "",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 7024 - 23769 Mathew Rd., Sterling, IL 61081, Jewel (Frozen) - 2200 N 17th Ave BLDG C, Melrose Park, IL 60610",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,700",
            "notes": null, "orderNumbers": "675307",
            "origin": "Tyson Foods: 5505 Jefferson Pkwy, Pine Bluff, AR 71602",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "0Z100458, S2671, 9000402678",
            "specialInstructions": null, "stops": [{
                "address": "5505 Jefferson Pkwy, Pine Bluff, AR 71602",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "23769 Mathew Rd., Sterling, IL 61081",
                "name": "WM# 7024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "2200 N 17th Ave BLDG C, Melrose Park, IL 60610",
                "name": "Jewel (Frozen)",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$1,700",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T17:00:12.630Z",
        "email": "received_email:01JV594N21H2EE9HXF78BR1NMX",
        "events": [], "history": ["⟨tender.log⟩:lu0fp29d2l719gczarcp"], "id": "tender:01JV59DWQGYGH5GGQ8C1AAK1N6",
        "machine_analysis": "ai_analysis:01JV599JM7HNC85488B26DAPFP",
        "messageId": "",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# IND3 - 5259 W 500 N, McCordsville, IN 46055",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,500",
            "notes": null, "orderNumbers": "675281",
            "origin": "Tyson Foods: 514 Industrial Park Blvd, Dawson, GA 39842",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "FR0Z1207",
            "specialInstructions": null, "stops": [{
                "address": "514 Industrial Park Blvd, Dawson, GA 39842",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "5259 W 500 N, McCordsville, IN 46055",
                "name": "WM# IND3",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$1,500",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T17:00:10.261Z",
        "email": "received_email:01JV594N21H2EE9HXF78BR1NMX",
        "events": [], "history": ["⟨tender.log⟩:ekl3u6m3p14c64kvwaas"], "id": "tender:01JV59DSH2DN35B1M54FSDVJJN",
        "machine_analysis": "ai_analysis:01JV599JM7HNC85488B26DAPFP",
        "messageId": "",
        "result": {
            "carrier": "TQL",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM# 3930 - 201 McLinden Rd, Minooka, IL 60447, WM# 7078 - 26453 S Walton Dr, Elwood, IL 60421, WM #7204 - 23769 Mathew Road, Sterling, IL 61081",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,600",
            "notes": null, "orderNumbers": "675337",
            "origin": "Tyson Foods: 4114 Mint Way, Dallas, TX 75237, Tyson Foods - 3900 Meacham BLVD, Haltom City, TX 76117",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X709112, SX200032, 0951036",
            "specialInstructions": null, "stops": [{
                "address": "4114 Mint Way, Dallas, TX 75237",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "3900 Meacham BLVD, Haltom City, TX 76117",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "201 McLinden Rd, Minooka, IL 60447",
                "name": "WM# 3930",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }, {
                "address": "26453 S Walton Dr, Elwood, IL 60421",
                "name": "WM# 7078",
                "notes": null, "reason": "Delivery",
                "stopNumber": "4",
                "time": null
            }, {
                "address": "23769 Mathew Road, Sterling, IL 61081",
                "name": "WM #7204",
                "notes": null, "reason": "Delivery",
                "stopNumber": "5",
                "time": null
            }], "tempControl": "Refrigerated",
            "temperature": null, "tenderDate": null, "totalCost": "$2,600",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T17:00:06.212Z",
        "email": "received_email:01JV594N21H2EE9HXF78BR1NMX",
        "events": [], "history": ["⟨tender.log⟩:fru5gk4cgawyab86qgjm"], "id": "tender:01JV59DASM6GN2R6F30MJJ1X1V",
        "machine_analysis": "ai_analysis:01JV599JM7HNC85488B26DAPFP",
        "messageId": "",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7055 100 Fischer Pkwy, Gas City, IN 46933, WM#6024 Southwest Blvd, Grove City, OH 43123",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$2,200",
            "notes": null, "orderNumbers": "675101, 675927",
            "origin": "Arctic Hormel - 4139 Roosevelt Rd, Saint Cloud, MN 56301",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "098264, 098145, 098721, 098043, 09665, FR0S765",
            "specialInstructions": null, "stops": [{
                "address": "4139 Roosevelt Rd, Saint Cloud, MN 56301",
                "name": "Arctic Hormel",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "100 Fischer Pkwy, Gas City, IN 46933",
                "name": "WM#7055",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }, {
                "address": "Southwest Blvd, Grove City, OH 43123",
                "name": "WM#6024",
                "notes": null, "reason": "Delivery",
                "stopNumber": "3",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$2,200",
            "weight": null
        }, "threadId": ""
    }, {
        "createdOn": "2025-05-13T16:59:48.717Z",
        "email": "received_email:01JV594N21H2EE9HXF78BR1NMX",
        "events": [], "history": ["⟨tender.log⟩:9usb2p051lazrunbyb8e"], "id": "tender:01JV59D30V1MBWACNNKTN63F9Q",
        "machine_analysis": "ai_analysis:01JV599JM7HNC85488B26DAPFP",
        "messageId": "",
        "result": {
            "carrier": "Hyperlux",
            "deliveryAppointment": null, "deliveryDate": null, "destination": "WM#7039 115 Distribution Way, Beaver Dam, WI 53916",
            "distance": null, "equipment": "R53",
            "fuel": null, "isTender": true, "lineHaul": "$1,820",
            "notes": null, "orderNumbers": "675002",
            "origin": "Tyson Foods: 1816 AR-113, Morrilton, AR 72110",
            "pickupAppointment": null, "pickupDate": null, "referenceNumber": "X70982, FR100383",
            "specialInstructions": null, "stops": [{
                "address": "1816 AR-113, Morrilton, AR 72110",
                "name": "Tyson Foods",
                "notes": null, "reason": "Pick Up",
                "stopNumber": "1",
                "time": null
            }, {
                "address": "115 Distribution Way, Beaver Dam, WI 53916",
                "name": "WM#7039",
                "notes": null, "reason": "Delivery",
                "stopNumber": "2",
                "time": null
            }], "tempControl": "Frozen",
            "temperature": "-10",
            "tenderDate": null, "totalCost": "$1,820",
            "weight": null
        }, "threadId": ""
    }]
};
