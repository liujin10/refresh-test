/** @jsx h */
import {h} from "preact"
import {PageProps} from "$fresh/server.ts"

export default function GreetPage(props: PageProps) {
    const {name} = props.params;
    return (
        <main>
            <p>来到的是{name}页面</p>
        </main>
    )
}