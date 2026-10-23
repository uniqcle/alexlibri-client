import { SingleTextPage } from "../SingleTextPage/SingleTextPage";

import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { PaginationBar } from "../PaginationBar/PaginationBar";
 

export function SingleContent() {
    return (
        <>
            <Breadcrumbs />
            <div className=" typeset typeset-docs ">
                <SingleTextPage />
            </div>
            <PaginationBar />
        </>
    );
}
