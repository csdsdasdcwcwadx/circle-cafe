export const handleDate = (date: string, isTime: boolean = false, isReverse = false) => {
    const utcDateTime = date;
    const localDateTime = new Date(utcDateTime).toLocaleString('en-US', { timeZone: 'Asia/Taipei', hour12: false });
    if(isTime) return localDateTime.split(',')[1];
    return isReverse? handleReverse(localDateTime.split(',')[0]) : localDateTime.split(',')[0];

    function handleReverse(date: string) {
        const DayandMonth = date.split('/');
        const year = DayandMonth.pop();
        return year + '/' + DayandMonth.join('/')
    }
}

export const handleMonth = (nums: number) => {
    switch(nums) {
        case 1:
            return 'Jan';
        case 2:
            return 'Feb';
        case 3:
            return 'Mar';
        case 4:
            return 'Apr';
        case 5:
            return 'May';
        case 6:
            return 'Jun';
        case 7:
            return 'Jul';
        case 8:
            return 'Aug';
        case 9:
            return 'Sep';
        case 10:
            return 'Oct';
        case 11:
            return 'Nov';
        case 12:
            return 'Dec';
        default:
            return '';
    }
}

// #xfbml=1&version=v19.0&appId=1065861224471609
export const initFacebookSdk = () => {
    (function(d, debug){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
        if(ref.parentNode) ref.parentNode.insertBefore(js, ref);
    }(document, false));
    // window.FB.XFBML.parse();
    return new Promise<HTMLElement | null>((resolve, reject) => {
        // 正確順序 : dom 引入sdk、生成fb-root、插入我要的按鈕
        // 當前順序 : dom 引入sdk、插入按鈕、生成fb-root
        if(!window.fbAsyncInit) {
            window.fbAsyncInit = () => {
                window.FB.init({
                    appId: '1065861224471609',
                    cookie: true,
                    xfbml: true,
                    version: 'v19.0'
                })
            }
        } else {
            if(window.FB && window.FB.init) {
                window.FB.init({
                    appId: '1065861224471609',
                    cookie: true,
                    xfbml: true,
                    version: 'v19.0'
                })
            }
        }
        const root = document.getElementById('fb-root');
        resolve(root);
    })
}