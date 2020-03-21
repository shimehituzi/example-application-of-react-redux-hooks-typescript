type Data = {
   flag: boolean
}

export type State = {
  data: Data
}

export const initialState: State = {
  data: {
    flag: false
  }
}
