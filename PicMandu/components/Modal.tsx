import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Alert, Modal, Pressable, View, Image } from 'react-native';
import { useModalStore } from '~/store/store';


const ModalComponent = ({ children, url }: { children: React.ReactNode, url: string }) =>
{
    const data = useModalStore((state) => state);
    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={data.isOpen}
                onRequestClose={() =>
                {
                    Alert.alert('Modal has been closed.');
                    data.onClose();
                }}>
                <View className=' justify-end flex-1 w-full  h-[80%]'>
                    <View className=' bg-white rounded-t-2xl h-[80%] p-5 relative'>

                        <Pressable
                            className=' absolute top-5 right-6 z-20'
                            onPress={() => data.onClose()}>
                            <FontAwesome name='close' size={34} color='white' />
                        </Pressable>
                        <Image
                            className='w-full h-full rounded-md z-10'
                            source={{
                                uri: 'https://res.cloudinary.com/dzsl2h59g/image/upload/v1714223392/image_gtla0u.jpg',
                            }} />
                    </View>
                </View>
            </Modal>
            <Pressable
            >
                {children}
            </Pressable>
        </View>
    );
};


export default ModalComponent;