import { ImagePickerAsset } from "expo-image-picker";
import { useEffect, useState } from "react";
import { View, Pressable, Image, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { imageSelector } from "../../services/imagesSelector";
import { placeholderImage } from "../../utils/placeholderImage";
import { styles } from "./styles";
import * as mobilenet from "@tensorflow-models/mobilenet"
import { Button } from "../../components/Button";
import * as tensorflow from "@tensorflow/tfjs"
import * as FileSystem from "expo-file-system"
import {useSafeAreaInsets} from "react-native-safe-area-context"
import { decodeJpeg } from "@tensorflow/tfjs-react-native"
import RNFS from 'react-native-fs';
import { Classification } from "../../components/Classification";
import { CLASSIFICATION } from "../../DTO/CLASSIFICATION_DTO";
import { theme } from "../../styles/theme/theme";
import { Text } from "../../components/Text";
export function Home() {
    const [result, setResults] = useState<CLASSIFICATION[]>([])
    const [isGuestingImage, setIsGuestingImage] = useState(false)
    const [selectedImage, setSelectedImage] = useState<ImagePickerAsset | null>(null);
    const [isPickingImage, setIsPickingImage] = useState(false)
    const [imageDimension, setImageDimensions] = useState({
        width: 1,
        height: 1,
    })
    const insets = useSafeAreaInsets()

    const aspectRadio = imageDimension.width / imageDimension.height
    const aspectRadioFormatted = aspectRadio < 0.7 ? 0.7 : aspectRadio

    async function calculateImageAspectRatio(imageURI: string) {
        let imageWidth = 1
        let imageHeight = 1

        await Image.getSize(imageURI, (width, height) => {
            imageWidth = width
            imageHeight = height
        })

        setImageDimensions({
            height: imageHeight,
            width: imageWidth
        })

        console.log("image Width  =>" + imageWidth + "image Height =>" + imageHeight, "image aspect ratio =>" + imageWidth / imageHeight)




    }

    async function handleSelectImage() {
        setIsPickingImage(true)
        try {
            const results = await imageSelector({
                base64: true,
            })
            if (results === null) return
            const image = results[0]

            setSelectedImage(image)


        } catch (error) {
            console.error(error)
        }
        finally {
            setIsPickingImage(false)
        }

    }

    async function imageClassification(image: ImagePickerAsset) {



    }

    useEffect(() => {
        calculateImageAspectRatio(selectedImage?.uri ?? placeholderImage)
        if (selectedImage) {
            imageClassification(selectedImage)
        }
    }, [selectedImage])

    return (
        <View style={[styles.container , { paddingTop: insets.top + 8, paddingBottom: insets.bottom + 20 }]}>

            <Pressable onPress={handleSelectImage}>
                <Image

                    style={[styles.image, {
                        aspectRatio: aspectRadioFormatted
                    }]}
                    source={{
                        uri: selectedImage?.uri ?? placeholderImage
                    }}
                />
            </Pressable>
            {
                isGuestingImage && (
                    <View style={styles.guestingImageLoader}>
                        <Text fontSize="lg">
                            guesting
                        </Text>
                        <ActivityIndicator size={"large"} color={theme.colors.purple[500]} />
                    </View>
                )
            }
            {
                isGuestingImage === false && (
                    <FlatList
                        contentContainerStyle={{
                            flex: 1
                        }}
                        data={result}

                        keyExtractor={(item,) => item.className}
                        renderItem={({ item, index }) => (
                            <Classification
                                className={item.className}
                                probability={item.probability}
                                position={index + 1}
                            />
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}

                    />

                )
            }



            <Button
                loading={isPickingImage}
                onPress={handleSelectImage}
                textFontSize="lg"
            >
                Select a image
            </Button>
        </View>
    );
}