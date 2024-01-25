import { ScrollView as TaroScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function ScrollView(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroScrollView {...props} style={tw`${props.altClassName}`}>{props.children}</TaroScrollView> :
            <TaroScrollView {...props} className={props.altClassName}>{props.children}</TaroScrollView>
    )
}
