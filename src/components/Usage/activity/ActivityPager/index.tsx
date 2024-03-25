'use client';

import { memo, useEffect, useState } from "react";
import PageNumber from "@/components/Common/PageNumber";

function ActivityPager() {
    const [serial, setSerial] = useState(1);

    return <PageNumber serial={serial} setSerial={setSerial} maxpage={10} typeIn/>
}

export default memo(ActivityPager);