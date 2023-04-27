import { useEffect, useState } from "react";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";
import Styles from './index.module.scss';
import axios from 'axios';
import { useStore } from "../../store.js";



function AuthComponent() {
    const state = useStore((state) => state);

    useEffect(() => {
        // //   http://127.0.0.1:3000/auth
        // // {{base_url}}/api/auth/csrf
        // const fetchData = async () => {
        //     const result = await axios(
        //         'http://127.0.0.1:3000/api/auth/csrf',
        //     );
        //     // setData(result.data);
        //     console.log("result", result);
        // };

        // fetchData();
        // state.logIn();
        // console.log("state",state.isLoggedIn);
    }, []);

    const githubClick = () => {
        console.log("github");
        state.logIn();
        console.log("state", state.isLoggedIn);
    }

    const googleClick = () => {
        console.log("google");
    }

    return (
        <div className={Styles.authWrap}>
            <div className={Styles.titleWrap}>
                <img className={Styles.titleImg} src="https://reactjs.org/logo-og.png" alt="Logo" />
                <span className={Styles.title}>Monica</span>
            </div>
            <div className={Styles.signUpWrap}>
                <div className={Styles.githubWrap} onClick={githubClick}>
                    <AiFillGithub className={Styles.githubIcon} /> <span className={Styles.githubText}>使用GitHub注册</span>
                </div>
                <div className={Styles.googleWrap} onClick={googleClick}>
                    <AiFillChrome className={Styles.googleIcon} /> <span className={Styles.googleText}>使用Google注册</span>
                </div>
            </div>
        </div>
    );
}

export default AuthComponent;
