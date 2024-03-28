'use client';

import { memo, useEffect, useState } from "react";
import { initFacebookSdk } from "@/utils";

interface I_props {
    link?: string;
}


function FBLikeButton({link}: I_props) {
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        initFacebookSdk().then(root => {
            setIsLayoutReady(true);
        })
    }, [])

    return (
        // <div></div>
        isLayoutReady && <div className="fb-like" data-href={link || 'https://www.facebook.com/search/top?q=%E6%8B%BE%E6%97%85%E3%80%82%E9%A3%9F%20circle%20cafe%20%26%20meal'} data-width="280px" data-layout="" data-action="" data-size="" data-share="true"></div>
    )
}

export default memo(FBLikeButton);