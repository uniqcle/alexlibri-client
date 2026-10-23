import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { LuChevronsLeft, LuChevronsRight } from "react-icons/lu";

import styles from "./PaginationList.module.css";

export function PaginationList() {
    return (
        <div className={styles.paginationWrapper}>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink href="#" aria-label="Было">
                            <LuChevronsLeft />
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">I</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            II
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">III</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" aria-label="Будет">
                            <LuChevronsRight />
                        </PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
