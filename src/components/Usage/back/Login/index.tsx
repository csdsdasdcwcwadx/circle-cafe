import { memo, useEffect, useRef } from "react"
import styles from './styles.module.scss';
import InputBar, { E_RegexType } from "../../../Modules/InputBar";
import { api_login } from "@/apisource/apiname";

interface I_props {
    isLogin: boolean;
    setIsLogin: Function;
    handleLogin: Function;
}

function Login({isLogin, setIsLogin, handleLogin}: I_props) {
    const inputRefs = {
        account: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null),
    }

    useEffect(() => {
        (async function() {
            try {
                const data = await api_login();
                if(data?.status) {
                    setIsLogin(true);
                    if(data.accessToken) window.localStorage.setItem('accessToken', data.accessToken);
                }
                else {
                    window.localStorage.removeItem('accessToken');
                    window.localStorage.removeItem('refreshToken');
                }
            }catch(e) {
                console.error(e);
            }
        })()
    }, [setIsLogin])

    const setLogin = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const {account, password} = inputRefs;
            await handleLogin(account.current?.value, password.current?.value);

        } else alert(error[0].textContent)
    }

    return (
        <div className={styles.login}>
            <InputBar
                title="帳號"
                placeholder="請輸入帳號"
                type={E_RegexType.NAME}
                maxlength={255}
                ref={inputRefs.account}
            />
            <InputBar
                title="密碼"
                placeholder="請輸入密碼"
                type={E_RegexType.NAME}
                maxlength={255}
                ref={inputRefs.password}
            />
            <button onClick={()=>setLogin()}>登入</button>
        </div>
    )
}

export default memo(Login);