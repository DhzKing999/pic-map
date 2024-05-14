import { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

export const useModalControls = () =>
{
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleClosePress = () => bottomSheetRef.current?.close();
    const handleOpenPress = () => bottomSheetRef.current?.expand();

    return { bottomSheetRef, handleClosePress, handleOpenPress };
};