import { CheckboxGroup as TaroCheckboxGroup } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function CheckboxGroup(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroCheckboxGroup {...props} style={tw`${props.altClassName}`}>{props.children}</TaroCheckboxGroup> :
            <TaroCheckboxGroup {...props} className={props.altClassName}>{props.children}</TaroCheckboxGroup>
    )
}
