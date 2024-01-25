import { Checkbox as TaroCheckbox } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function Checkbox(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroCheckbox {...props} style={tw`${props.altClassName}`}>{props.children}</TaroCheckbox> :
            <TaroCheckbox {...props} className={props.altClassName}>{props.children}</TaroCheckbox>
    )
}
