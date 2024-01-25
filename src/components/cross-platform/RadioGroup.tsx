import { RadioGroup as TaroRadioGroup } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function RadioGroup(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroRadioGroup {...props} style={tw`${props.altClassName}`}>{props.children}</TaroRadioGroup> :
            <TaroRadioGroup {...props} className={props.altClassName}>{props.children}</TaroRadioGroup>
    )
}
