import {
    LuChevronsLeft,
    LuChevronsRight,
    LuList,
    LuHouse,
    LuSearch,
    LuHeadphones,
    LuBookmark,
    LuBookOpen,
    LuUser,
    LuAlignJustify,
} from "react-icons/lu";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./PaginationBar.module.css";

export function PaginationBar() {
    return (
        <div className={styles.main_pagination}>
            <div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationLink href="#" aria-label="Назад">
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
                            <PaginationLink href="#" aria-label="Назад">
                                <LuChevronsRight />
                            </PaginationLink>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <div>
                <Dialog>
                    <DialogTrigger
                        render={
                            <Button
                                variant="outline"
                                className={styles.pagination_index_btn}
                            >
                                {/* Кнопка содержания */}
                                <LuList />
                            </Button>
                        }
                    />
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Содержание</DialogTitle>
                            <DialogDescription>
                                This dialog has a sticky footer that stays
                                visible while the content scrolls.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <p key={index} className="mb-4 leading-normal">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            ))}
                        </div>
                        <DialogFooter>
                            <DialogClose
                                render={
                                    <Button variant="outline">Закрыть</Button>
                                }
                            />
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
