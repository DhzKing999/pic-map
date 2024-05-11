import { create } from 'zustand'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocationDataType } from '~/types';





interface ModalState
{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useModalStore = create<ModalState>()((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))


interface ILocationModal
{
    coords: LocationDataType | null
    setCoords: (data: any) => void
}

export const useLocationStore = create<ILocationModal>((set) => ({

    coords: null,
    setCoords(data)
    {
        set({ coords: data })
    },
}))