import { Form as TaroForm } from '@tarojs/components'
import Taro from '@tarojs/taro';
import tw from 'twrnc'

export function Form(props) {
    const env = Taro.getEnv();
    return (
        env == 'RN' ?
            <TaroForm {...props} style={tw`${props.altClassName}`}>{props.children}</TaroForm> :
            <TaroForm {...props} className={props.altClassName}>{props.children}</TaroForm>
    )
}
