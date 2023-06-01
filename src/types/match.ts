export type WeekDay = "Lunes" | "Martes" | "Miercoles" | "Jueves" | "Viernes" | "Sabado" | "Domingo"

export type MatchType = "F5" | "F6" | "F7" | "F9" | "F11"

export type MatchDay = {
   day: number
   month: number
   weekday: WeekDay
}

export type MatchTime = {
   hour: number
   minute: number
}

export type MatchPlayer = {
   userId: string
   isTeamA: boolean
}

export type Match = {
   id: string
   byTeam?: boolean
   teamId: string
   createdBy: string
   date: {
      day: MatchDay, 
      time: MatchTime
   }
   place: string | undefined
   players: Array<MatchPlayer>
   resultTeamA: number
   resultTeamB: number
   matchType: MatchType
}