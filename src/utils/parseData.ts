import { Match, MatchDay, MatchTime } from "../types/match"

/*
   Parse date to "weekday dd/mm"
*/
export const parseDate = (matchDay: MatchDay) => {
   let day: string = matchDay.day.toString()

   if (matchDay.day <= 10) {
      day = "0" + matchDay.day
   }
   
   let month: string = matchDay.month.toString()
   
   if (matchDay.month <= 10) {
      month = "0" + matchDay.month
   }
   
   return matchDay.weekday + " " + day + "/" + month
}

/*
   Parse palce if undefined"
*/
export const parsePlace = (match: Match) => {
   if (match.place === undefined) {
      return "A definir"
   }
   return match.place
}

/*
   Parse time to "hh:mm hs"
*/
export const parseTime = (time: MatchTime) => {
   let hour: string = time.hour.toString()
   let minute: string = time.minute.toString()
   
   if(time.hour <= 10 && time.hour > 0) {
      hour = "0" + time.hour
   }

   hour = time.hour === 0 ? "00" : hour
   
   if(time.minute <= 10 && time.minute > 0) {
      minute = "0" + time.minute
   }
   
   minute = time.minute === 0 ? "00" : minute

   return hour + ":" + minute + "hs"
}