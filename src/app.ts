import { Component, PropsWithChildren, useEffect } from 'react'
import BootSplash from "react-native-bootsplash";
import './app.scss'


export default function App(props) {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  return props.children
}
