import { View as TaroView } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function View(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroView {...props} style={tw`${props.altClassName}`}>{props.children}</TaroView> :
            <TaroView {...props} className={props.altClassName}>{props.children}</TaroView>
    )
}
