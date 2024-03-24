'use client';

import { memo, useEffect, useState } from "react";
import { initFacebookSdk } from "@/utils";

function FBLikeButton() {
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        initFacebookSdk().then(root => {
            setIsLayoutReady(true);
        })
    }, [])

    return (
        // <div></div>
        <div className="fb-like" data-href="https://www.facebook.com/search/top?q=%E8%94%A1%E6%BF%A1%E5%AE%89&amp;amp;locale=zh_TW" data-width="280px" data-layout="" data-action="" data-size="" data-share="true"></div>
    )
}

export default memo(FBLikeButton);