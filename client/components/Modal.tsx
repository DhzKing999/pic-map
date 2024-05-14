import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Alert, Modal, Pressable, View, Image } from 'react-native';
import { useModalStore, useSelectedImageStore } from '~/store/store';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useState } from 'react';


const ModalComponent = () =>
{

    const { selectedImage, setSelectedImage } = useSelectedImageStore()
    const data = useModalStore((state) => state);
    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={selectedImage ? true : false}
                onRequestClose={() =>
                {
                    data.onClose();
                }}>
                <View className=' justify-end flex-1 w-full  h-[80%]'>
                    <View className=' bg-white rounded-t-2xl h-[80%] p-5 relative'>

                        <Pressable
                            className=' absolute top-5 right-6 z-20'
                            onPress={() => { setSelectedImage(null) }}>
                            <FontAwesome name='close' size={34} color='black' />
                        </Pressable>
                        <Image
                            className='w-full h-full rounded-md z-10'
                            source={{
                                uri: selectedImage?.url,
                            }} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalComponent

// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Alert, Modal, Pressable, View, Image, StyleSheet, Text } from 'react-native';
// import { useModalStore } from '~/store/store';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { useCallback, useMemo, useRef, useState } from 'react';
// import { Button } from './Button';


// const ModalComponent = ({ url }: { url: string }) =>
// {

//     const [image, setImage] = useState(url)
//     const data = useModalStore((state) => state);
//     const bottomSheetRef = useRef<BottomSheet>(null);
//     const snapPoints = useMemo(() => ["10%", "100%"], []);
//     const handelClosePress = () => bottomSheetRef.current?.close()
//     const handelOpenPress = () => bottomSheetRef.current?.expand()
//     const handleSheetChanges = useCallback((index: number) =>
//     {
//         console.log('handleSheetChanges', index);
//     }, []);
//     return (
//         <View className=' flex flex-1 h-screen w-full absolute bo' >
//             <Button title='GG' onPress={handelClosePress} />
//             <Button title='Open' onPress={handelOpenPress} />
//             <BottomSheet
//                 detached
//                 containerHeight={500}
//                 snapPoints={snapPoints}
//                 ref={bottomSheetRef}
//                 onChange={handleSheetChanges}
//             >
//                 <BottomSheetView >
//                     <Text>Awesome 🎉</Text>
//                 </BottomSheetView>
//             </BottomSheet>
//         </View>
//     );
// };



// export default ModalComponent


