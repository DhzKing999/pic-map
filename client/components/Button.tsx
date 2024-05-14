import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps
{
  onPress: () => void;
  title: string;
  className?: string
}

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title, className }, ref) =>
{
  const styles = {
    button: ` ${className} items-center  bg-secondary rounded-[28px] shadow-md p-4`,
    buttonText: 'text-white text-lg font-semibold text-center',
  };

  return (
    <TouchableOpacity ref={ref} className={styles.button} onPress={onPress}>
      <Text className={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

