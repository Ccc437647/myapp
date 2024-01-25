import { Button as TaroButton } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function Button(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroButton {...props} style={tw`${props.altClassName}`}>{props.children}</TaroButton> :
            <TaroButton {...props} className={props.altClassName}>{props.children}</TaroButton>
    )
}
