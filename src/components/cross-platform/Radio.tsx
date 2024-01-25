import { Radio as TaroRadio } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function Radio(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroRadio {...props} style={tw`${props.altClassName}`}>{props.children}</TaroRadio> :
            <TaroRadio {...props} className={props.altClassName}>{props.children}</TaroRadio>
    )
}
