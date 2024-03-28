import * as ImagePicker from "expo-image-picker";

export async function imageSelector(options?: ImagePicker.ImagePickerOptions) {
    const imagesResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      exif:false,
    
      quality: .7,
      ...options
    })

    if(imagesResult.canceled) return null
    
    return imagesResult.assets
}
