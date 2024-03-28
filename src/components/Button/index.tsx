import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { Text } from '../Text';
import { FONT_SIZE } from '../../@types/fontSize';

type ButtonProps = PressableProps & {
    children: ReactNode,
    textFontSize?: FONT_SIZE,
    loading?: boolean
}

export function Button({
    style,
    children,
    textFontSize,
    loading = false,
    ...rest
}: ButtonProps) {
    return (
        <Pressable
            disabled={loading}
            style={styles.container}
            {...rest}
        >
            {
                loading && <ActivityIndicator color={"#fff"} />
            }
            {
                !loading && <Text fontSize={textFontSize}>{children}</Text>
            }
        </Pressable>
    );
}