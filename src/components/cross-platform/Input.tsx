import { Input as TaroInput } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function Input(props) {
    // console.log('input的props', props);

    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroInput {...props} style={tw`${props.altClassName}`}>{props.children}</TaroInput> :
            <TaroInput {...props} className={props.altClassName}>{props.children}</TaroInput>
    )
}
