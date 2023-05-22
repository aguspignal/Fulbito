export type SignInData = {
   email: string
   password: string
}

export type SignUpData = {
   uid: string
   email: string
   password: string
   username: string
   clubHincha: string
}

export type ResultError = {
   status: boolean
   code: string | null
   title: string | null
}