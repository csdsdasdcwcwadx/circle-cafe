'use client';

import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "@/redux/actions";
import { E_Page } from "@/redux/interfaces";

interface I_props {
    currentPage: E_Page;
}

function Setter({currentPage}: I_props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPage(currentPage));
    }, [dispatch, currentPage])

    return (
        <>
        </>
    )
}

export default memo(Setter);