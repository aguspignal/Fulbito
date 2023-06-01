import { Match } from "../types/match";

// export const matches: Array<Match> = []

export const matches: Array<Match> = [
   {
      "id": "1",
      "byTeam": true,
      "teamId": "1",
      "createdBy": "1",
      "date": {
         "day": {
            "day": 20,
            "month": 5,
            "weekday": "Sabado"
         },
         "time": {
            "hour": 17,
            "minute": 0
         }
      },
      "place": "Cancha",
      "players": [
         {
            "userId": "1",
            "isTeamA": true
         },
         {
            "userId": "2",
            "isTeamA": false
         }
      ],
      "resultTeamA": 4,
      "resultTeamB": 3,
      "matchType": "F5"
   },
   // {
   //    "id": "2",
   //    "byTeam": true,
   //    "teamId": "2",
   //    "createdBy": "2",
   //    "date": {
   //       "day": {
   //          "day": 19,
   //          "month": 11,
   //          "weekday": "Viernes"
   //       },
   //       "time": {
   //          "hour": 21,
   //          "minute": 0
   //       }
   //    },
   //    "place": "Cancha",
   //    "players": [
   //       {
   //          "userId": "1",
   //          "isTeamA": true
   //       },
   //       {
   //          "userId": "2",
   //          "isTeamA": false
   //       }
   //    ],
   //    "resultTeamA": 1,
   //    "resultTeamB": 2,
   //    "matchType": "F6"
   // },
]