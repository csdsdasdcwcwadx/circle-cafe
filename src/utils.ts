export const handleDate = (date: string, isTime: boolean = false) => {
    const utcDateTime = date;
    const localDateTime = new Date(utcDateTime).toLocaleString('en-US', { timeZone: 'Asia/Taipei', hour12: false });
    if(isTime) return localDateTime.split(',')[1];
    return localDateTime.split(',')[0];
}

// #xfbml=1&version=v19.0&appId=1065861224471609
export const initFacebookSdk = () => {
    (function(d, debug){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
        if(ref.parentNode) ref.parentNode.insertBefore(js, ref);
    }(document, /*debug*/ false));
    // window.FB.XFBML.parse();
    return new Promise<HTMLElement | null>((resolve, reject) => {
        // 正確順序 : dom 引入sdk、生成fb-root、插入我要的按鈕
        // 當前順序 : dom 引入sdk、插入按鈕、生成fb-root
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '1065861224471609',
                cookie: true,
                xfbml: true,
                version: 'v19.0'
            })
        }
        const root = document.getElementById('fb-root');
        resolve(root);
    })
}