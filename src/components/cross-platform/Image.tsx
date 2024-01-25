import { Image as TaroImage } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function Image(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroImage {...props} style={tw`${props.altClassName}`}>{props.children}</TaroImage> :
            <TaroImage {...props} className={props.altClassName}>{props.children}</TaroImage>
    )
}
