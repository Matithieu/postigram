"use client"

import { Button } from "@/components/ui/button";
import {pagination} from "@/lib/actions/post-action/post-repository";


export function test() {
    const result = pagination(1,1);
    console.log(result);
}

export default function testPagination() {
    return (
        <Button onClick={test}>test</Button>
    )
}