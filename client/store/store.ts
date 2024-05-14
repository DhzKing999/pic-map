import { create } from 'zustand'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageType, LocationDataType } from '~/types';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

interface ModalState
{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

interface SelectedImageType
{
    selectedImage: ImageType | null
    setSelectedImage: (d: ImageType | null) => void
}


export const useModalStore = create<ModalState>()((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))
export const useSelectedImageStore = create<SelectedImageType>()((set) => ({
    selectedImage: null,
    setSelectedImage: (d) => set({ selectedImage: d }),
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

interface BottomSheetStore
{
    bottomSheetRef: React.RefObject<BottomSheet> | null;
    setBottomSheetRef: (ref: React.RefObject<BottomSheet>) => void;
}

export const useBottomSheetStore = create<BottomSheetStore>((set) => ({
    bottomSheetRef: { current: null },
    setBottomSheetRef: (ref) => set({ bottomSheetRef: ref }),
}));