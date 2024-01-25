import { Text as TaroText } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function Text(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroText {...props} style={tw`${props.altClassName}`}>{props.children}</TaroText> :
            <TaroText {...props} className={props.altClassName}>{props.children}</TaroText>
    )

}
