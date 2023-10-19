import { create } from 'zustand'

type User = {
    name: string
    email: string
    picture?: string
}

interface UserStore {
  user: User
  setUser: (data:User) => void
  removeUser: () => void
}

const useUserStore = create<UserStore>((set:any) => ({
  user: {} as User,
  setUser: (data:User) => set(() => ({ user: data})),
  removeUser: () => set({ user: {
    name: '',
    email: '',
  }}),
}))

export const useUser = () => {
  const user = useUserStore((state:UserStore) => state.user)
  const setUser = useUserStore((state:UserStore) => state.setUser)
  const removeUser = useUserStore((state:UserStore) => state.removeUser)

  const setUserInStore = (data:User) => {
    console.log('data', data)
    setUser(data)
  }
  const removeUserFromStore = ()=>{
    removeUser()
  }
  return { user, setUserInStore, removeUserFromStore }
}