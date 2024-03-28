import {
    Text as ReactNativeText,
    TextProps as ReactNativeTextProps,
} from "react-native";

import { FONT_SIZE } from "../../@types/fontSize";
import { theme } from "../../styles/theme/theme";
import { styles } from "./styles";


type TextProps = ReactNativeTextProps & {
    fontSize?: FONT_SIZE;
};

export function Text({ fontSize = "md", style, ...rest }: TextProps) {
    return (
        <ReactNativeText
            style={[styles.text,{fontSize: theme.fontSize[fontSize]},style]}
            {...rest}
        />
    );
}
